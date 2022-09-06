<script lang="ts">
	import type { PageData } from './$types';
	import type { IWebPageMetadata } from '@sveltinio/seo/types';
	import { onMount } from 'svelte';
	import { website } from '$config/website.js';
	import { theme, updateTheme } from '$lib/shared/stores';
	import PrevNext from '$themes/dockerz/components/_PrevNext.svelte';
	import { JsonLdWebPage, PageMetaTags, JsonLdBreadcrumbs } from '@sveltinio/seo';
	import { OpenGraphType, TwitterCardType } from '@sveltinio/seo/types';
	import { getSlugPageUrl, getCoverImagePath } from '$lib/utils/strings.js';

	export let data: PageData;
	$: ({ actual, before, after, mdsvexComponent } = data);

	$: current = actual;
	$: previous = before;
	$: next = after;

	let slugPageData = {} as IWebPageMetadata;

	if (current) {
		slugPageData = {
			url: getSlugPageUrl(current, website),
			title: 'sveltin command: ' + current.metadata.title,
			description: current.metadata.headline,
			keywords: website.keywords ? website.keywords : '',
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
	}

	onMount(() => {
		const timeout = setTimeout(updateTheme, 1000);
		return () => {
			clearTimeout(timeout);
		};
	});
	$: isDark = $theme === 'dark' ? true : false;
</script>

{#if current}
	<PageMetaTags data={slugPageData} />
	<JsonLdWebPage data={slugPageData} />
	<JsonLdBreadcrumbs
		baseURL={website.baseURL}
		parent={current.resource}
		currentTitle={slugPageData.title}
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
								<svelte:component this={mdsvexComponent} />
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
{/if}
