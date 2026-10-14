import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// The page presents what TAL has made: the book and the two tools.

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
      // the year it was published
      year: z.number().int(),
      // the thing itself, where a few lines of it show more than the line
      code: z.string().optional(),
      url: z.string().url(),
      linkLabel: z.string(),
      cover: image(),
      order: z.number().int(),
    }),
});

export const collections = { works };
