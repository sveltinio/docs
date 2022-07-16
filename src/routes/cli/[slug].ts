import { getSingle } from '$lib/cli/apiCli';

/** @type {import('./[slug]').RequestHandler} */
export async function GET({ params }) {
	const { status, current, previous, next } = await getSingle(params.slug);

	if (status === 200) {
		return {
			status: 200,
			headers: {
				accept: 'application/json'
			},
			body: {
				current,
				previous,
				next
			}
		};
	}

	// return errors
	const errors: Record<string, Error> = {};
	return {
		status: 404,
		body: {
			errors
		}
	};
}
