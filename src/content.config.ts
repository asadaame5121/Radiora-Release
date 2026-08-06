import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const docs = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/docs' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		section: z.enum(['Start', 'Concepts', 'Guides', 'Reference']),
		order: z.number(),
		updated: z.coerce.date().optional(),
	}),
});

export const collections = { docs };
