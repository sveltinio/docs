<script context="module">
	import { website } from '$config/website.js';
	import ExternalLink from '$components/_ExternalLink.svelte';
</script>

<svelte:head>
	<title>Home | {website.name}</title>
</svelte:head>
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
			Getting started
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
					<div class="space-y-12" id="overview">
						<h2
							class="text-lg font-normal text-skin-heading dark:text-skin-heading-dark hover:text-skin-heading-hover lg:text-2xl group"
						>
							<a href="/" class="inline-flex items-center gap-4">
								Overview
								<!-- <Icon src={ArrowUp} class="hidden w-6 h-6 group-hover:block" /> -->
							</a>
						</h2>
						<div class="space-y-6">
							<p
								class="text-base font-light text-skin-body dark:text-skin-body-dark sm:text-lg"
							>
								Quis semper vulputate aliquam venenatis egestas sagittis quisque
								orci. Donec commodo sit viverra aliquam porttitor ultrices gravida
								eu. Tincidunt leo, elementum mattis elementum ut nisl, justo, amet,
								mattis. Nunc purus, diam commodo tincidunt turpis. Amet, duis sed
								elit interdum dignissim.
							</p>
							<p
								class="text-base font-light text-skin-body dark:text-skin-body-dark sm:text-lg"
							>
								Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat
								in. Convallis arcu ipsum urna nibh. Pharetra, euismod vitae interdum
								mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
								tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi.
								Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis
								diam.
							</p>
						</div>
					</div>
					<div class="space-y-12">
						<h3
							class=" text-lg font-normal text-skin-heading dark:text-skin-heading-dark hover:text-skin-heading-hover lg:text-xlgroup"
						>
							<a
								href="/"
								class="inline-flex items-center gap-4 text-skin-heading dark:text-skin-heading-dark hover:text-skin-heading-hover dark:hover:text-skin-heading-dark-hover"
							>
								Dockerz is open source
								<svg
									class="hidden w-6 h-6 group-hover:block"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
								>
									<path fill="none" d="M0 0h24v24H0z" />
									<path
										fill="currentColor"
										d="M17.657 14.828l-1.414-1.414L17.657 12A4 4 0 1 0 12 6.343l-1.414 1.414-1.414-1.414 1.414-1.414a6 6 0 0 1 8.485 8.485l-1.414 1.414zm-2.829 2.829l-1.414 1.414a6 6 0 1 1-8.485-8.485l1.414-1.414 1.414 1.414L6.343 12A4 4 0 1 0 12 17.657l1.414-1.414 1.414 1.414zm0-9.9l1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07z"
									/>
								</svg>
							</a>
						</h3>
						<div class="space-y-6">
							<p
								class="text-base font-light text-skin-body dark:text-skin-body-dark sm:text-lg"
							>
								Quis semper vulputate aliquam venenatis egestas sagittis quisque
								orci. Donec commodo sit viverra aliquam porttitor ultrices gravida
								eu. Tincidunt leo, elementum mattis elementum ut nisl, justo, amet,
								mattis. Nunc purus, diam commodo tincidunt turpis. Amet, duis sed
								elit interdum dignissim.
							</p>
						</div>
					</div>

					<div class="space-y-12" id="stack">
						<h2
							class="text-lg font-normal text-skin-heading dark:text-skin-heading-dark hover:text-skin-heading-hover lg:text-2xl group"
						>
							<a href="/" class="inline-flex items-center gap-4">
								Teck stack used by Sveltin
								<!-- <Icon src={Filter} class="hidden w-6 h-6 group-hover:block" /> -->
							</a>
						</h2>
						<div class="space-y-6">
							<p
								class="text-base font-light text-skin-body dark:text-skin-body-dark sm:text-lg"
							>
								Quis semper vulputate aliquam venenatis egestas sagittis quisque
								orci. Donec commodo sit viverra aliquam porttitor ultrices gravida
								eu.
							</p>
							<div>
								<ul
									role="list"
									class="text-base text-skin-heading dark:text-skin-heading-dark space-y-3 list-none sm:text-lg md:mt-8 md:text-base"
								>
									<li>
										- <ExternalLink
											name="Go"
											url="https://go.dev"
											class="font-light text-skin-link hover:text-skin-link-hover dark:text-skin-link-dark dark:hover:text-skin-link-dark-hover"
										>
											Go</ExternalLink
										>
									</li>
									<li>
										- <ExternalLink
											name="Cobra"
											url="https://cobra.dev"
											class="font-light text-skin-link hover:text-skin-link-hover dark:text-skin-link-dark dark:hover:text-skin-link-dark-hover"
										>
											Cobra</ExternalLink
										>
									</li>
									<li>
										- <ExternalLink
											name="SvelteKit"
											url="https://kit.svelte.dev"
											class="font-light text-skin-link hover:text-skin-link-hover dark:text-skin-link-dark dark:hover:text-skin-link-dark-hover"
										>
											SvelteKit</ExternalLink
										>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</section>
<!-- END OF PAGE CONTENT -->
