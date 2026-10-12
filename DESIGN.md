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
- **Cover** (full screen): the mark, the point of view as the largest type on
  the site, one supporting line, and the one drawing on the site keying the
  index of positions.
- **Position sheets**: a mirrored spread. The position as headline beside its
  proof, both hanging from one top edge. Alternate sheets mirror.
- **Work sheet**: one composed exhibit. The book leads at full scale; the tools
  stack beside it at half its weight.
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
- Sheet 05 reads at three speeds so the skimming reader is held: the premise
  and decision in the display face, the rules in the heavier weight, the
  reasoning in the reading face. The next question, in mono, is the only
  forward control on the sheet, and the loop shows at a glance how much is
  left.
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

- **Tables** may hatch one column as out of an agent's reach.
- **Struck lines** show the replaced way (speech or code), struck in red above
  what replaces it.
- **Code** blocks are framed; a comment is set in the quiet ink.

## What it takes: the cycle

One value stream followed through the cycle in pencil scenes of the people
doing the work: a small room naming the stream (See); a room arguing over the
wall map, then four later sessions as it fills with notes (Declare); the clean
new map alone on a sunlit wall (Refactor); a montage of building, revising,
laughing at a failure, and watching it work (Prototype); the working floor of a
healthy company whose people have far more capability than before, settling
things on the spot, technology small and far back (Scale).

- **Tone means automation.** In every drawn map a pale step is done by hand and
  a dark step runs on its own. The balance holds through Declare however much
  the map is argued over, and turns in Refactor. The sheet states the rule
  once, as a legend under the loop: a pale swatch, a dark swatch, four words.
  The maps themselves are never labelled.
- **A stage is set out as a demonstration**, the way a plate and its notes sit
  in a folio. On a wide screen the enunciation, the stage number and the
  premise, sits over the plate in the plate's column, and the commentary runs
  the stage's full height beside them, starting level with the enunciation.
  The commentary has five parts, each in its own face, so the stage reads at
  three speeds: the reasoning in the reading face, keyed to the position sheets it
  rests on; the one decision the stage fixes, in the display face under a
  hairline; the rules as numbered general notes, the rule in the heavier
  weight and its reason after it; what it earns, in italic under a short rule,
  as a position's consequence line; and the next question in mono.
- **Keys.** A sentence that rests on a position carries that sheet's number
  after it, small, in mono, raised, linking to the sheet. Keys are two-digit
  like the sheets; note numerals are plain, so the two are never confused.
- **Terms.** One term per stage is marked in italic where it is defined:
  stream, record, limit, holds, load.
- The founder appears only in the founder portrait, never in a consulting
  scene. The scenes show the client's people and teams at work; a recurring
  face would read as a one-person shop.
- The loop is the control at every width: beside the stage on wide screens,
  pinned above it on a phone. A stage is chosen from the loop, by its own next
  question, by arrow keys, or on a phone by a sideways swipe; it changes in
  place and enters from the side it was reached from. The next stage's balloon
  is drawn in full ink; visited stages keep an ink ring.
- **No red dots.** Red appears only as the plates' accent, the struck line, and
  the label of the column out of an agent's reach.
- The sheet opens with the method as its headline and one reading line
  under it, as the cover does.
- A whole step (loop, enunciation, plate, commentary, next question) fits on
  one screen at 1440×900 and 1280×800. On a phone (390×844, 360×740) the
  pinned loop, the premise and the scene sit on the first screen, and the
  commentary reads on under the loop; it is not cut to fit. When the teaching
  grows, the layout is solved (column split, plate size, type scale) before
  a word is cut, and the rule is not moved.
- The last question returns to See. The loop's arrowhead already draws that
  return; the copy never exits the loop to the door.
- Without script the five stages read in order. No scroll-jacking, ever.

## Images

- Product covers and plates sit as objects: a contact edge and a soft fall of
  light (`box-shadow`), served as AVIF/WebP at 2×.
- Tall (book) leads; wide (software plates) support at half weight.
- Pencil scenes and the founder portrait share one hand and the site's paper,
  and dissolve into the sheet at their edges. They are generated from
  `brand/illustrations/` with the founder portrait as the style reference.
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
