<script lang="ts" context="module">
	import { website } from '$config/website.js';
	import WhySveltin from '$themes/dockerz/components/about/_WhySveltin.svelte';
	import ExistingApproaches from '$themes/dockerz/components/about/_ExistingApproaches.svelte';
	import LookingFor from '$themes/dockerz/components/about/_LookingFor.svelte';
	import SveltinGoals from '$themes/dockerz/components/about/_SveltinGoals.svelte';
	import type { IWebPageMetadata } from '@sveltinio/seo/types';
	import { OpenGraphType, TwitterCardType } from '@sveltinio/seo/types';
	import { PageMetaTags, JsonLdWebPage } from '@sveltinio/seo';
	import { getFavicon, getPageUrl } from '$lib/utils/strings.js';

	const whySveltinPage: IWebPageMetadata = {
		url: getPageUrl('why', website),
		title: 'Why Sveltin?',
		description:
			'Here you can read more on why Sveltin and the rationals behind the decision to build Sveltin.',
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

<PageMetaTags data={whySveltinPage} />
<JsonLdWebPage data={whySveltinPage} />

<!-- PAGE TITLE-->
<section
	class="mx-auto max-w-7xl border-b border-skin-muted bg-skin-light dark:border-skin-muted-dark dark:bg-skin-dark"
>
	<div class="mx-auto max-w-7xl px-4 pt-20 sm:px-6 md:px-32 lg:pt-44">
		<h1
			class="mx-auto py-2 text-4xl font-light leading-none tracking-tighter text-skin-heading dark:text-skin-heading-dark lg:py-10 lg:text-5xl"
		>
			Why Sveltin?
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
						<!-- Why Sveltin ?-->
						<WhySveltin />
						<!-- Existing approaches-->
						<ExistingApproaches />
						<!-- What I was looking for -->
						<LookingFor />
						<!-- Goal-->
						<SveltinGoals />
					</div>
				</div>
			</div>
		</section>
	</div>
</section>
<!-- END OF PAGE CONTENT -->
