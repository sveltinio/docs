<script lang="ts">
	import type { ExternalLinkItem } from '$lib/interfaces';

	import { ExternalLink } from '@sveltinio/essentials';
	export let externalLinksData: Array<ExternalLinkItem>;
</script>

<div class="mt-12 pl-6">
	<p class="text-sm font-semibold uppercase text-skin-heading dark:text-skin-heading-dark">
		External Links
	</p>
</div>
{#each externalLinksData as item}
	<div class="mt-3">
		<ExternalLink
			id={`link-${item.name}`}
			name={item.name}
			url={item.url}
			class="group flex items-center p-2 pl-6 text-base font-light text-skin-link hover:bg-skin-light hover:text-skin-link-hover dark:text-skin-link-dark dark:hover:bg-skin-dark dark:hover:text-skin-link-dark-hover"
		>
			{item.name}
		</ExternalLink>
	</div>
{/each}
