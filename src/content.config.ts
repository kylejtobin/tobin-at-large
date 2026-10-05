import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// The page is TAL's positions: what it holds to be true about organizations
// now that machines act on what they have made explicit. Each position is one
// sheet: the position, stated as fact; the insight that makes it so; and the
// proof, drawn on the sheet. Then the work TAL has made, as evidence.

// A proof is one or more drawn blocks: a table, or code. At most one cell of a
// table is the live point, marked in red.
const table = z.object({
  kind: z.literal("table"),
  columns: z.array(z.string()).min(2),
  rows: z.array(z.array(z.string()).min(2)).min(2),
  // [row, column] of the one live cell
  live: z.tuple([z.number().int(), z.number().int()]).optional(),
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
    insight: z.string(),
    proof: z.object({
      blocks: z.array(z.discriminatedUnion("kind", [table, code])).min(1),
      caption: z.string(),
    }),
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
      url: z.string().url(),
      linkLabel: z.string(),
      cover: image(),
      order: z.number().int(),
    }),
});

export const collections = { positions, works };
