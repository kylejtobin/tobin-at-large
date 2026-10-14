# TAL design system

The site is a **drawing set**. TAL designs the structure organizations run on,
so its page is drafted like an architect's sheets: framed, precise, composed.
The identity carries the authority; nothing on the page announces it.

This file, with PRODUCT.md, is the record the page is checked against. A
layout rule here is a constraint to solve for when content grows, not a line
to rewrite to fit what was built.

## Structure

The page is set as an imprint: a title page, one sheet per work, a closing
sheet, an author.

- **Bar** (sticky): the imprint only, small. Nothing to click but home. It
  stands down while the title page's imprint is on screen.
- **Title page** (full screen): the mark small, as a colophon; the thesis in
  display; under it the contents, each entry a mono number, the sheet's
  headline in reading, and the work's title in quiet italic, a hairline
  under each, linking to the sheet.
- **01 to 03, the works**: the headline in display; on the left the work's
  real image as a plate with its entry under it (kind, status and year as a
  label, the title as a link, one next-step line), held in view while the
  evidence on the right is read: the turn, then reading. A list sits
  between hairlines, numbered in mono. The book's tall cover takes a
  narrower column. Under 900px everything stacks: headline, plate and
  entry, evidence.
- **Together**: one unnumbered sheet: a two-line headline in display and one
  sentence in the turn role. No image.
- **Author**: the portrait drawn on the sheet, one sentence in the turn role
  with the name in display, and correspondence: a label and the address as
  a plain link.
- **Footer**: copyright and profile links, as labels.

## Principles

1. **Compose, don't fill.** A sheet is as tall as its composition needs. Only
   the cover holds the full first screen. Space is rhythm, never leftover.
2. **One focal point per sheet.** The thesis on the cover, the situation
   each work opens on, the sentence on the author's.
   Everything else steps back in scale and tone.
3. **Each element has one job.** Say a thing once, in the one place it belongs.
   No captions that explain what a proof already shows.
4. **Evolve the design, never restart it.** Improve what exists. Rebuilding
   the design from scratch has always thrown away the parts that worked.
   Copy is the exception: it is rewritten whole, never patched.
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

**Paper texture:** a lit relief tile (`public/paper.webp`, built by
`brand/build.py`) laid over everything with `overlay`, so ink and plates take
the tooth too. Warm drafting stock, never parchment mottling.

## Type

Four roles carry every word on the page, and no other style exists:

- **Display** (Playfair Display): the thesis and the sheets' headlines,
  never a paragraph. Headlines run two lines at desktop and are written to
  about the same length, so the sheets share a rhythm.
- **Turn** (Cormorant Garamond 500, `--turn`, full ink): the one sentence
  each sheet exists for, set as the first paragraph of its evidence, where
  the eye lands after the headline. The closing passage and the author's
  sentence use it too.
- **Reading** (Cormorant Garamond 500, `--reading`, ink-light): what
  supports the turn, in short paragraphs. Lists take it in full ink.
- **Label** (IBM Plex Mono): sheet numbers, kind and year, correspondence,
  the footer. Overused, it turns the page into a dev tool.

## Copy is designed

Text is the page's main material; its amount and shape are composition.
Copy is written to a budget set by the layout, never poured into it:

- Each sheet holds about one desktop screen, and its evidence runs no
  taller than the plate and entry beside it.
- Contents entries, title links and entry lines take one line each at
  desktop; entry lines one line on a phone too.
- No paragraph ends on a short last line at 1440, 1280 or 390; a sentence
  that breaks its budget is rewritten, not the layout.
- A list is one grammar: here, questions, capitalized, each with its mark.

Every change is measured with `just measure`, which renders the built page
at all three widths and fails on any broken budget, short last line,
evidence taller than its plate, or horizontal overflow. Then it is looked at
in screenshots at each width, and the whole page is read top to bottom at
reading pace, as a stranger would. `just check` before every push; push
only on green.

## Images

- The works' images are their real ones: the book's published cover and
  each repo's README hero, in their own colour, never washed or redrawn.
  They are printed on the page's paper (`mix-blend-mode: multiply`): their
  own cool, near-white ground gives way to the warm paper, which otherwise
  makes them read pale, and their ink keeps full strength. Where the plate's
  group sticks, the group carries the blend, since sticking isolates it from
  the paper. They sit as
  objects: a contact edge and a soft fall of light, served as AVIF/WebP at
  2×.
- Each work's plate sits on its own sheet beside the evidence it holds.
- The founder portrait is drawn in pencil on the site's paper and dissolves
  into the sheet at its edges.
- No invented illustrations. A drawing appears only where it carries something
  words cannot.

## What has failed

- A document with section headers and scroll: a Word file on colored paper.
- Full-screen sheets with content floating in the middle.
- A centered SaaS hero with an illustration on the right.
- An invented icon grid drawn to literally illustrate the headline.
- Frames kept after they lost their reason; mono labels everywhere.
- Three of everything, by reflex.
- A teaching site of drawn positions, a five-stage method page and an
  interactive outcome-space drawing. The argument was made in drawings and
  the work sat to one side; removed by decision when the cycle went.
- A catalogue of three works with one line each. Structurally right, but
  the argument was gone: an empty pile of artifacts.
- The argument restored as numbered propositions ahead of the works. Old
  headlines restacked as text; the claim and the work still apart.
- Each work cut down to one step of a three-step argument. TCA read as agent
  safety alone; each work must come through whole.
- TCA argued through its own worked example, a trading desk, first as a
  list of failures and then as the desk's declarations. A demo stood in
  for reasoning from what TCA is.
- Copy patched note by note: each fix added a sentence, lines repeated,
  sources pasted back in. The page grew and got worse. Copy is rewritten
  whole from the through-line, never patched.
- Copy written without its shape: grey walls of equal paragraphs, the key
  sentence buried, a paragraph set in the display face, columns that left
  unplanned empty space, wraps that stranded one word.
- Three products for three problems: each sheet a fix for its own pain,
  the one idea felt only in the last line.
- Each work introduced in its own abstract terms. Accurate and whole, but it
  read as talk; the reader's own situation has to open each sheet.
- The works' plates in grey at rest: they read as washed-out copies.
- A boxed "Email us" button in the bar and under the founder: it made the
  page a firm. Contact is correspondence.
