<script lang="ts">
	import { website } from '$config/website.js';
	import { ExternalLink } from '@sveltinio/essentials';
	import type { IWebPageMetadata } from '@sveltinio/seo/types';
	import { OpenGraphType, TwitterCardType } from '@sveltinio/seo/types';
	import { PageMetaTags, JsonLdWebPage, JsonLdBreadcrumbs } from '@sveltinio/seo';
	import { getFavicon, getPageUrl } from '$lib/utils/strings.js';
	import Shell from '$themes/dockerz/components/_Shell.svelte';

	const installPage: IWebPageMetadata = {
		url: getPageUrl('install', website),
		title: 'Install',
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

<PageMetaTags data={installPage} />
<JsonLdWebPage data={installPage} />
<JsonLdBreadcrumbs baseURL={website.baseURL} parent="" currentTitle={installPage.title} />

<!-- PAGE TITLE-->
<section
	class="mx-auto max-w-7xl border-b border-skin-muted bg-skin-light dark:border-skin-muted-dark dark:bg-skin-dark"
>
	<div class="mx-auto max-w-7xl px-4 pt-20 sm:px-6 md:px-32 lg:pt-44">
		<h1
			class="mx-auto py-2 text-4xl font-light leading-none tracking-tighter text-skin-heading dark:text-skin-heading-dark lg:py-10 lg:text-5xl"
		>
			Installation
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
								Prerequisites
							</h2>
							<div>
								<ul class="list-none space-y-3 text-base sm:text-lg md:mt-5">
									<li class="font-light text-skin-body dark:text-skin-body-dark">
										↳ Git
									</li>
									<li class="font-light text-skin-body dark:text-skin-body-dark">
										↳ Node (v16.9.0 or higher is required)
									</li>
								</ul>
							</div>

							<h2
								class="group text-lg font-normal text-skin-heading hover:text-skin-heading-hover dark:text-skin-heading-dark lg:text-2xl"
							>
								OSX and Linux via Homebrew
							</h2>

							<p
								class="text-base font-light text-skin-body dark:text-skin-body-dark sm:text-lg"
							>
								Homebrew will also install Git and Node.
							</p>

							<Shell>
								<div>
									<p class="select-none text-teal-300"># Tap a new formula</p>
									<p>brew tap sveltinio/sveltin</p>
									<p class="select-none text-teal-300"># Install</p>
									<p>brew install sveltin</p>
								</div>
							</Shell>

							<h2
								class="group text-lg font-normal text-skin-heading hover:text-skin-heading-hover dark:text-skin-heading-dark lg:text-2xl"
							>
								Windows via Scoop
							</h2>

							<Shell>
								<div>
									<p class="select-none text-teal-300"># Tap a new bucket</p>
									<p>
										scoop bucket add sveltinio
										https://github.com/sveltinio/scoop-sveltin.git
									</p>
									<p class="select-none text-teal-300"># Install</p>
									<p>scoop install sveltinio/sveltin</p>
								</div>
							</Shell>

							<h2
								class="group text-lg font-normal text-skin-heading hover:text-skin-heading-hover dark:text-skin-heading-dark lg:text-2xl"
							>
								Go Install
							</h2>
							<div class="space-y-3">
								<p
									class="text-base font-light text-skin-body dark:text-skin-body-dark sm:text-lg"
								>
									Installation is done by using the <span class="font-mono"
										>go install</span
									>
									command. In this case, ensure to have
									<span class="font-semibold">Go (v1.17 or higher) installed</span
									> on your machine.
								</p>
							</div>

							<Shell>
								<div>
									<p>go install github.com/sveltinio/sveltin@latest</p>
								</div>
							</Shell>

							<h2
								class="group text-lg font-normal text-skin-heading hover:text-skin-heading-hover dark:text-skin-heading-dark lg:text-2xl"
							>
								Manually
							</h2>

							<div class="space-y-3">
								<p
									class="text-base font-light text-skin-body dark:text-skin-body-dark sm:text-lg"
								>
									You can download the pre-compiled binary for you specific OS
									from the
									<ExternalLink
										name="releases page"
										url="https://github.com/sveltinio/sveltin/releases"
										class="text-skin-link hover:bg-skin-light hover:text-skin-link-hover dark:text-skin-link-dark dark:hover:bg-skin-dark dark:hover:text-skin-link-dark-hover"
									/>. You will need to extract the binary, then move it to your
									local bin folder. Please, refer to the example below:
								</p>
							</div>

							<Shell>
								<div>
									<p>
										wget
										https://github.com/sveltinio/sveltin/releases/download/$VERSION/$PACKAGE_NAME
										-O $PACKAGE_NAME
									</p>
									<p>sudo tar -xvf $PACKAGE_NAME -C /usr/local/bin/</p>
									<p>sudo chmod +x /usr/local/bin/sveltin</p>
								</div>
							</Shell>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</section>

<!-- END OF PAGE CONTENT -->
