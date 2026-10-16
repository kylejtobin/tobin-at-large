import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// A work's body is its sheet's evidence; its first paragraph is the turn.
const works = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/works" }),
  schema: ({ image }) =>
    z.object({
      kind: z.enum(["book", "software"]),
      label: z.string(),
      status: z.string().optional(),
      title: z.string(),
      claim: z.string(),
      line: z.string().optional(),
      year: z.number().int(),
      url: z.string().url(),
      cover: image(),
      detail: z.boolean().optional(),
      order: z.number().int(),
    }),
});

export const collections = { works };
