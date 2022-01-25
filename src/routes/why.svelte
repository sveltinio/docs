<script lang="ts" context="module">
	import { website } from '$config/website.js';
	import WhySveltin from '$themes/dockerz/components/about/_WhySveltin.svelte';
	import ExistingApproaches from '$themes/dockerz/components/about/_ExistingApproaches.svelte';
	import LookingFor from '$themes/dockerz/components/about/_LookingFor.svelte';
	import SveltinGoals from '$themes/dockerz/components/about/_SveltinGoals.svelte';
	import { IWebPageMetadata, OpenGraphType, TwitterCardType } from '@sveltinio/seo/types';
	import { PageMetaTags, JsonLdWebPage } from '@sveltinio/seo';
	import { getFavicon, getPageUrl } from '$lib/utils/strings.js';

	const whySveltinPage: IWebPageMetadata = {
		url: getPageUrl('why', website),
		title: 'Why Sveltin?',
		description:
			'Here you can read more on why Sveltin and the rationals behind the decision to build Sveltin.',
		keywords: website.keywords,
		image: getFavicon(website),
		opengraph: {
			type: OpenGraphType.Website
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
	class="mx-auto bg-skin-light border-b dark:bg-skin-dark border-skin-muted max-w-7xl dark:border-skin-muted-dark"
>
	<div class="px-4 pt-20 mx-auto max-w-7xl sm:px-6 md:px-32 lg:pt-44">
		<h1
			class="py-2 mx-auto text-4xl font-light leading-none tracking-tighter text-skin-heading dark:text-skin-heading-dark lg:text-5xl lg:py-10"
		>
			Why Sveltin?
		</h1>
	</div>
</section>
<!-- END OF PAGE TITLE-->

<!-- PAGE CONTENT -->
<section class="pt-6 pb-24 bg-skin-light dark:bg-skin-dark">
	<div class="px-4 mx-auto sm:px-6 md:px-32">
		<section>
			<div class="max-w-3xl">
				<div class="mx-auto space-y-24 text-lg text-left">
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
