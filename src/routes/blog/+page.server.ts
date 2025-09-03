// src/routes/blog/+page.server.ts

import { blogPostsQuery, type BlogListResult } from '$lib/sanity/queries';
import { client } from '$lib/sanity/sanity';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	try {
		const posts = await client.fetch<BlogListResult>(blogPostsQuery);

		return {
			posts: posts || []
		};
	} catch (error) {
		console.error('Error fetching blog posts:', error);
		return {
			posts: [],
			error: 'Failed to load blog posts'
		};
	}
};
