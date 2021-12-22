<script lang="ts">
	import ModernImage from '$components/_ModernImage.svelte';
	import type { WebSite } from '$lib/interfaces';

	export let cliVersion: string;
	export let websiteData: WebSite;
</script>

<footer
	class="border-t border-antiflash bg-skin-base dark:bg-skin-base-dark dark:border-skin-muted-dark"
	aria-labelledby="footer-heading"
>
	<h2 id="footer-heading" class="sr-only">Footer</h2>
	<div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
		<div class="flex justify-center text-center lg:text-left lg:justify-between">
			<div class="space-y-8 text-skin-muted dark:text-skin-muted-sard">
				<div
					class="inline-flex justify-between items-center w-full font-bold tracking-tighter"
				>
					<ModernImage
						pathToFile={websiteData.logo}
						altText="{websiteData.title} logo"
						webp
						avif={false}
						class="w-28 h-auto lazyload"
						width="24px"
						height="32px"
					/>
					<p class="mt-2 mx-auto ml-12 text-sm lg:w-1/2 text-club">
						Wicked templates for wicked dev's
					</p>
				</div>
			</div>
		</div>
	</div>
</footer>
