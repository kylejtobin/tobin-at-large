# TAL Company

The site for TAL Company at [talco.dev](https://talco.dev). A static Astro site
on Vercel.

- **[PRODUCT.md](PRODUCT.md)**: positioning, voice, and messaging rules.
- **[DESIGN.md](DESIGN.md)**: the design system.
- **[brand/](brand/README.md)**: the mark, link card, banners, and paper
  texture, built from source.

## Setup

```
pnpm install
just dev      # dev server
just check    # types, formatting, lint, build
```

## Content

- `src/content/positions/`: one file per position (headline, optional line,
  proof blocks). The schema in `src/content.config.ts` rejects a malformed one.
- `src/content/works/`: the book and the open-source work.

## Deploy

Work happens on `preview`; Vercel deploys it to talco-preview.vercel.app.
`just ship` checks the build, fast-forwards `main`, and pushes; Vercel deploys
talco.dev.

## License

All rights reserved.
