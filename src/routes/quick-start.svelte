<script lang="ts">
	import { website } from '$config/website.js';
	import { IWebPageMetadata, OpenGraphType, TwitterCardType } from '@sveltinio/seo/types';
	import { PageMetaTags, JsonLdWebPage, JsonLdBreadcrumbs } from '@sveltinio/seo';
	import { getFavicon, getPageUrl } from '$lib/utils/strings.js';
	import Shell from '$themes/dockerz/components/_Shell.svelte';

	const quickStartPage: IWebPageMetadata = {
		url: getPageUrl('quick-start', website),
		title: 'Quick Start',
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

<PageMetaTags data={quickStartPage} />
<JsonLdWebPage data={quickStartPage} />
<JsonLdBreadcrumbs baseURL={website.baseURL} parent="" currentTitle={quickStartPage.title} />

<!-- PAGE TITLE-->
<section
	class="mx-auto bg-skin-light border-b dark:bg-skin-dark border-skin-muted max-w-7xl dark:border-skin-muted-dark"
>
	<div class="px-4 pt-20 mx-auto max-w-7xl sm:px-6 md:px-32 lg:pt-44">
		<h1
			class="py-2 mx-auto text-4xl font-light leading-none tracking-tighter text-skin-heading dark:text-skin-heading-dark lg:text-5xl lg:py-10"
		>
			{quickStartPage.title}
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
								With few commands Sveltin flex the muscles 💪
							</h2>
						</div>
						<div class="space-y-8">
							<p
								class="text-base font-light text-skin-body dark:text-skin-body-dark sm:text-lg"
							>
								Using Sveltin is preatty easy. Here you will learn how to get
								started with Sveltin creating a sample project. What you will get is
								a production ready website. Ok, no more words. Let's get started!
							</p>
							<p
								class="text-base font-light text-skin-body dark:text-skin-body-dark sm:text-lg"
							>
								Create a project:
							</p>

							<Shell>
								<div>
									<p>sveltin new myBlog</p>
								</div>
							</Shell>

							<p
								class="text-base font-light text-skin-body dark:text-skin-body-dark sm:text-lg"
							>
								The CLI will ask you to select the package manager/npmClient (npm,
								yarn or pnpm) you want to use based on what is installed on your
								system.
							</p>
							<p
								class="text-base font-light text-skin-body dark:text-skin-body-dark sm:text-lg"
							>
								Then, you select the CSS lib for your project. It can be vanilla
								CSS, Sass / SCSS, Tailwind CSS, Bulma or Bootstrap. You can use the
								shortcut <span class="text-base font-mono">--css</span>
								flag. Check the
								<a href="/cli/new" class="text-skin-link dark:text-skin-link-dark"
									>new command</a
								> documentation.
							</p>

							<p>Move to the project folder:</p>

							<Shell>
								<div>
									<p>cd myBlog</p>
								</div>
							</Shell>

							<p
								class="text-base font-light text-skin-body dark:text-skin-body-dark sm:text-lg"
							>
								Install all the dependencies:
							</p>

							<Shell>
								<div>
									<p>sveltin prepare</p>
								</div>
							</Shell>

							<p
								class="text-base font-light text-skin-body dark:text-skin-body-dark sm:text-lg"
							>
								Open the <span class="italic">config/website.js.ts</span> file and edit
								the info.
							</p>

							<p
								class="text-base font-light text-skin-body dark:text-skin-body-dark sm:text-lg"
							>
								Let's see if everything is ok. Run the server:
							</p>

							<Shell>
								<div>
									<p>sveltin server</p>
								</div>
							</Shell>

							<p
								class="text-base font-light text-skin-body dark:text-skin-body-dark sm:text-lg"
							>
								Let move on! Create a public page as Svelte component to be served
								at <span class="italic">/contact</span>
							</p>

							<Shell>
								<div>
									<p>sveltin new page contact --type svelte</p>
								</div>
							</Shell>

							<p
								class="text-base font-light text-skin-body dark:text-skin-body-dark sm:text-lg"
							>
								So far so good! Nothing special there, let flex the muscle again! <br
								/>
								No blog without posts so, start creating a
								<span class="italic">posts</span> resource:
							</p>

							<Shell>
								<div>
									<p>sveltin new resource posts</p>
								</div>
							</Shell>

							<p
								class="text-base font-light text-skin-body dark:text-skin-body-dark sm:text-lg"
							>
								Add new post to the posts resource to be served at <span
									class="italic">/posts/welcome</span
								>
							</p>

							<Shell>
								<div>
									<p>sveltin new content posts/welcome</p>
								</div>
							</Shell>

							<p
								class="text-base font-light text-skin-body dark:text-skin-body-dark sm:text-lg"
							>
								One more, please:
							</p>

							<Shell>
								<div>
									<p>sveltin new content posts/getting-started</p>
								</div>
							</Shell>

							<p
								class="text-base font-light text-skin-body dark:text-skin-body-dark sm:text-lg"
							>
								A common use case is to have the content grouped by metadata, e.g.
								category. Add a 'category' metadata to have a list of grouped
								content at <span class="italic">/posts/category</span>
							</p>

							<Shell>
								<div>
									<p>
										sveltin new metadata category --resource posts --type single
									</p>
								</div>
							</Shell>

							<p
								class="text-base font-light text-skin-body dark:text-skin-body-dark sm:text-lg"
							>
								Let's generate the sitemap and the RSS feed files. Open the
								`env.production` file and edit `VITE_PUBLIC_BASE_PATH` to reflect
								your domain name. Now, run the following sveltin's commands:
							</p>

							<Shell>
								<div>
									<p>sveltin generate sitemap</p>
									<p>sveltin generate rss</p>
								</div>
							</Shell>

							<p
								class="text-base font-light text-skin-body dark:text-skin-body-dark sm:text-lg"
							>
								Sveltin will generate `sitemap.xml` and `rss.xml` files within the <span
									class="italic">static</span
								> folder so that they will be copied as they are during the build process.
							</p>

							<p
								class="text-base font-light text-skin-body dark:text-skin-body-dark sm:text-lg"
							>
								Run the server:
							</p>

							<Shell>
								<div>
									<p>sveltin server</p>
								</div>
							</Shell>

							<p
								class="text-base font-light text-skin-body dark:text-skin-body-dark sm:text-lg"
							>
								Alright! Your project is up and running. Please, refer to the cli
								docs to learn more on adding more metadata types, generate the
								sitemap, rss, the menu structure etc.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</section>
