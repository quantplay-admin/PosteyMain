// src/routes/docs/[slug]/+page.server.ts

import { docPageBySlugQuery, type DocPage } from '$lib/sanity/queries';
import { client } from '$lib/sanity/sanity';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;

	try {
		const docPage = await client.fetch<DocPage>(docPageBySlugQuery, { slug });

		if (!docPage) {
			throw error(404, 'Doc page not found');
		}

		return {
			docPage
		};
	} catch (err) {
		console.error('Error fetching doc page:', err);
		// Re-throw if it's already an HTTP error (like 404)
		if (err && typeof err === 'object' && 'status' in err) {
			throw err;
		}
		throw error(500, 'Failed to load doc page');
	}
};
