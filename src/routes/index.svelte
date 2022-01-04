<script context="module">
	import { website } from '$config/website.js';
	import Overview from '$themes/dockerz/components/about/_Overview.svelte';
</script>

<svelte:head>
	<title>Sveltin Documentation</title>
</svelte:head>
<!-- PAGE TITLE-->
<section
	class="mx-auto bg-skin-light dark:bg-skin-dark border-b border-skin-muted max-w-7xl dark:border-skin-muted-dark"
>
	<div class="px-4 pt-20 mx-auto max-w-7xl sm:px-6 md:px-32 lg:pt-44">
		<h1
			class="py-2 mx-auto text-4xl font-light leading-none tracking-tighter text-skin-heading dark:text-skin-heading-dark lg:text-5xl lg:py-10"
		>
			Welcome to Sveltin
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
						<Overview />
					</div>
				</div>
			</div>
		</section>
	</div>
</section>
<!-- END OF PAGE CONTENT -->
