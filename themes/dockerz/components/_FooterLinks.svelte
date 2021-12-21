<script lang="ts">
	import ExternalLink from '$components/_ExternalLink.svelte';
	import type { MenuItem, ExternalLinkItem } from '$lib/schema';

	export let menuData: Array<MenuItem>;
	export let externalLinksData: Array<ExternalLinkItem>;
</script>

<div
	class="border-t border-antiflash bg-skin-base dark:border-skin-muted-dark dark:bg-skin-base-dark"
>
	<div class="mx-auto max-w-7xl">
		<div class="grid grid-cols-2 mx-auto max-w-none">
			<div
				class="px-4 py-8 bg-skin-base dark:bg-skin-base-dark dark:border-skin-base-dark sm:px-6 lg:px-8"
			>
				<div class="grid grid-cols-1 lg:grid-cols-3">
					<ul role="list" class="mt-4 space-y-4 lg:mt-0">
						{#each menuData as item}
							<li>
								<a
									href={item.url}
									class="text-xs font-light text-skin-muted dark:text-skin-muted-dark hover:text-skin-muted-hover dark:hover:text-skin-muted-dark-hover sm:text-xl lg:text-base"
								>
									{item.name}
								</a>
							</li>
						{/each}
					</ul>
					<ul role="list" class="mt-4 space-y-4 lg:mt-0">
						{#each externalLinksData as item}
							<li>
								<ExternalLink
									name={item.name}
									url={item.url}
									class="text-xs font-light text-skin-muted dark:text-skin-muted-dark hover:text-skin-muted-hover dark:hover:text-skin-muted-dark-hover sm:text-xl lg:text-base"
								>
									{item.name}
								</ExternalLink>
							</li>
						{/each}
					</ul>
				</div>
			</div>
			<div
				class="px-4 py-8 md:mt-0 bg-skin-base dark:bg-skin-base-dark dark:border-skin-base-dark sm:px-6 lg:px-8"
				id="contact"
			>
				<div class="mt-8 md:mt-0 md:order-1 lg:pr-12">
					<p
						class="text-xs font-light text-skin-muted dark:text-skin-muted-dark sm:text-xl lg:text-base"
					>
						Have questions? Email us at email@example.com
					</p>
					<p
						class="text-xs font-light text-skin-muted dark:text-skin-muted-dark sm:text-xl lg:text-base "
					>
						Dockerz ©
						<span x-text="new Date().getFullYear()" />
						<a
							href="https://wickedlabs.dev/"
							class="text-skin-link hover:text-skin-link-hover">Wicked Labs</a
						>
						All rights reserved.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
