# Brand assets — TAL Company

Replacements for the four Tobin at Large assets that have the old name set in
the image. The TAL monogram, LinkedIn avatar and favicons only say "TAL" and are
unchanged.

The brand is TAL. "Company" is a descriptor and is always set smaller, lighter
and wider spaced than TAL, never at the same size. In the mark it sits inside
the frame beneath TAL; on the banners, which have no frame, it sits beneath TAL.
Open `review.html` in a browser to compare against the current files.

| Asset                     | Size        | Replaces                                  |
| ------------------------- | ----------- | ----------------------------------------- |
| `tal-lockup`              | 2000 × 2000 | `public/logo/tal-lockup.png`              |
| `og`                      | 1200 × 628  | `public/og.png`                           |
| `banner-profile-1584x396` | 3168 × 792  | `public/logo/banner-profile-1584x396.png` |
| `banner-company-1128x191` | 2256 × 382  | `public/logo/banner-company-1128x191.png` |

`svg/` is the source. Text is converted to outlines, so the files render the
same anywhere with no fonts installed. `png/` holds renders of those SVGs.

## Rebuild

```
mkdir -p .fonts && cd .fonts
for f in playfairdisplay/PlayfairDisplay%5Bwght%5D.ttf \
         cormorantgaramond/CormorantGaramond%5Bwght%5D.ttf \
         cormorantgaramond/CormorantGaramond-Italic%5Bwght%5D.ttf; do
  curl -sSfLO "https://github.com/google/fonts/raw/main/ofl/$f"
done
for f in *%5B*; do mv "$f" "$(echo "$f" | sed 's/%5B/[/;s/%5D/]/')"; done
cd ..
uv run --no-project --with fonttools --with uharfbuzz python build.py
```

Needs `rsvg-convert` (librsvg). Layout numbers in `build.py` were measured off
the originals; re-rendering "TOBIN AT LARGE" through them reproduces the
current files.
