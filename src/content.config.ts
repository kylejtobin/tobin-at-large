import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// What TAL has made: written and built, and given away. Each work carries
// the step of the argument it proves, and its body is the evidence a reader
// meets on the page.
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
      // the step of the argument this work proves
      claim: z.string(),
      // what it is, in one line, for the reader who will vet it
      line: z.string(),
      // the year it was published
      year: z.number().int(),
      url: z.string().url(),
      linkLabel: z.string(),
      cover: image(),
      order: z.number().int(),
    }),
});

export const collections = { works };
