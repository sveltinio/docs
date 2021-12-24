<script lang="ts">
	import type { ExternalLinkItem } from '$lib/interfaces';
	import ExternalLink from '$components/_ExternalLink.svelte';

	export let externalLinksData: Array<ExternalLinkItem>;
</script>

<div class="pl-6 mt-12">
	<p class="text-skin-heading dark:text-skin-heading-dark text-sm font-semibold uppercase">
		External Links
	</p>
</div>
{#each externalLinksData as item}
	<div class="mt-3">
		<ExternalLink
			name={item.name}
			url={item.url}
			class="flex items-center p-2 pl-6 text-base font-light text-skin-link hover:text-skin-link-hover hover:bg-skin-light dark:hover:text-skin-link-dark-hover dark:text-skin-link-dark dark:hover:bg-skin-dark group"
		>
			{item.name}
		</ExternalLink>
	</div>
{/each}
