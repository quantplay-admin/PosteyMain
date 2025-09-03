import { sidebarItemsQuery, type SidebarItems } from '$lib/sanity/queries';
import { client } from '$lib/sanity/sanity';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	try {
		const sidebarItems = await client.fetch<SidebarItems>(sidebarItemsQuery);

		return {
			sidebarItems: sidebarItems || []
		};
	} catch (error) {
		console.error('Error fetching sidebar items:', error);
		return {
			sidebarItems: [],
			error: 'Failed to load sidebar items'
		};
	}
};
