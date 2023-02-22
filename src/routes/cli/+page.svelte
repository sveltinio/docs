<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import { website } from '$config/website.js';
	import { theme } from '$lib/shared/stores';
	import { OpenGraphType, TwitterCardType } from '@sveltinio/seo/types';
	import { PageMetaTags, JsonLdWebPage, JsonLdBreadcrumbs } from '@sveltinio/seo';
	import { canonicalPageUrl, getFavicon } from '$lib/utils/strings.js';

	export let data: PageData;

	const pageDescription =
		'Here you can find the list of all available Sveltin commands and subcommands.';
	// page keywords as comma separeted values
	const pageKeywords: Array<string> = [];

	$: ({ resourceName, items } = data);
	$: cliIndexPage = {
		url: canonicalPageUrl($page.url.pathname, website.baseURL),
		title: 'All Sveltin commands',
		description: pageDescription,
		keywords: pageKeywords || website.keywords,
		image: getFavicon(website),
		opengraph: {
			type: OpenGraphType.Website
		},
		twitter: {
			type: TwitterCardType.Summary
		}
	};

	$: isDark = $theme;
</script>

<PageMetaTags data={cliIndexPage} />
<JsonLdWebPage data={cliIndexPage} />
<JsonLdBreadcrumbs url={$page.url.href} />

<section
	class="mx-auto max-w-7xl border-b border-skin-muted bg-skin-light dark:border-skin-muted-dark dark:bg-skin-dark"
>
	<div class="mx-auto max-w-7xl px-4 pt-20 sm:px-6 md:px-32 lg:pt-44">
		<h1
			class="mx-auto py-2 text-4xl font-light leading-none tracking-tighter text-skin-heading dark:text-skin-heading-dark lg:py-10 lg:text-5xl"
		>
			All sveltin commands
		</h1>
	</div>
</section>

<section class="mx-auto bg-skin-light pt-6 pb-24 dark:bg-skin-dark">
	<div class="mx-auto px-4 sm:px-6 md:px-32">
		<section>
			<div class="max-w-3xl">
				<div class="mx-auto space-y-24 text-left text-lg">
					<div class="space-y-8">
						<ul>
							{#each items as item}
								<li class="px-4 py-4 sm:px-0">
									<a
										class:cli-text={!isDark}
										class:cli-text-dark={isDark}
										data-sveltekit-preload-data="hover"
										href="/{item.resource}/{item.metadata.slug}"
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
