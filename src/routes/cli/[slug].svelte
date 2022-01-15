<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';
	import { website } from '$config/website.js';
	import { siteConfig } from '$lib/Env.js';
	import { ResourceContent, ResourceContentMaker } from '@sveltinio/widgets/types';
	import type { ContentMetadata } from '@sveltinio/widgets/types';

	export const load: Load = async ({ url, params, fetch }) => {
		const { slug } = params;
		const _url = '/api/v1/cli/published.json';
		const res = await fetch(_url);

		if (res.ok) {
			const published = await res.json();
			const selectedItemIndex = published.findIndex((elem) => slug === elem.slug);
			const selectedItem = published[selectedItemIndex];

			if (selectedItem) {
				const resourceName = 'cli';
				const item = ResourceContentMaker.createWithValues(
					resourceName,
					<ContentMetadata>selectedItem,
					selectedItem.html
				);
				const previous: ResourceContent = {
					resource: resourceName,
					metadata: <ContentMetadata>{
						title: published[selectedItemIndex + 1]?.title,
						slug: published[selectedItemIndex + 1]?.slug
					}
				};
				const next: ResourceContent = {
					resource: resourceName,
					metadata: <ContentMetadata>{
						title: published[selectedItemIndex - 1]?.title,
						slug: published[selectedItemIndex - 1]?.slug
					}
				};

				return {
					props: {
						item,
						next,
						previous
					}
				};
			}

			return {
				status: 404,
				error: new Error(`Ops! What you are looking for does not exists`)
			};
		}

		return {
			status: 404,
			error: new Error(`Ops! Something went wrong loading ${url}`)
		};
	};
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import { theme, updateTheme } from '$lib/shared/stores';
	import PrevNext from '$themes/dockerz/components/_PrevNext.svelte';

	export let item: ResourceContent;
	export let previous: ResourceContent;
	export let next: ResourceContent;

	onMount(() => {
		const timeout = setTimeout(updateTheme, 1000);
		return () => {
			clearTimeout(timeout);
		};
	});
	$: isDark = $theme === 'dark' ? true : false;
</script>

<svelte:head>
	<title>{item.metadata.title} - {website.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={item.metadata.title} />
	<meta property="og:url" content={siteConfig.baseURL} />
	<meta
		property="og:image"
		content="{siteConfig.baseURL}/{item.resource}/{item.metadata.slug}/{item.metadata.cover}"
	/>
	<meta property="og:description" content={item.metadata.headline} />
	<meta property="article:author" content={item.metadata.author} />
	<meta property="article:published_time" content={item.metadata.updated_at} />
</svelte:head>

<section
	class="mx-auto bg-skin-light border-b dark:bg-skin-dark border-skin-muted max-w-7xl dark:border-skin-muted-dark"
>
	<div class="px-4 pt-20 mx-auto max-w-7xl sm:px-6 md:px-32 lg:pt-44">
		<h1
			class="py-2 mx-auto text-4xl font-light leading-none tracking-tighter text-skin-heading dark:text-skin-heading-dark lg:text-5xl lg:py-10"
		>
			{item.metadata.title}
		</h1>
	</div>
</section>

<section class="mx-auto pt-6 pb-24 bg-skin-light dark:bg-skin-dark">
	<div class="px-4 mx-auto sm:px-6 md:px-32">
		<section>
			<div class="max-w-3xl">
				<div class="mx-auto space-y-24 text-lg text-left">
					<div class="space-y-8">
						<div class="md-content" class:md-content-dark={isDark}>
							{@html item.html}
						</div>
					</div>
					<div class="space-y-8">
						<p
							class="text-sm font-light text-skin-body dark:text-skin-body-dark sm:text-base md:mt-5"
						>
							Last updated: {item.metadata.updated_at}
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
