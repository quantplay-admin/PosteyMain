// src/routes/blog/[slug]/+page.server.ts

import {
	blogPostQuery,
	relatedPostsQuery,
	type BlogListResult,
	type BlogPost
} from '$lib/sanity/queries';
import { client } from '$lib/sanity/sanity';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;

	try {
		const [post, relatedPosts] = await Promise.all([
			client.fetch<BlogPost>(blogPostQuery, { slug }),
			client.fetch<BlogListResult>(relatedPostsQuery, { slug })
		]);

		if (!post) {
			throw error(404, 'Blog post not found');
		}

		return {
			post,
			relatedPosts
		};
	} catch (err) {
		console.error('Error fetching blog post:', err);
		throw error(500, 'Failed to load blog post');
	}
};
