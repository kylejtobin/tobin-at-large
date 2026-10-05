"""Build the TAL & Co. brand assets: SVG sources and PNG renders.

Text is set with HarfBuzz and written as outlines, so every SVG renders the same
anywhere — no font install, no fallback serif. Geometry is measured off the
Tobin at Large originals in `public/`, so the new files drop in at the same
sizes with the same composition.

    uv run --no-project --with fonttools --with uharfbuzz python build.py

Needs `rsvg-convert` for the PNGs and the four OFL fonts in `.fonts/`
(see README.md).
"""

from __future__ import annotations

import subprocess
from html import escape
from dataclasses import dataclass
from pathlib import Path

import uharfbuzz as hb
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont

HERE = Path(__file__).parent
FONTS = HERE / ".fonts"
SVG_DIR = HERE / "svg"
PNG_DIR = HERE / "png"

INK = "#1a1a1a"
INK_LIGHT = "#3a3a3a"
INK_FAINT = "#8a8378"

# The brand is TAL. "Company" is only there so the name is more than three
# letters, so it is always set as a descriptor: smaller, lighter and wider
# spaced than TAL, never at the same size.
NAME = "TAL Company"
DESCRIPTOR = "COMPANY"
TAGLINE = "An independent practice in the architecture of automated organizations."


@dataclass(frozen=True)
class Face:
    file: str
    wght: float

    def load(self) -> tuple[TTFont, hb.Font]:
        tt = TTFont(FONTS / self.file)
        blob = hb.Blob.from_file_path(str(FONTS / self.file))
        font = hb.Font(hb.Face(blob))
        font.set_variations({"wght": self.wght})
        return tt, font


PLAYFAIR = Face("PlayfairDisplay[wght].ttf", 400)
CORMORANT = Face("CormorantGaramond[wght].ttf", 500)
CORMORANT_ITALIC = Face("CormorantGaramond-Italic[wght].ttf", 400)
# Stands in for Playfair's `&` in the wordmark; see `_runs`.
AMPERSAND = Face("CormorantGaramond[wght].ttf", 500)

_cache: dict[Face, tuple[TTFont, hb.Font]] = {}


def _face(face: Face) -> tuple[TTFont, hb.Font]:
    if face not in _cache:
        _cache[face] = face.load()
    return _cache[face]


def cap_to_size(face: Face, cap: float) -> float:
    """Font size whose capital letters stand `cap` px tall."""
    tt, _ = _face(face)
    return cap * tt["head"].unitsPerEm / tt["OS/2"].sCapHeight


def set_text(
    face: Face,
    text: str,
    size: float,
    *,
    cx: float,
    baseline: float,
    tracking: float = 0.0,
    fill: str = INK,
) -> str:
    """One line of text as an SVG <path>, centred on `cx`.

    `tracking` is extra space after every glyph but the last, in em. Kerning
    still applies between glyphs; tracking is added on top of it.
    """
    placed, width = _layout(face, text, size, tracking)

    left = cx - width / 2
    commands: list[str] = []
    for glyph, x in placed:
        svg_pen = SVGPathPen(glyph.glyph_set)
        # font units are y-up; SVG is y-down
        glyph.glyph_set[glyph.name].draw(
            TransformPen(
                svg_pen,
                (glyph.scale, 0, 0, -glyph.scale, left + x + glyph.x_offset, baseline - glyph.y_offset),
            )
        )
        commands.append(svg_pen.getCommands())
    return f'<path fill="{fill}" d="{" ".join(commands)}"/>'


def _layout(
    face: Face, text: str, size: float, tracking: float
) -> tuple[list[tuple[_Glyph, float]], float]:
    glyphs: list[_Glyph] = []
    for run_face, run_text, run_size in _runs(face, text, size):
        glyphs += _shape(run_face, run_text, run_size)

    placed: list[tuple[_Glyph, float]] = []
    pen_x = 0.0
    for i, glyph in enumerate(glyphs):
        placed.append((glyph, pen_x))
        pen_x += glyph.advance
        # Punctuation sits tight against its word: tracking "CO." would float
        # the period off as "CO ."
        if i < len(glyphs) - 1 and glyphs[i + 1].char not in ".,":
            pen_x += tracking * size
    return placed, pen_x


@dataclass(frozen=True)
class _Glyph:
    glyph_set: object
    name: str
    char: str
    scale: float
    advance: float
    x_offset: float
    y_offset: float


def _runs(face: Face, text: str, size: float) -> list[tuple[Face, str, float]]:
    """Split a line into runs, drawing Playfair's ampersands from Cormorant.

    Playfair's `&` is a swash that shouts over the capitals around it.
    Cormorant's is the plain old-style form; it is set so its capitals would
    stand as tall as Playfair's, which puts the two on one optical line.
    """
    if face != PLAYFAIR or "&" not in text:
        return [(face, text, size)]
    amp_size = cap_to_size(AMPERSAND, size * _cap_ratio(PLAYFAIR))
    runs: list[tuple[Face, str, float]] = []
    for i, part in enumerate(text.split("&")):
        if i:
            runs.append((AMPERSAND, "&", amp_size))
        if part:
            runs.append((face, part, size))
    return runs


def _cap_ratio(face: Face) -> float:
    tt, _ = _face(face)
    return tt["OS/2"].sCapHeight / tt["head"].unitsPerEm


def _shape(face: Face, text: str, size: float) -> list[_Glyph]:
    tt, font = _face(face)
    scale = size / tt["head"].unitsPerEm

    buf = hb.Buffer()
    buf.add_str(text)
    buf.guess_segment_properties()
    hb.shape(font, buf, {"kern": True, "liga": True})

    glyph_set = tt.getGlyphSet(location={"wght": face.wght})
    order = tt.getGlyphOrder()
    return [
        _Glyph(
            glyph_set=glyph_set,
            name=order[info.codepoint],
            char=text[info.cluster],
            scale=scale,
            advance=pos.x_advance * scale,
            x_offset=pos.x_offset * scale,
            y_offset=pos.y_offset * scale,
        )
        for info, pos in zip(buf.glyph_infos, buf.glyph_positions)
    ]


def paper(w: int, h: int) -> str:
    """The site's sheet: a soft radial falloff with a faint multiplied grain."""
    return f"""<defs>
    <radialGradient id="paper" cx="50%" cy="32%" r="130%" fx="50%" fy="32%">
      <stop offset="0" stop-color="#f0e8db"/>
      <stop offset="0.7" stop-color="#ece4d6"/>
      <stop offset="1" stop-color="#e7dfcf"/>
    </radialGradient>
    <filter id="grain" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
    </filter>
  </defs>
  <rect width="{w}" height="{h}" fill="url(#paper)"/>
  <rect width="{w}" height="{h}" filter="url(#grain)" opacity="0.045" style="mix-blend-mode:multiply"/>"""


def rule(cx: float, y: float, width: float, weight: float, color: str = INK) -> str:
    return (
        f'<rect x="{cx - width / 2:.2f}" y="{y - weight / 2:.2f}" '
        f'width="{width:.2f}" height="{weight:.2f}" fill="{color}"/>'
    )


def monogram(cx: float, box_top: float, cap: float, stroke: float) -> tuple[str, float]:
    """The mark: TAL, with COMPANY beneath it, inside one hairline frame.

    Every dimension is a multiple of TAL's cap height, so the lockup and the
    link preview are the same mark at two sizes. Returns the SVG and the frame's
    bottom edge, so callers can set what follows it.
    """
    pad = 0.30 * cap  # frame to TAL's cap line, and COMPANY's baseline to frame
    gap = 0.25 * cap  # TAL's baseline to COMPANY's cap line
    desc_cap = 0.157 * cap
    box_w = 2.947 * cap

    tal_size = cap_to_size(PLAYFAIR, cap)
    tal_base = box_top + pad + cap
    desc_size = cap_to_size(PLAYFAIR, desc_cap)
    desc_base = tal_base + gap + desc_cap
    box_h = desc_base + pad - box_top

    frame = (
        f'<rect x="{cx - box_w / 2 + stroke / 2:.2f}" y="{box_top + stroke / 2:.2f}" '
        f'width="{box_w - stroke:.2f}" height="{box_h - stroke:.2f}" '
        f'fill="none" stroke="{INK}" stroke-width="{stroke}"/>'
    )
    tal = set_text(PLAYFAIR, "TAL", tal_size, cx=cx, baseline=tal_base, tracking=0.05)
    desc = set_text(PLAYFAIR, DESCRIPTOR, desc_size, cx=cx, baseline=desc_base, tracking=0.62, fill=INK_LIGHT)
    return "\n  ".join([frame, tal, desc]), box_top + box_h


def document(w: int, h: int, title: str, body: list[str]) -> str:
    inner = "\n  ".join(body)
    return f"""<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}">
  <title>{escape(title)}</title>
  {paper(w, h)}
  {inner}
</svg>
"""


# ---- the assets -----------------------------------------------------------------
# Numbers are the original composition, measured in each asset's own pixel space.


def lockup() -> tuple[int, int, str]:
    w = h = 2000
    cap = 281
    mark, _ = monogram(1000, (h - 2.007 * cap) / 2, cap, 5)
    return w, h, document(w, h, NAME, [mark])


def og() -> tuple[int, int, str]:
    w, h = 1200, 628
    # the practice's card: the mark and what the practice is, centred as a block
    mark, bottom = monogram(600, 160, 95, 1.5)
    body = [
        mark,
        rule(600, bottom + 60, 152, 1, INK_FAINT),
        set_text(CORMORANT_ITALIC, TAGLINE, 24, cx=600, baseline=bottom + 112, fill=INK_LIGHT),
    ]
    return w, h, document(w, h, NAME, body)


# The banners have no box, so TAL itself carries the name, with COMPANY small
# and wide beneath it. `k` scales the profile banner's numbers to a smaller one.


def _banner_text(cx: float, cy: float, k: float) -> list[str]:
    base = cy - 14.5 * k
    return [
        set_text(PLAYFAIR, "TAL", cap_to_size(PLAYFAIR, 150 * k), cx=cx, baseline=base, tracking=0.1),
        set_text(PLAYFAIR, DESCRIPTOR, cap_to_size(PLAYFAIR, 30 * k), cx=cx, baseline=base + 74 * k, tracking=0.7, fill=INK_LIGHT),
        set_text(CORMORANT_ITALIC, TAGLINE, 54 * k, cx=cx, baseline=base + 160 * k, fill=INK_LIGHT),
    ]


def banner_profile() -> tuple[int, int, str]:
    # Weighted right so LinkedIn's avatar overlay, bottom-left, never meets it.
    w, h = 3168, 792
    # the statement is long; centring at 2150 keeps its left end clear of the
    # avatar, which covers roughly the left third of the lower half
    body = _banner_text(2150, h / 2, 1.0)
    return w, h, document(w, h, f"{NAME} profile banner", body)


def banner_company() -> tuple[int, int, str]:
    w, h = 2256, 382
    body = _banner_text(1365, h / 2, 47 / 64)
    return w, h, document(w, h, f"{NAME} company banner", body)


ASSETS = {
    "tal-lockup": lockup,
    "og": og,
    "banner-profile-1584x396": banner_profile,
    "banner-company-1128x191": banner_company,
}


# ---- the page's paper --------------------------------------------------------
# A lit relief tile, not flat noise: turbulence builds a height field (soft
# formation, a faint horizontal fibre, fine tooth) and a low raking light shades
# it, so each fleck has a lit side and a shadowed side, as real stock does. The
# page tiles it at half size (2x) and blends it with `overlay`, which needs the
# tile to average mid-grey so it adds texture without shifting the colour.

PAPER_TILE = 768
#: Overlay barely moves a light page, so the tile carries extra contrast; the
#: page's opacity then sets the final strength (about 4.5 levels of variation).
PAPER_CONTRAST = 2.2


def paper_tile() -> str:
    n = PAPER_TILE
    return f"""<svg xmlns="http://www.w3.org/2000/svg" width="{n}" height="{n}" viewBox="0 0 {n} {n}">
  <filter id="paper" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB">
    <feTurbulence type="fractalNoise" baseFrequency="0.006" numOctaves="3" seed="11" stitchTiles="stitch" result="formation"/>
    <feTurbulence type="fractalNoise" baseFrequency="0.09 0.38" numOctaves="3" seed="7" stitchTiles="stitch" result="fibre"/>
    <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="3" seed="3" stitchTiles="stitch" result="tooth"/>
    <feComposite in="fibre" in2="tooth" operator="arithmetic" k2="0.45" k3="0.55" result="surface"/>
    <feComposite in="formation" in2="surface" operator="arithmetic" k2="0.35" k3="0.65" result="height"/>
    <feDiffuseLighting in="height" surfaceScale="1.3" diffuseConstant="1" lighting-color="#fff">
      <feDistantLight azimuth="225" elevation="48"/>
    </feDiffuseLighting>
  </filter>
  <rect width="{n}" height="{n}" filter="url(#paper)"/>
</svg>
"""


def build_paper() -> None:
    svg_path = SVG_DIR / "paper.svg"
    svg_path.write_text(paper_tile())
    lit = PNG_DIR / "paper-lit.png"
    subprocess.run(["rsvg-convert", str(svg_path), "-o", str(lit)], check=True)
    mean = subprocess.run(
        ["magick", str(lit), "-colorspace", "gray", "-format", "%[fx:mean]", "info:"],
        check=True, capture_output=True, text=True,
    ).stdout
    # Noise barely compresses; at q50 it is indistinguishable from q80 at 2x.
    subprocess.run(
        [
            "magick", str(lit), "-colorspace", "gray",
            "-fx", f"0.5+(u-{mean})*{PAPER_CONTRAST}",
            "-quality", "50", "-define", "webp:method=6",
            str(PNG_DIR / "paper.webp"),
        ],
        check=True,
    )
    lit.unlink()
    print("built paper")


def main() -> None:
    SVG_DIR.mkdir(exist_ok=True)
    PNG_DIR.mkdir(exist_ok=True)
    for stem, build in ASSETS.items():
        _, _, svg = build()
        svg_path = SVG_DIR / f"{stem}.svg"
        svg_path.write_text(svg)
        subprocess.run(
            ["rsvg-convert", str(svg_path), "-o", str(PNG_DIR / f"{stem}.png")],
            check=True,
        )
        print(f"built {stem}")
    build_paper()


if __name__ == "__main__":
    main()
