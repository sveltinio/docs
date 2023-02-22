import type { PageServerLoad } from './$types';
import type { Sveltin } from '$sveltin';
import { error } from '@sveltejs/kit';
import { list } from '$lib/cli/loadCli';

export const load = (async () => {
	const resourceName = 'cli';
	const data = await list();
	const items: Array<Sveltin.ResourceContent> = [];

	data.forEach((elem) => {
		const item: Sveltin.ResourceContent = {
			resource: resourceName,
			metadata: <Sveltin.YAMLFrontmatter>elem.meta,
			html: ''
		};
		items.push(item);
	});

	if (resourceName && items) {
		return {
			resourceName,
			items
		};
	}

	throw error(404, 'Not found');
}) satisfies PageServerLoad;
