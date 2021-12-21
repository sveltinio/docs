<script lang="ts">
	import type { ExternalLinkItem } from '$lib/schema';
	import ExternalLink from '$components/_ExternalLink.svelte';

	export let externalLinksData: Array<ExternalLinkItem>;
</script>

<div class="pl-6 mt-12">
	<p class="text-skin-base dark:text-skin-dark text-sm font-semibold uppercase">External Links</p>
</div>
{#each externalLinksData as item}
	<div class="mt-3">
		<ExternalLink
			name={item.name}
			url={item.url}
			class="text-skin-link dark:text-skin-link-dark hover:text-skin-link-hover group hover:bg-skin-light dark:bg-skin-dark dark:hover:text-skin-link-dark-hover dark:hover:bg-skin-link-dark-hover flex items-center p-2 pl-6 text-base font-light"
		>
			{item.name}
		</ExternalLink>
	</div>
{/each}
