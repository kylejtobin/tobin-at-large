import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Every work TAL presents is one sheet in the set, one file in
// src/content/works. Each is written to the same arc: a recognition the
// reader has lived, the reveal they had not imagined, a proof they can see,
// and the offer at the peak. The schema holds that arc, so a sheet missing
// any part of it fails the build instead of rendering half-persuasive.

// The proof is shown, never claimed, and takes one of three forms.
const proof = z.discriminatedUnion("kind", [
  // what the documents say set against what actually runs
  z.object({
    kind: z.literal("contrast"),
    left: z.string(),
    right: z.string(),
    rows: z.array(z.tuple([z.string(), z.string()])).min(2),
    caption: z.string(),
  }),
  // the idea, as the code that is the idea
  z.object({
    kind: z.literal("code"),
    code: z.string(),
    caption: z.string(),
  }),
  // lines the old way needs, struck out because they can no longer be written
  z.object({
    kind: z.literal("struck"),
    lines: z.array(z.string()).min(2),
    caption: z.string(),
  }),
]);

const works = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/works" }),
  schema: ({ image }) =>
    z.object({
      // sheet number, and its place in the set
      sheet: z.number().int().positive(),
      // the layer of the automated organization this work is
      layer: z.string(),
      kind: z.enum(["book", "software", "essay", "talk"]),
      title: z.string(),
      subtitle: z.string().optional(),
      // books carry their authors; nothing else shows a byline
      by: z.array(z.string()).min(1),
      url: z.string().url(),
      // names the destination, e.g. "Read the book on Leanpub"
      linkLabel: z.string(),
      cover: image(),
      recognition: z.string(),
      reveal: z.string(),
      proof,
      // the engagement this work is the evidence for
      offer: z.object({
        line: z.string(),
        subject: z.string(),
      }),
      draft: z.boolean().default(false),
    }),
});

export const collections = { works };
