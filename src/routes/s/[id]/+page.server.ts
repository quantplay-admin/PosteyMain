import { redirect } from '@sveltejs/kit';

export const load = async ({ params }) => {
	throw redirect(308, `https://app.postey.ai/s/${params.id}`);
};
