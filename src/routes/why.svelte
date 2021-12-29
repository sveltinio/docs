<script context="module">
	import { website } from '$config/website.js';
	import WebPage from '$components/seo/jsonld/WebPage.svelte';
	import WhySveltin from '$themes/dockerz/components/about/_WhySveltin.svelte';
	import ExistingApproaches from '$themes/dockerz/components/about/_ExistingApproaches.svelte';
	import LookingFor from '$themes/dockerz/components/about/_LookingFor.svelte';
	import SveltinGoals from '$themes/dockerz/components/about/_SveltinGoals.svelte';
	export const prerender = true;
</script>

<svelte:head>
	<title>Why Sveltin ?</title>
	<meta name="description" content="" />
</svelte:head>

<!-- JSON-LD WebPage-->
<WebPage name="why" description="" publisher={website.title} baseURL={website.baseURL} />

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
