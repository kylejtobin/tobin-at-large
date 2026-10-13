# TAL design system

The site is a **drawing set**. TAL designs the structure organizations run on,
so its page is drafted like an architect's sheets: framed, precise, composed.
The identity carries the authority; nothing on the page announces it.

This file, with PRODUCT.md, is the record the page is checked against. A
layout rule here is a constraint to solve for when content grows, not a line
to rewrite to fit what was built.

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
- **Cover** (full screen): the mark, the claim as the largest type on the
  site, the exhibit under it (the desk on one case, the agent on the next,
  the desk reading it back), one supporting line, and the one drawing on
  the site keying the index of positions. No label over the index.
- **Position sheets**: a mirrored spread. The position as headline beside its
  proof, both hanging from one top edge. Alternate sheets mirror. A
  consequence line appears only for what the proof cannot show; none of the
  current four needs one.
- **Founder sheet**: the portrait, one sentence a stranger can picture, and
  the door.
- **Work sheet**: one composed exhibit. The book leads at full scale; the tools
  stack beside it at half its weight, each with a few lines of the thing
  itself under its line.
- **Founder sheet**: the portrait as a plate, one statement beside it, and
  the door under the statement: one action and the address. It is the last
  sheet.
- **Footer**: copyright and profile links, small.

## Drawing the reader through

The arc in PRODUCT.md is carried by the drawing set itself, with no device
added to it:

- The cover's index is the one navigation on the site. Its four short names
  are the steps of the argument, under the label that says what they have in
  common.
- Sheet numbers run as one set, so the reader always knows where they are and
  that there is a next.
- The position sheets alternate mirror, so turning a sheet is felt as a turn.
  The consequence line, in the reading face under the claim, is where the
  next sheet's question is left.
- Sheet 05 reads at two speeds: the premise in the display face and the
  plate, then the sentences and notes in the reading face. The next control,
  in mono, is the only forward control on the sheet, and the loop shows at a
  glance how much is left.
- The door appears twice, in the bar and under the founder's name, and
  nowhere in the teaching.

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

## Proofs

A proof is drawn, never captioned, and shows the move from implicit to
explicit:

- **Tables** may hatch one column as the version on paper. A cell may strike
  the replaced way beside what replaces it. A cell may carry the desk's own
  words in quotes: the judgment as said, never rewritten as a rule.
- **Struck lines** show the replaced way (speech or code), struck in red above
  what replaces it. **Speech**, unstruck, in italic with a quiet label, is
  what the desk knows, in the desk's words: kept, never crossed out, and
  never rewritten as a rule.
- **Code** blocks are framed; a comment is set in the quiet ink. A run log is
  code.
- **The stream** is a line with its two ends fixed as filled terminals, the
  departments it crosses as faint rules with quiet labels, and nothing drawn
  between the ends but the dashed line itself. A handoff where a person
  decides on the spot is a red point on the line with its label under it.
  Finished, the stream is drawn solid in ink end to end, with its caption.

The cycle's plates are drawn in this grammar, the same as the positions', and
reuse the positions' instances. No pencil scene: every plate is in the
grammar.

## What it takes: the cycle

One stream of work, the refund, followed through the cycle, each stage's
plate the artifact the stage produces, drawn in the proofs' grammar: the
stream with its two ends fixed and the case waiting at a handoff (See); as
written struck beside as practiced (Declare); as practiced with what each
outcome needs to exist, every row dark (Refactor); the run, the agent
judging and one missing kind found (Prototype); the same stream drawn solid
end to end with its caption, every case, no one in it (Scale).

- **No legends, keys or column notes.** A plate proves its claim on its own
  or it is redrawn. The one exception is the hatch on sheet 01, which reads
  as a void without a key. Row tones and their legend were tried and cut:
  a table whose rows are all one tone draws no contrast, so the swatches
  only narrated.
- **A stage is set out as a demonstration**, the way a plate and its notes sit
  in a folio. On a wide screen the enunciation, the stage number and the
  premise, sits over the plate in the plate's column, and the commentary runs
  the stage's full height beside them, starting level with the enunciation.
  The commentary is numbered notes only for what the plate cannot show, at
  most three. After the last stage, the door, "Start with one stream", in
  mono. The decision the stage fixes is in the plate, never captioned. No
  body copy, no sheet keys, no italic definitions.
- Every stage is on the page. The loop is an index: it sits beside the
  stages on wide screens and follows them as they scroll; a balloon scrolls
  to its stage, and the balloon of the stage in view is drawn in full ink.
  On a phone the loop sits above the stages.
- **No red dots.** Red appears only as the plates' accent, the struck line, and
  the label of the column out of an agent's reach.
- The sheet opens with the headline and nothing else before the loop: the
  See plate draws what a stream is.
- A stage (enunciation, plate, notes) fits on one screen at 1440×900 and
  1280×800, and the five read on as a sheet.
- The loop's arrowhead draws the return to See. After Scale, the door.
- Without script the five stages read in order. No scroll-jacking, ever.

## Images

- Product covers and plates sit as objects: a contact edge and a soft fall of
  light (`box-shadow`), served as AVIF/WebP at 2×.
- Tall (book) leads; wide (software plates) support at half weight.
- The founder portrait is drawn in pencil on the site's paper and dissolves
  into the sheet at its edges; it is the style reference in
  `brand/illustrations/`.
- The method sheet is _How we do it_, its anchor is `#how-we-do-it`, the
  component is the cycle.
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
the darkest paper, and each stage of the cycle measured against the one-screen
rule. Then the whole page is read top to bottom at reading pace, as a
stranger would, and what held and what moved is reported. `just check` before
every push; push only on green.
