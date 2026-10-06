import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// The page is TAL's positions: what it holds to be true about organizations
// now that machines act on what they have made explicit. Each position is one
// sheet, and each element on it has one job: the position argues, the proof
// shows the move from implicit to explicit, and at most one line says what
// the proof cannot show. Then the work TAL has made, as evidence.

// A proof is a sequence of drawn blocks. A table may mark one cell live, in
// red, and one column out of an agent's reach. Struck lines are the implicit
// or procedural way, crossed out beside what replaces it.
const table = z.object({
  kind: z.literal("table"),
  columns: z.array(z.string()).min(2),
  rows: z.array(z.array(z.string()).min(2)).min(2),
  // [row, column] of the one live cell
  live: z.tuple([z.number().int(), z.number().int()]).optional(),
  // a column an agent cannot read
  unreachable: z.number().int().optional(),
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

const positions = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/positions" }),
  schema: z.object({
    sheet: z.number().int().positive(),
    // the position's name in the cover's index
    short: z.string(),
    position: z.string(),
    // only what the proof cannot show
    consequence: z.string().optional(),
    proof: z.array(z.discriminatedUnion("kind", [table, code, struck])).min(1),
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
      url: z.string().url(),
      linkLabel: z.string(),
      cover: image(),
      order: z.number().int(),
    }),
});

export const collections = { positions, works };
