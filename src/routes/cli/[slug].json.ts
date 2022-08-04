import { getSingle } from '$lib/cli/apiCli';

/** @type {import('./[slug]').RequestHandler} */
export async function GET({ params }) {
	const { status, current, previous, next } = await getSingle(params.slug);

	if (status != 200) {
		return {
			status: 404
		};
	}

	return {
		status: 200,
		headers: {
			accept: 'application/json'
		},
		body: JSON.stringify({
			current,
			previous,
			next
		})
	};
}
