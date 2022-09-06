<script lang="ts">
	import { website } from '$config/website.js';
	import type { IWebPageMetadata } from '@sveltinio/seo/types';
	import { OpenGraphType, TwitterCardType } from '@sveltinio/seo/types';
	import { PageMetaTags, JsonLdWebPage, JsonLdBreadcrumbs } from '@sveltinio/seo';
	import { getFavicon, getPageUrl } from '$lib/utils/strings.js';

	const themingPage: IWebPageMetadata = {
		url: getPageUrl('theming', website),
		title: 'Theming',
		description: website.seoDescription,
		keywords: website.keywords ? website.keywords : '',
		image: getFavicon(website),
		opengraph: {
			type: OpenGraphType.Article
		},
		twitter: {
			type: TwitterCardType.Summary
		}
	};
</script>

<PageMetaTags data={themingPage} />
<JsonLdWebPage data={themingPage} />
<JsonLdBreadcrumbs baseURL={website.baseURL} parent="" currentTitle={themingPage.title} />

<!-- PAGE TITLE-->
<section
	class="mx-auto max-w-7xl border-b border-skin-muted bg-skin-light dark:border-skin-muted-dark dark:bg-skin-dark"
>
	<div class="mx-auto max-w-7xl px-4 pt-20 sm:px-6 md:px-32 lg:pt-44">
		<h1
			class="mx-auto py-2 text-4xl font-light leading-none tracking-tighter text-skin-heading dark:text-skin-heading-dark lg:py-10 lg:text-5xl"
		>
			{themingPage.title}
		</h1>
	</div>
</section>
<!-- END OF PAGE TITLE-->

<!-- PAGE CONTENT -->
<section class="bg-skin-light pt-6 pb-24 dark:bg-skin-dark">
	<div class="mx-auto px-4 sm:px-6 md:px-32">
		<section>
			<div class="max-w-3xl">
				<div class="mx-auto space-y-24 text-left text-lg">
					<div
						class="prose space-y-8 text-base font-light text-skin-body dark:prose-invert dark:text-skin-body-dark sm:text-lg"
					>
						<div class="space-y-12">
							<h2
								class="group text-lg font-normal text-skin-heading hover:text-skin-heading-hover dark:text-skin-heading-dark lg:text-2xl"
							>
								We are working on it!
							</h2>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</section>
