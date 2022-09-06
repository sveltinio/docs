import { sveltinVersion, sveltekitVersion, buildTime } from '$config/defaults.js';
export const prerender = true;

export function GET(): Response {
	return new Response(
		JSON.stringify({
			sveltinVersion,
			sveltekitVersion,
			buildTime
		})
	);
}
