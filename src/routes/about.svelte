<script context="module">
	import { website } from '$config/website.js';
	import userSettings from '$config/user_settings.js';
	import WebPage from '$components/seo/jsonld/WebPage.svelte';
	import ExternalLink from '$components/_ExternalLink.svelte';
	export const prerender = true;
</script>

<svelte:head>
	<title>About | {website.title}</title>
	<meta name="description" content="" />
</svelte:head>

<!-- JSON-LD WebPage-->
<WebPage name="about" description="" publisher={website.title} baseURL={website.baseURL} />

<!-- PAGE TITLE-->
<section
	class="mx-auto bg-skin-light border-b dark:bg-skin-dark border-skin-muted max-w-7xl dark:border-skin-muted-dark"
>
	<div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-32 pt-44">
		<h1
			data-animate="title"
			class="py-10 mx-auto text-4xl font-light leading-none tracking-tighter text-skin-heading dark:text-skin-heading-dark lg:text-5xl"
			style="opacity: 1; transform: translateY(0px);"
		>
			About
		</h1>
	</div>
</section>
<!-- END OF PAGE TITLE-->
<!-- PAGE CONTENT -->
<section class="pt-6 pb-24 bg-skin-light dark:bg-skin-dark">
	<div class="px-4 mx-auto sm:px-6 md:px-32">
		<!-- Replace with your content -->
		<section>
			<div class="max-w-3xl">
				<div class="mx-auto space-y-24 text-lg text-left">
					<div class="space-y-8">
						<p
							class="text-base font-light text-skin-body dark:text-skin-body-dark sm:text-lg md:mt-5 md:text-xl"
						>
							Dockerz is Wicked's open source design system for products and digital
							experiences. With the Wicked Design Language as its foundation, the
							system consists of working code, design tools and resources, human
							interface guidelines, and a vibrant community of contributors.
						</p>
						<div>
							<ul
								role="list"
								class="space-y-3 text-base list-none sm:text-lg md:mt-5 md:text-xl"
							>
								<li>
									<a
										class="font-light text-skin-body dark:text-skin-body-dark hover:text-skin-body-hover dark:hover:text-skin-body-dark-hover"
										href="#overview"
									>
										↳ Overview
									</a>
								</li>
								<li>
									<a
										class="font-light text-skin-body dark:text-skin-body-dark hover:text-skin-body-hover dark:hover:text-skin-body-dark-hover"
										href="#howitworks"
									>
										↳ How Dockerz works
									</a>
								</li>
								<li>
									<a
										class="font-light text-skin-body dark:text-skin-body-dark hover:text-skin-body-hover dark:hover:text-skin-body-dark-hover"
										href="#stack"
									>
										↳ Tech stack used at Dockerz
									</a>
								</li>
								<li>
									<a
										class="font-light text-skin-body dark:text-skin-body-dark hover:text-skin-body-hover dark:hover:text-skin-body-dark-hover"
										href="#contact"
									>
										↳ Contact us
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</section>
<!-- END OF PAGE CONTENT -->
