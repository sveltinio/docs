import cli from '$lib/cli/getCli.js';
import type { EndpointOutput } from '@sveltejs/kit';

export async function get(): Promise<EndpointOutput> {
	const body = Object.keys(cli).map((slug) => ({
		slug,
		...cli[slug]
	}));
	return {
		status: 200,
		body: JSON.stringify(body)
	};
}
