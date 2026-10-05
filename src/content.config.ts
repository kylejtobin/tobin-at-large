import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Every work TAL presents is one file in src/content/works. The schema is the
// contract: a malformed entry fails the build instead of rendering wrong.
const works = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/works" }),
  schema: ({ image }) =>
    z.object({
      kind: z.enum(["book", "software", "essay", "talk"]),
      title: z.string(),
      subtitle: z.string().optional(),
      // the pitch, a sentence or two: shown on featured works
      summary: z.string().optional(),
      // position in the list; lower comes first. unordered works follow
      order: z.number().int().optional(),
      // credited by name: the practice publishes, people make the work
      by: z.array(z.string()).min(1),
      url: z.string().url(),
      // names the destination, e.g. "Read on Leanpub"
      linkLabel: z.string(),
      year: z.number().int().optional(),
      cover: image().optional(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

export const collections = { works };
