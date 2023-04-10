import { defineCollection, z } from "astro:content";

const prompt = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string().min(5).max(50),
    description: z.string().min(20).max(120),
    source: z.object({
      name: z.string(),
      url: z.string().url(),
    }),
    tags: z.array(
      z.enum([
        "Writing",
        "Creativity",
        "Education",
        "Productivity",
        "Business",
        "Marketin",
        "Entertainment",
        "Humo",
        "Ideas",
        "SEO",
        "Scienc",
        "Personal Growth",
      ])
    ),
    // Transform string to Date object
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
  }),
});

export const collections = { prompt };
