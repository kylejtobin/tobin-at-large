import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// The page is TAL's positions: what it holds to be true about organizations
// now that machines act on what they have made explicit. Each position is one
// sheet, and each element on it has one job: the position argues, the proof
// shows the move from implicit to explicit, and at most one line says what
// the proof cannot show. Then the work TAL has made, as evidence.

// A proof is a sequence of drawn blocks. A table may mark one column out of
// an agent's reach, and may give each row a tone: pale is done by hand, dark
// runs on its own. Inside a cell, ~~text~~ is struck: the replaced way beside
// what replaces it. Struck lines are the implicit or procedural way, crossed
// out beside what replaces it. A stream is drawn as a line with its two ends
// fixed, crossing the departments named, with nothing drawn between.
const table = z.object({
  kind: z.literal("table"),
  columns: z.array(z.string()).min(2),
  rows: z.array(z.array(z.string()).min(2)).min(2),
  // a column an agent cannot read
  unreachable: z.number().int().optional(),
  // one tone per row
  tones: z.array(z.enum(["hand", "auto"])).optional(),
  // a note under a column head, set in the signal red, like the hatch's
  columnNotes: z.array(z.string().nullable()).optional(),
  // the tone legend under the table: pale by hand, dark runs on its own
  legend: z.boolean().optional(),
});
const stream = z.object({
  kind: z.literal("stream"),
  from: z.string(),
  to: z.string(),
  across: z.array(z.string()).min(1),
  // the handoffs where a person decides on the spot
  marks: z
    .array(z.object({ at: z.number().int(), label: z.string() }))
    .optional(),
});
const struck = z.object({
  kind: z.literal("struck"),
  lines: z.array(z.string()).min(1),
  // set as code, or as speech
  as: z.enum(["code", "speech"]).default("code"),
});
const code = z.object({
  kind: z.literal("code"),
  code: z.string(),
});
// a thing someone says, kept: the judgment as it is actually exercised
const speech = z.object({
  kind: z.literal("speech"),
  lines: z.array(z.string()).min(1),
  label: z.string().optional(),
});

const positions = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/positions" }),
  schema: z.object({
    sheet: z.number().int().positive(),
    // the position's name in the cover's index
    short: z.string(),
    position: z.string(),
    // only what the proof cannot show
    consequence: z.string().optional(),
    // a key to the words in a code block, one mono line under the proof
    key: z.string().optional(),
    proof: z
      .array(
        z.discriminatedUnion("kind", [table, code, struck, stream, speech]),
      )
      .min(1),
  }),
});

// What TAL has made: written and built, and given away.
const works = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/works" }),
  schema: ({ image }) =>
    z.object({
      kind: z.enum(["book", "software"]),
      // e.g. "Book", "Open-source language"
      label: z.string(),
      title: z.string(),
      // what it is, in one line, for the reader who will vet it
      line: z.string(),
      // the thing itself, where a few lines of it show more than the line
      code: z.string().optional(),
      url: z.string().url(),
      linkLabel: z.string(),
      cover: image(),
      order: z.number().int(),
    }),
});

export const collections = { positions, works };
