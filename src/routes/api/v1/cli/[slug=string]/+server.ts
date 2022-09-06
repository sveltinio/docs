import { getSingle } from '$lib/cli/loadCli';
import { error } from '@sveltejs/kit';
export const prerender = true;

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ url }) {
	const { pathname } = url;
	const slug = pathname.substring(pathname.lastIndexOf('/') + 1);
	if (!slug) {
		throw error(404, 'Cli not found');
	}

	const data = await getSingle(slug);
	return new Response(JSON.stringify(data));
}
