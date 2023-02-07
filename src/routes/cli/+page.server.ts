import type { Sveltin } from '../../sveltin';
import { list } from '$lib/cli/loadCli';

export async function load() {
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
	return {
		resourceName: resourceName,
		items: items
	};
}
