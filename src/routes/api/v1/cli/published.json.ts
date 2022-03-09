import { published } from '$lib/cli/getCli.js';

export async function get() {
	const body = Object.keys(published).map((slug) => ({
		slug,
		...published[slug]
	}));
	return {
		status: 200,
		body: JSON.stringify(body)
	};
}
