<script lang="ts" context="module">
	export const prerender = true;

	import type { Load } from '@sveltejs/kit';
	import {
		ContentMetadata,
		ResourceContent,
		ResourceContentMaker
	} from '@sveltinio/widgets/types';

	export const load: Load = async ({ url, fetch }) => {
		const resourceName = 'cli';
		const _url = '/api/v1/cli/published.json';
		const res = await fetch(_url);

		if (res.ok) {
			const res2 = res.clone();
			const data = await res2.json();

			const itemsList: Array<ResourceContent> = [];
			data.forEach((element) => {
				const item = ResourceContentMaker.createWithValues(
					resourceName,
					<ContentMetadata>element,
					''
				);
				itemsList.push(item);
			});

			return {
				props: { resourceName, itemsList }
			};
		} else {
			return {
				status: res.status,
				error: new Error(`Ops! Something went wrong loading ${_url}`)
			};
		}
	};
</script>

<script lang="ts">
	import { website } from '$config/website.js';
	import { onMount } from 'svelte';
	import { theme, updateTheme } from '$lib/shared/stores';
	import orderBy from 'lodash-es/orderBy.js';
	import type { IWebPageMetadata } from '@sveltinio/seo/types';
	import { OpenGraphType, TwitterCardType } from '@sveltinio/seo/types';
	import { PageMetaTags, JsonLdWebPage, JsonLdBreadcrumbs } from '@sveltinio/seo';
	import { getFavicon, getPageUrl } from '$lib/utils/strings.js';

	export let resourceName: string;
	export let itemsList: Array<ResourceContent>;

	const sortedItemsList = orderBy(itemsList, (item) => item.metadata.title, ['desc']);

	const cliPage: IWebPageMetadata = {
		url: getPageUrl(resourceName, website),
		title: 'All Sveltin commands',
		description:
			'Here you can find the list of all available Sveltin commands and subcommands.',
		keywords: website.keywords ? website.keywords : '',
		image: getFavicon(website),
		opengraph: {
			type: OpenGraphType.Website
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

<PageMetaTags data={cliPage} />
<JsonLdWebPage data={cliPage} />
<JsonLdBreadcrumbs baseURL={website.baseURL} parent={resourceName} currentTitle={cliPage.title} />
<section
	class="mx-auto bg-skin-light border-b dark:bg-skin-dark border-skin-muted max-w-7xl dark:border-skin-muted-dark"
>
	<div class="px-4 pt-20 mx-auto max-w-7xl sm:px-6 md:px-32 lg:pt-44">
		<h1
			class="py-2 mx-auto text-4xl font-light leading-none tracking-tighter text-skin-heading dark:text-skin-heading-dark lg:text-5xl lg:py-10"
		>
			All sveltin commands
		</h1>
	</div>
</section>

<section class="mx-auto pt-6 pb-24 bg-skin-light dark:bg-skin-dark">
	<div class="px-4 mx-auto sm:px-6 md:px-32">
		<section>
			<div class="max-w-3xl">
				<div class="mx-auto space-y-24 text-lg text-left">
					<div class="space-y-8">
						<ul>
							{#each sortedItemsList as item}
								<li class="px-4 py-4 sm:px-0">
									<a
										class:cli-text={!isDark}
										class:cli-text-dark={isDark}
										sveltekit:prefetch
										href={`/${item.resource}/${item.metadata.slug}`}
										>{item.metadata.title.toLowerCase()}</a
									>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			</div>
		</section>
	</div>
</section>

<style>
	.cli-text {
		@apply text-base font-light text-skin-base;
	}

	.cli-text-dark {
		@apply text-base font-light text-skin-base-dark;
	}
</style>
