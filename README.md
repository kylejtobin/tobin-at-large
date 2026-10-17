# TAL Company

The site for TAL Company at [talco.dev](https://talco.dev). A static Astro site
on Vercel.

- **[PRODUCT.md](PRODUCT.md)**: the telos, the idea, the page, and the
  messaging rules.
- **[DESIGN.md](DESIGN.md)**: the design system, type roles and copy
  budgets.
- **[brand/](brand/README.md)**: the mark, link card, banners, and paper
  texture, built from source.

## Setup

```
pnpm install
just dev      # dev server
just check    # types, formatting, lint, build
just measure  # the built page against the copy budgets, at 1440, 1280, 390
```

`just measure` drives the installed Chrome (`google-chrome-stable`, or set
`CHROME`).

## Content

`src/content/works/` holds one file per work, in page order. The frontmatter
gives the sheet's headline (`claim`), the entry's kind, status, year and
next-step line, the link, the plate image, the order, and `detail` for the
one sheet whose exhibit is drawn code (`src/components/Detail.astro`) in
place of its plate. The body is the
sheet's evidence; its first paragraph is the turn. The schema in
`src/content.config.ts` rejects a malformed file.

## Deploy

Work happens on `preview`; Vercel deploys it to talco-preview.vercel.app.
`just ship` checks the build, fast-forwards `main`, and pushes; Vercel deploys
talco.dev.

## License

All rights reserved.
