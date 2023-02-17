<script lang="ts">
	import type { ExternalLinkItem } from '$lib/interfaces';
	import { Link } from '@sveltinio/essentials';
	export let externalLinksData: Array<ExternalLinkItem>;
</script>

<div class="mt-12 pl-6">
	<p class="text-sm font-semibold uppercase text-skin-heading dark:text-skin-heading-dark">
		External Links
	</p>
</div>
{#each externalLinksData as item}
	<Link
		id={`link-${item.name}`}
		name={item.name}
		href={item.url}
		external
		class="group flex items-center gap-1 p-2 pl-6 text-base font-light text-skin-link hover:bg-skin-light hover:text-skin-link-hover dark:text-skin-link-dark dark:hover:bg-skin-dark dark:hover:text-skin-link-dark-hover umami--click--external-{item.identifier}"
	>
		{item.name}
	</Link>
{/each}
