<script lang="ts">
	import { page } from '$app/stores';
	import type { MenuItem, ExternalLinkItem } from '$lib/interfaces';

	import CollapsableList from './_CollapsableList.svelte';
	import SidebarExternals from './_SidebarExternals.svelte';
	import sortBy from 'lodash-es/sortBy.js';

	export let dark: boolean;
	export let menuData: Array<MenuItem>;
	export let externalLinksData: Array<ExternalLinkItem>;

	const menuItems = sortBy(menuData, 'weigth');
	const externalLinks = sortBy(externalLinksData, 'weigth');
</script>

<div class="dark:border-skin-base-dark border-l">
	<div>
		{#each menuItems as item}
			{#if !item.children}
				<a
					href={item.url}
					class="flex items-center p-2 pl-6 text-base font-light text-skin-link dark:text-skin-link-dark hover:text-skin-link-hover hover:bg-skin-light group dark:hover:text-skin-link-dark-hover dark:hover:bg-skin-dark"
					class:active={!dark && $page.path === item.url}
					class:active-dark={dark && $page.path === item.url}
				>
					{item.name}
				</a>
			{:else}
				<CollapsableList headerText={item.name}>
					<ul>
						{#each item.children as child}
							<li>
								<a
									href={child.url}
									class="text-skin-link hover:text-skin-link-hover dark:text-skin-link-dark dark:hover:text-skin-link-dark-hover group hover:bg-skin-light dark:hover:bg-skin-dark focus:border-skin-muted flex items-center p-2 pl-3 text-base font-light"
									class:active={!dark && $page.path === child.url}
									class:active-dark={dark && $page.path === child.url}
								>
									{child.name}
								</a>
							</li>
						{/each}
					</ul>
				</CollapsableList>
			{/if}
		{/each}
	</div>
	<SidebarExternals externalLinksData={externalLinks} />
</div>

<style>
	.active {
		background-color: var(--pure-white);
		border-left-width: 2px;
		border-color: var(--color-border-muted);
	}

	.active-dark {
		background-color: var(--dark);
		border-left-width: 2px;
		border-color: var(--color-border-muted-dark);
	}
</style>
