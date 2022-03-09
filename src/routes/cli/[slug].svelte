<script lang="ts" context="module">
	export const prerender = true;

	import type { Load } from '@sveltejs/kit';
	import { ResourceContent, ResourceContentMaker } from '@sveltinio/widgets/types';
	import type { ContentMetadata } from '@sveltinio/widgets/types';

	export const load: Load = async ({ fetch, params }) => {
		const resourceName = 'cli';
		const { slug } = params;
		const _url = '/api/v1/cli/published.json';

		const res = await fetch(_url);
		if (res.ok) {
			const data = await res.json();

			const selectedItemIndex = data.findIndex((elem) => slug === elem.slug);
			const selectedItem = data[selectedItemIndex];

			if (selectedItem) {
				const current = ResourceContentMaker.createWithValues(
					resourceName,
					<ContentMetadata>selectedItem,
					selectedItem.html
				);
				const previous: ResourceContent = {
					resource: resourceName,
					metadata: <ContentMetadata>{
						title: data[selectedItemIndex + 1]?.title,
						slug: data[selectedItemIndex + 1]?.slug
					}
				};
				const next: ResourceContent = {
					resource: resourceName,
					metadata: <ContentMetadata>{
						title: data[selectedItemIndex - 1]?.title,
						slug: data[selectedItemIndex - 1]?.slug
					}
				};

				return {
					props: {
						current,
						previous,
						next
					}
				};
			} else {
				return {
					status: 404,
					error: new Error(`Ops! What you are looking for does not exists`)
				};
			}
		}

		return {
			status: 404,
			error: new Error(`Ops! Something went wrong loading ${_url}`)
		};
	};
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import { website } from '$config/website.js';
	import { theme, updateTheme } from '$lib/shared/stores';
	import PrevNext from '$themes/dockerz/components/_PrevNext.svelte';
	import { JsonLdWebPage, PageMetaTags, JsonLdBreadcrumbs } from '@sveltinio/seo';
	import type { IWebPageMetadata } from '@sveltinio/seo/types';
	import { OpenGraphType, TwitterCardType } from '@sveltinio/seo/types';
	import { getSlugPageUrl, getCoverImagePath } from '$lib/utils/strings.js';

	export let current: ResourceContent;
	export let previous: ResourceContent;
	export let next: ResourceContent;

	const cmdPageData: IWebPageMetadata = {
		url: getSlugPageUrl(current, website),
		title: 'sveltin command: ' + current.metadata.title,
		description: current.metadata.headline,
		author: current.metadata.author,
		image: getCoverImagePath(current, website),
		opengraph: {
			type: OpenGraphType.Article,
			article: {
				published_at: current.metadata.created_at,
				modified_at: current.metadata.updated_at
			}
		},
		twitter: {
			type: TwitterCardType.Summary
		}
	};

	onMount(() => {
		const timeout = setTimeout(updateTheme, 1000);
		return () => {
			clearTimeout(timeout);
		};
	});
	$: isDark = $theme === 'dark' ? true : false;
</script>

<PageMetaTags data={cmdPageData} />
<JsonLdWebPage data={cmdPageData} />
<JsonLdBreadcrumbs
	baseURL={website.baseURL}
	parent={current.resource}
	currentTitle={cmdPageData.title}
/>

<section
	class="mx-auto max-w-7xl border-b border-skin-muted bg-skin-light dark:border-skin-muted-dark dark:bg-skin-dark"
>
	<div class="mx-auto max-w-7xl px-4 pt-20 sm:px-6 md:px-32 lg:pt-44">
		<h1
			class="mx-auto py-2 text-4xl font-light leading-none tracking-tighter text-skin-heading dark:text-skin-heading-dark lg:py-10 lg:text-5xl"
		>
			{current.metadata.title}
		</h1>
	</div>
</section>

<section class="mx-auto bg-skin-light pt-6 pb-24 dark:bg-skin-dark">
	<div class="mx-auto px-4 sm:px-6 md:px-32">
		<section>
			<div class="max-w-3xl">
				<div class="mx-auto space-y-24 text-left text-lg">
					<div class="space-y-8">
						<div class="md-content" class:md-content-dark={isDark}>
							{@html current.html}
						</div>
					</div>
					<div class="space-y-8">
						<p
							class="text-sm font-light text-skin-body dark:text-skin-body-dark sm:text-base md:mt-5"
						>
							Last updated: {current.metadata.updated_at}
						</p>
					</div>
				</div>
			</div>
		</section>
	</div>
</section>
<PrevNext {previous} {next} />

<style>
	.md-content {
		@apply prose prose-sveltin;
	}

	.md-content-dark {
		@apply prose-invert;
	}
</style>
