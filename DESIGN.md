# TAL design system

The site is a **drawing set**. TAL designs the structure organizations run on,
so its page is drafted like an architect's sheets: framed, precise, composed.
The identity carries the authority; nothing on the page announces it.

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

## Structure

- **Bar** (sticky): the mark and one action, _Start a conversation_. The bar's
  mark stands down while the cover's mark is on screen, so identity never
  appears twice at once.
- **Cover** (full screen): the mark, the point of view as the largest type on
  the site, one supporting line, and the one drawing on the site keying the
  index of positions.
- **Position sheets**: a mirrored spread. The position as headline beside its
  proof, both hanging from one top edge. Alternate sheets mirror.
- **Work sheet**: one composed exhibit. The book leads at full scale; the tools
  stack beside it at half its weight.
- **Founder sheet**: the portrait as a plate, one statement beside it.
- **Contact** (compact): one line and the address.
- **Footer**: copyright and profile links, small.

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

**Red means live.** It marks only what the work refuses or what is live: a
proof's marked cell, a struck line, a code comment that is the point, the
cover's origin. One red gesture per proof. Never decoration.

## Type

- **Playfair Display**: claims. Headlines, positions, titles. Balanced wrap.
- **Cormorant Garamond**: reading. Supporting lines, descriptors in italic.
- **IBM Plex Mono**: small metadata only. Sheet numbers, table headers, the
  CTA, the footer. Overused, it turns the page into a dev tool.

## Proofs

A proof is drawn, never captioned, and shows the move from implicit to
explicit:

- **Tables** may mark one live cell (red node) and hatch one column as out of
  an agent's reach.
- **Struck lines** show the replaced way (speech or code), struck in red above
  what replaces it.
- **Code** blocks are framed; a red comment carries the point.

## The consulting cycle

One value stream drawn through the drafting lifecycle the method already is:
named (See), surveyed as built against as described (Declare), revised in red
clouds (Refactor), revised A, B, until C is issued (Prototype), reused as TYP.
(Scale). Value-stream notation: process boxes, wait triangles, the lead-time
line. Automated steps are hatched.

- On wide screens the loop is the control. The next stage's balloon carries
  the red node; visited stages keep an ink ring. Each stage's text ends in
  the question that advances it.
- A whole step (drawing, premise, move, next question) fits on one screen.
- Narrow screens and no script read the five states as small multiples. No
  scroll-jacking, ever.

## Images

- Product covers and plates sit as objects: a contact edge and a soft fall of
  light (`box-shadow`), served as AVIF/WebP at 2×.
- Tall (book) leads; wide (software plates) support at half weight.
- The founder portrait is a pencil drawing on the site's own paper.
- No invented illustrations. A drawing appears only where it carries something
  words cannot.

## What has failed

- A document with section headers and scroll: a Word file on colored paper.
- Full-screen sheets with content floating in the middle.
- A centered SaaS hero with an illustration on the right.
- An invented icon grid drawn to literally illustrate the headline.
- Frames kept after they lost their reason; mono labels everywhere.
- Three of everything, by reflex.

## Verification

Every change is checked by eye, not just by build: screenshots at desktop
(1440×900) and phone (390×844), zero horizontal overflow, contrast measured on
the darkest paper. `just check` before every push; push only on green.
