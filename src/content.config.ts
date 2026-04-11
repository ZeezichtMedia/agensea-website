import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
    schema: z.object({
        // ── Core ──────────────────────────────────
        title: z.string(),
        description: z.string(),
        excerpt: z.string().optional(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),

        // ── EEAT Author ───────────────────────────
        // ID-referentie naar src/data/authors.ts. Vroeger inline object —
        // nu DRY: één auteur-record voedt alle blogs.
        author: z.string().optional(),

        // ── Visual ────────────────────────────────
        image: z.object({
            src: z.string(),
            alt: z.string(),
        }).optional(),

        // ── Taxonomy ──────────────────────────────
        tags: z.array(z.string()).optional(),
        category: z.string().optional(),

        // ── Internal Linking ─────────────────────
        relatedPosts: z.array(z.string()).optional(),

        // ── SEO Overrides ────────────────────────
        seo: z.object({
            metaTitle: z.string().optional(),
            metaDescription: z.string().optional(),
        }).optional(),

        // ── Status ───────────────────────────────
        draft: z.boolean().optional(),
    }),
});

export const collections = {
    'blog': blogCollection,
};
