import { list } from '$lib/cli/apiCli';
import { ContentMetadata, ResourceContent, ResourceContentMaker } from '@sveltinio/widgets/types';

export async function GET() {
	const resourceName = 'cli';
	const data = await list();

	const items: Array<ResourceContent> = [];
	data.forEach((elem) => {
		const item = ResourceContentMaker.createWithValues(
			resourceName,
			<ContentMetadata>elem.meta,
			''
		);
		items.push(item);
	});
	return {
		status: 200,
		body: {
			resourceName: resourceName,
			items: items
		}
	};
}
