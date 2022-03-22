import type { DynamicObject } from '$lib/interfaces';
import { ContentMetadata, ResourceContent, ResourceContentMaker } from '@sveltinio/widgets/types';

export const list = async (withMarkup = false) => {
	const contentFiles = import.meta.glob('/content/cli/**/*.{svelte.md,md,svx}');
	const contentFilesArray = Object.entries(contentFiles);
	const contents = await Promise.all(
		contentFilesArray.map(async ([path, resolver]) => {
			const data = await resolver();
			const result: DynamicObject = {
				meta: data.metadata,
				path: path
			};
			if (withMarkup) {
				result.markup = data.default.render();
			}
			return result;
		})
	);
	const publishedByDate = contents
		.filter((elem) => !elem.meta.draft)
		.sort((a, b) => (a.meta.created_at < b.meta.created_at ? 1 : -1));

	return publishedByDate;
};

export const getSingle = async (slug: string) => {
	const resourceName = 'cli';
	const publishedByDate = await list(true);

	const selected = publishedByDate.filter((item) => {
		return item.meta.slug == slug;
	});

	if (selected.length != 0) {
		const selectedItemIndex = publishedByDate.findIndex((elem) => slug === elem.meta.slug);
		const selectedItem = publishedByDate[selectedItemIndex];
		const current = ResourceContentMaker.createWithValues(
			resourceName,
			selectedItem.meta,
			selectedItem.markup.html
		);
		const previous: ResourceContent = {
			resource: resourceName,
			metadata: <ContentMetadata>{
				title: publishedByDate[selectedItemIndex + 1]?.meta.title,
				slug: publishedByDate[selectedItemIndex + 1]?.meta.slug
			}
		};
		const next: ResourceContent = {
			resource: resourceName,
			metadata: <ContentMetadata>{
				title: publishedByDate[selectedItemIndex - 1]?.meta.title,
				slug: publishedByDate[selectedItemIndex - 1]?.meta.slug
			}
		};

		return {
			status: 200,
			current,
			previous,
			next
		};
	}
	return {
		status: 404
	};
};
