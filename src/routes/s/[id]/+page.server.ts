import { redirect } from '@sveltejs/kit';
import { PUBLIC_POSTEY_REDIRECT_URL } from '$env/static/public';
export const load = async ({ params }) => {
	throw redirect(308, `${PUBLIC_POSTEY_REDIRECT_URL}/s/${params.id}`);
};
