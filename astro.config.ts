import { defineConfig } from "astro/config";

// Static site. Astro's default output is "static", which Vercel auto-detects
// and serves from ./dist with zero extra config.
export default defineConfig({
  site: "https://tobinatlarge.com",
});
