<script lang="ts">
	import { website } from '$config/website.js';
	import Overview from '$themes/dockerz/components/about/_Overview.svelte';
	import type { IWebPageMetadata } from '@sveltinio/seo/types';
	import { OpenGraphType, TwitterCardType } from '@sveltinio/seo/types';
	import { PageMetaTags, JsonLdWebPage } from '@sveltinio/seo';

	const homePage: IWebPageMetadata = {
		url: website.baseURL,
		title: 'What is Sveltin?',
		description:
			'Sveltin is a CLI (Command Line Interface) created to boost the developers productivity working on SvelteKit powered static websites.',
		keywords: website.keywords,
		image: website.baseURL + '/' + website.logo,
		opengraph: {
			type: OpenGraphType.Website
		},
		twitter: {
			type: TwitterCardType.Large
		}
	};
</script>

<PageMetaTags data={homePage} />
<JsonLdWebPage data={homePage} />

<!-- PAGE TITLE-->
<section
	class="mx-auto max-w-7xl border-b border-skin-muted bg-skin-light dark:border-skin-muted-dark dark:bg-skin-dark"
>
	<div class="mx-auto max-w-7xl px-4 pt-20 sm:px-6 md:px-32 lg:pt-44">
		<h1
			class="mx-auto py-2 text-4xl font-light leading-none tracking-tighter text-skin-heading dark:text-skin-heading-dark lg:py-10 lg:text-5xl"
		>
			Welcome to Sveltin
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
					<div class="space-y-8">
						<Overview />
					</div>
				</div>
			</div>
		</section>
	</div>
</section>
<!-- END OF PAGE CONTENT -->
