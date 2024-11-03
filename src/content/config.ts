import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
    cover: z.string().optional(),
    // Transform string to Date object
    pubDate: z.date(),
    updatedDate: z.coerce.date().optional(),
  }),
});

export const collections = { blog };
