<script lang="ts">
	import { website } from '$config/website.js';
	import { ExternalLink } from '@sveltinio/essentials';
	import { IWebPageMetadata, OpenGraphType, TwitterCardType } from '@sveltinio/seo/types';
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
	class="mx-auto bg-skin-light border-b dark:bg-skin-dark border-skin-muted max-w-7xl dark:border-skin-muted-dark"
>
	<div class="px-4 pt-20 mx-auto max-w-7xl sm:px-6 md:px-32 lg:pt-44">
		<h1
			class="py-2 mx-auto text-4xl font-light leading-none tracking-tighter text-skin-heading dark:text-skin-heading-dark lg:text-5xl lg:py-10"
		>
			Installation
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
					<div
						class="space-y-8 text-base font-light text-skin-body dark:text-skin-body-dark sm:text-lg prose dark:prose-invert"
					>
						<div class="space-y-12">
							<h2
								class="text-lg font-normal text-skin-heading dark:text-skin-heading-dark hover:text-skin-heading-hover lg:text-2xl group"
							>
								Prerequisites
							</h2>
							<div>
								<ul class="space-y-3 text-base list-none sm:text-lg md:mt-5">
									<li class="font-light text-skin-body dark:text-skin-body-dark">
										↳ Git
									</li>
									<li class="font-light text-skin-body dark:text-skin-body-dark">
										↳ Node (v16.9.0 or higher is required)
									</li>
								</ul>
							</div>

							<h2
								class="text-lg font-normal text-skin-heading dark:text-skin-heading-dark hover:text-skin-heading-hover lg:text-2xl group"
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
									<p class="text-teal-300 select-none"># Tap a new formula</p>
									<p>brew tap sveltinio/sveltin</p>
									<p class="text-teal-300 select-none"># Install</p>
									<p>brew install sveltin</p>
								</div>
							</Shell>

							<h2
								class="text-lg font-normal text-skin-heading dark:text-skin-heading-dark hover:text-skin-heading-hover lg:text-2xl group"
							>
								Windows via Scoop
							</h2>

							<Shell>
								<div>
									<p class="text-teal-300 select-none"># Tap a new bucket</p>
									<p>
										scoop bucket add sveltinio
										https://github.com/sveltinio/scoop-sveltin.git
									</p>
									<p class="text-teal-300 select-none"># Install</p>
									<p>scoop install sveltinio/sveltin</p>
								</div>
							</Shell>

							<h2
								class="text-lg font-normal text-skin-heading dark:text-skin-heading-dark hover:text-skin-heading-hover lg:text-2xl group"
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
								class="text-lg font-normal text-skin-heading dark:text-skin-heading-dark hover:text-skin-heading-hover lg:text-2xl group"
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
										class="text-skin-link hover:text-skin-link-hover hover:bg-skin-light dark:hover:text-skin-link-dark-hover dark:text-skin-link-dark dark:hover:bg-skin-dark"
									/>. You will need to extract the binary, then move it to your
									local bin folder. Please, refer to the example below:
								</p>
							</div>

							<Shell>
								<div>
									<p>
										https://github.com/sveltinio/sveltin/releases/download/$VERSION/$PACKAGE_NAME
										-o $PACKAGE_NAME
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
