<script>
	import { assets } from '$app/paths';
	import { page } from '$app/stores';
	import { website } from '$config/website.js';
	import { OpenGraphType, TwitterCardType } from '@sveltinio/seo/types';
	import { PageMetaTags, JsonLdWebPage, JsonLdBreadcrumbs } from '@sveltinio/seo';
	import { canonicalPageUrl, getSocialImage } from '$lib/utils/strings.js';

	import { theme } from '$lib/shared/stores';

	export let title;
	export let headline;
	export let keywords;
	export let updated_at;

	const mdPage = {
		url: canonicalPageUrl($page.url.pathname, website.baseURL),
		title: title,
		description: headline,
		keywords: keywords || website.keywords,
		image: getSocialImage(website.baseURL, `${assets}/images/sveltin`, website.logo),
		opengraph: {
			type: OpenGraphType.Article
		},
		twitter: {
			type: TwitterCardType.Summary
		}
	};

	$: isDark = $theme;
</script>

<PageMetaTags data={mdPage} />
<JsonLdWebPage data={mdPage} />
<JsonLdBreadcrumbs url={$page.url.href} />

<section
	class="mx-auto max-w-7xl border-b border-skin-muted bg-skin-light dark:border-skin-muted-dark dark:bg-skin-dark"
>
	<div class="mx-auto max-w-7xl px-4 pt-20 sm:px-6 md:px-32 lg:pt-44">
		<h1
			class="mx-auto py-2 text-4xl font-light leading-none tracking-tighter text-skin-heading dark:text-skin-heading-dark lg:py-10 lg:text-5xl"
		>
			{title}
		</h1>
	</div>
</section>

<section class="mx-auto bg-skin-light pt-6 pb-24 dark:bg-skin-dark">
	<div class="mx-auto px-4 sm:px-6 md:px-32">
		<section>
			<div class="max-w-3xl">
				<div class="mx-auto space-y-24 text-left text-lg">
					<div class="space-y-8">
						<div class="markdown-body" class:markdown-body-dark={isDark}>
							<slot />
						</div>
					</div>
					<div class="space-y-8">
						<p
							class="text-sm font-light text-skin-body dark:text-skin-body-dark sm:text-base md:mt-5"
						>
							Last updated: {updated_at}
						</p>
					</div>
				</div>
			</div>
		</section>
	</div>
</section>
