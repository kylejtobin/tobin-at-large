import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// What TAL has made: written and built, and given away. Each work is
// presented whole: what it holds, in its own words, and in its body the
// evidence a reader meets on the page.
const works = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/works" }),
  schema: ({ image }) =>
    z.object({
      kind: z.enum(["book", "software"]),
      // e.g. "Book", "Open-source language"
      label: z.string(),
      // e.g. "in progress"
      status: z.string().optional(),
      title: z.string(),
      // the situation the reader already lives with, which the work answers
      claim: z.string(),
      // a note on the entry, where the work needs one
      line: z.string().optional(),
      // the year it was published
      year: z.number().int(),
      url: z.string().url(),
      linkLabel: z.string(),
      cover: image(),
      order: z.number().int(),
    }),
});

export const collections = { works };
