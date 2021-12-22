<script lang="ts">
	import ExternalLink from '$components/_ExternalLink.svelte';

	import ModernImage from '$components/_ModernImage.svelte';
	import type { WebSite } from '$lib/interfaces';

	export let cliVersion: string;
	export let websiteData: WebSite;
</script>

<footer
	class="border-t bg-skin-base dark:bg-skin-base-dark dark:border-skin-muted-dark"
	aria-labelledby="footer-heading"
>
	<h2 id="footer-heading" class="sr-only">Footer</h2>
	<div class="px-4 py-12 mx-auto sm:px-6 lg:px-8">
		<div class="flex items-center justify-center text-center lg:text-left lg:justify-between">
			<div class="space-y-8 text-skin-muted dark:text-skin-muted-dark">
				<div
					class="flex flex-col justify-center items-center w-full font-light tracking-tighter lg:flex-row lg:justify-between"
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
					<div class="flex flex-col justify-center items-center">
						<p
							class="mt-2 mx-auto ml-0 text-sm text-skin-body dark:text-skin-body-dark lg:ml-12"
						>
							This site uses the <span class="italic">Dockerz</span> theme by <ExternalLink
								name="wickedlab"
								url="https://wickedlabs.dev/"
								class=" underline">WickedLab</ExternalLink
							>.&nbsp; <br class="block lg:hidden" /> Icons by <ExternalLink
								name="Iconoir"
								url="https://iconoir.com"
								class="underline">Iconoir</ExternalLink
							> via <ExternalLink
								name="svelte-iconoir"
								url="https://www.npmjs.com/package/@indaco/svelte-iconoir"
								class="italic">svelte-iconoir</ExternalLink
							>.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</footer>
