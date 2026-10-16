// Measures the built page against the copy budgets in DESIGN.md, at the
// widths it is designed for, in headless Chrome. Exits 1 on any violation.
//   node scripts/measure.mjs   (after `pnpm build`)
import { spawn } from "node:child_process";
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join } from "node:path";

const DIST = new URL("../dist/", import.meta.url).pathname;
const CHROME = process.env.CHROME ?? "google-chrome-stable";
const WIDTHS = [
  [1440, 900, true],
  [1280, 800, true],
  [390, 844, false],
];
const TYPES = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".svg": "image/svg+xml",
};

const server = createServer(async (req, res) => {
  const path = decodeURIComponent(new URL(req.url, "http://x").pathname);
  const file = join(DIST, path.endsWith("/") ? path + "index.html" : path);
  try {
    const body = await readFile(file);
    res.writeHead(200, { "content-type": TYPES[extname(file)] ?? "" });
    res.end(body);
  } catch {
    res.writeHead(404).end();
  }
}).listen(0);
const site = `http://127.0.0.1:${server.address().port}/`;

const chrome = spawn(
  CHROME,
  [
    "--headless=new",
    "--remote-debugging-port=0",
    "--no-first-run",
    "--user-data-dir=" + join(process.env.TMPDIR ?? "/tmp", "tal-measure"),
  ],
  { stdio: ["ignore", "ignore", "pipe"] },
);
const wsUrl = await new Promise((resolve, reject) => {
  chrome.stderr.on("data", (d) => {
    const m = String(d).match(/ws:\/\/\S+/);
    if (m) resolve(m[0]);
  });
  chrome.on("exit", () => reject(new Error("chrome exited")));
});

const ws = new WebSocket(wsUrl);
await new Promise((r) => ws.addEventListener("open", r, { once: true }));
let id = 0;
const pending = new Map();
const waiters = [];
ws.addEventListener("message", ({ data }) => {
  const msg = JSON.parse(data);
  if (msg.id && pending.has(msg.id)) {
    pending.get(msg.id)(msg);
    pending.delete(msg.id);
  } else if (msg.method) {
    waiters.filter((w) => w.method === msg.method).forEach((w) => w.resolve());
  }
});
const send = (method, params = {}, sessionId) =>
  new Promise((resolve) => {
    pending.set(++id, resolve);
    ws.send(JSON.stringify({ id, method, params, sessionId }));
  });
const event = (method) =>
  new Promise((resolve) => waiters.push({ method, resolve }));

// runs in the page: line counts, short last lines, column heights, overflow
const probe = (desktop) => {
  const lines = (el) => {
    const r = document.createRange();
    r.selectNodeContents(el);
    const rects = [...r.getClientRects()].filter((x) => x.width > 2);
    const rows = [...new Set(rects.map((x) => Math.round(x.bottom)))];
    const last = rects
      .filter((x) => Math.round(x.bottom) === rows.at(-1))
      .reduce((a, x) => a + x.width, 0);
    return { n: rows.length, last, w: el.getBoundingClientRect().width };
  };
  const text = (el) => el.textContent.trim().slice(0, 40);
  const out = [];
  const budget = (sel, max, what) =>
    document.querySelectorAll(sel).forEach((el) => {
      const n = lines(el).n;
      if (n > max)
        out.push(`${what} runs ${n} lines (max ${max}): ${text(el)}`);
    });
  if (desktop) {
    budget(".sheet h2, .whole h2", 2, "headline");
    budget(".contents .claim", 1, "contents entry");
    budget(".title-link", 1, "title link");
  }
  budget(".entry .line", 1, "entry line");
  document
    .querySelectorAll(".reading > p, .whole .turn, .statement")
    .forEach((el) => {
      const l = lines(el);
      if (l.n > 1 && l.last < l.w * 0.2)
        out.push(`short last line (${Math.round(l.last)}px): ${text(el)}`);
    });
  if (desktop)
    document.querySelectorAll(".sheet").forEach((s) => {
      // the evidence's text against what the drawing field holds, not
      // their cells: the plate, and the detail under it where there is one
      const held = [...s.querySelector(".exhibit").children];
      const x =
        held.at(-1).getBoundingClientRect().bottom -
        held[0].getBoundingClientRect().top;
      const kids = [...s.querySelector(".reading").children];
      const r =
        kids.at(-1).getBoundingClientRect().bottom -
        kids[0].getBoundingClientRect().top;
      if (r > x + 40)
        out.push(
          `evidence ${Math.round(r)}px taller than plate ${Math.round(x)}px: ${text(s.querySelector("h2"))}`,
        );
    });
  const sw = document.documentElement.scrollWidth;
  if (sw > innerWidth) out.push(`horizontal overflow: ${sw}px`);
  return out;
};

const { targetId } = (await send("Target.createTarget", { url: "about:blank" }))
  .result;
const { sessionId } = (
  await send("Target.attachToTarget", { targetId, flatten: true })
).result;
await send("Page.enable", {}, sessionId);
let failed = 0;
for (const [width, height, desktop] of WIDTHS) {
  await send(
    "Emulation.setDeviceMetricsOverride",
    { width, height, deviceScaleFactor: 1, mobile: !desktop },
    sessionId,
  );
  const loaded = event("Page.loadEventFired");
  await send("Page.navigate", { url: site }, sessionId);
  await loaded;
  await send(
    "Runtime.evaluate",
    { expression: "document.fonts.ready", awaitPromise: true },
    sessionId,
  );
  const { result } = (
    await send(
      "Runtime.evaluate",
      { expression: `(${probe})(${desktop})`, returnByValue: true },
      sessionId,
    )
  ).result;
  const found = result.value;
  failed += found.length;
  console.log(`${width}×${height}: ${found.length ? "" : "ok"}`);
  found.forEach((f) => console.log(`  ✗ ${f}`));
}
ws.close();
chrome.kill();
server.close();
process.exit(failed ? 1 : 0);
