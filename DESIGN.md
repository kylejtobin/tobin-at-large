# TAL design system

The site is a **drawing set**. TAL designs the structure organizations run on,
so its page is drafted like an architect's sheets: framed, precise, composed.
The identity carries the authority; nothing on the page announces it.

This file, with PRODUCT.md, is the record the page is checked against. A
layout rule here is a constraint to solve for when content grows, not a line
to rewrite to fit what was built.

## Structure

- **Bar** (sticky): the mark and one action, _Email us_, a mailto labelled
  as one. The bar's mark stands down while the cover's mark is on screen.
- **Cover** (full screen): the mark and the conviction as the largest type
  on the site. Nothing else.
- **01, the book**: its own cover as a plate, large, with its caption beside
  it: label, title, author, one line, the link.
- **02, the tools**: ONTOK and TCA side by side at equal weight, each repo's
  own hero image as a plate, its caption under it.
- **03, founder**: the portrait drawn on the sheet, the declaration, the
  door.
- **Footer**: copyright and profile links, small.

## Principles

1. **Compose, don't fill.** A sheet is as tall as its composition needs. Only
   the cover holds the full first screen. Space is rhythm, never leftover.
2. **One focal point per sheet.** The position's headline, the book on the work
   sheet, the statement on the cover. Everything else steps back in scale and
   tone.
3. **Each element has one job.** Say a thing once, in the one place it belongs.
   No captions that explain what a proof already shows.
4. **Evolve, never restart.** Improve what exists. Rebuilding from scratch has
   always thrown away the parts that worked.
5. **Nothing decorative.** Every line, mark, and image means something or it
   goes.

## Sheets

- Hairline frame inset from the paper's edge; corners **overshoot** the way a
  draughtsman closes a border.
- The frame **drafts in once** as the sheet enters view. The only motion on the
  site. Static under reduced motion.
- A sheet carries only its **number** at its head. No titles in the margin, no
  repeated maker's mark.
- Consecutive sheets share their edges, like pages in a set.

## Color

| Token                    | Value            | Use                                                         |
| ------------------------ | ---------------- | ----------------------------------------------------------- |
| `--paper`                | `#eee3d0`        | the sheet; radial falloff `#f2e9d9 → #e8dcc6`               |
| `--ink`                  | `#1a1a1a`        | claims, primary text                                        |
| `--ink-light`            | `#3a3a3a`        | reading text                                                |
| `--ink-quiet`            | `#625c53`        | labels, metadata (≥ 4.5:1 even at the paper's darkest edge) |
| `--line`, `--line-faint` | ink at 32% / 14% | rules and frames only, never text                           |
| `--signal`               | `#c8452c`        | the plates' red, for lines and marks                        |
| `--signal-text`          | `#a8371f`        | red as text (≥ 4.5:1)                                       |

**Paper texture:** a lit relief tile (`public/paper.webp`, built by
`brand/build.py`) laid over everything with `overlay`, so ink and plates take
the tooth too. Warm drafting stock, never parchment mottling.

## Type

- **Playfair Display**: claims. Headlines, positions, titles. Balanced wrap.
- **Cormorant Garamond**: reading. Supporting lines, descriptors in italic.
- **IBM Plex Mono**: small metadata only. Sheet numbers, table headers, the
  CTA, the footer. Overused, it turns the page into a dev tool.

## Images

- The works' images are their real ones: the book's published cover and
  each repo's README hero, in their own colour. Never washed, filtered or
  redrawn. They sit as objects: a contact edge and a soft fall of light
  (`box-shadow`), served as AVIF/WebP at 2×.
- The tall book cover leads on its own sheet; the two wide tool plates sit
  side by side on the next.
- The founder portrait is drawn in pencil on the site's paper and dissolves
  into the sheet at its edges; it is the style reference in
  `brand/illustrations/`.
- No invented illustrations. A drawing appears only where it carries something
  words cannot.

## What has failed

- A document with section headers and scroll: a Word file on colored paper.
- Full-screen sheets with content floating in the middle.
- A centered SaaS hero with an illustration on the right.
- An invented icon grid drawn to literally illustrate the headline.
- Frames kept after they lost their reason; mono labels everywhere.
- Three of everything, by reflex.
- A teaching site: positions with drawn proofs, a five-stage method with
  its own page, an interactive outcome-space drawing. It competed with the
  book and was removed whole.
- The works' plates in grey at rest: they read as washed-out copies.

## Verification

Every change is checked by eye, not just by build: screenshots at desktop
(1440×900) and phone (390×844), zero horizontal overflow, contrast measured on
the darkest paper. Then the whole page is read top to bottom at reading pace, as a
stranger would, and what held and what moved is reported. `just check` before
every push; push only on green.
