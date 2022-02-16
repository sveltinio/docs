<script lang="ts">
	import { page } from '$app/stores';
	import type { ExternalLinkItem } from '$lib/interfaces';

	import CollapsableList from './_CollapsableList.svelte';
	import SidebarExternals from './_SidebarExternals.svelte';
	import sortBy from 'lodash-es/sortBy.js';
	import type { IMenuItem } from '@sveltinio/seo/types';

	export let dark: boolean;
	export let menuData: Array<IMenuItem>;
	export let externalLinksData: Array<ExternalLinkItem>;
	export let handleNavMenu = () => {};

	const menuItems = sortBy(menuData, 'weigth');
	const externalLinks = sortBy(externalLinksData, 'weigth');
</script>

<div class="dark:border-skin-base-dark border-l">
	<div>
		{#each menuItems as item}
			{#if !item.children}
				<a
					href={item.url}
					sveltekit:prefetch
					class="group flex items-center p-2 pl-6 text-base font-light text-skin-link hover:text-skin-link-hover hover:bg-skin-light dark:text-skin-link-dark dark:hover:text-skin-link-dark-hover dark:hover:bg-skin-dark"
					class:active={!dark && $page.url.pathname === item.url}
					class:active-dark={dark && $page.url.pathname === item.url}
					on:click={handleNavMenu}
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
									sveltekit:prefetch
									class="group flex items-center p-2 pl-3 text-base font-light text-skin-link hover:text-skin-link-hover hover:bg-skin-light dark:text-skin-link-dark dark:hover:text-skin-link-dark-hover dark:hover:bg-skin-dark focus:border-skin-muted"
									class:active={!dark && $page.url.pathname === child.url}
									class:active-dark={dark && $page.url.pathname === child.url}
									on:click={handleNavMenu}
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
	<div class="pl-6 mt-12">
		<p class="text-skin-heading dark:text-skin-heading-dark text-xs font-semibold uppercase">
			Build Info
		</p>
	</div>
	<div class="mt-3">
		<p
			class="p-2 pl-6 text-sm font-light text-skin-base dark:hover:text-skin-base-dark-hover dark:text-skin-base-dark dark:hover:bg-skin-dark group"
		>
			Sveltin v0.3.0
		</p>
		<p
			class="p-2 pl-6 text-sm font-light text-skin-base dark:hover:text-skin-base-dark-hover dark:text-skin-base-dark dark:hover:bg-skin-dark group"
		>
			SvelteKit v1.0.0-next.264
		</p>
	</div>
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
