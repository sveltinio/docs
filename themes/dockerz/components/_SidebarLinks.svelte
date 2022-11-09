<script lang="ts">
	import { page } from '$app/stores';
	import type { ExternalLinkItem } from '$lib/interfaces';
	import { removeTrailingSlash } from '$lib/utils/strings.js';

	import CollapsableList from './_CollapsableList.svelte';
	import SidebarExternals from './_SidebarExternals.svelte';
	import sortBy from 'lodash-es/sortBy.js';
	import type { IMenuItem } from '@sveltinio/seo/types';
	import BuildInfo from './_BuildInfo.svelte';

	export let dark: boolean;
	export let menuData: Array<IMenuItem>;
	export let externalLinksData: Array<ExternalLinkItem>;
	export let handleNavMenu = () => {};

	const menuItems = sortBy(menuData, 'weigth');
	const externalLinks = sortBy(externalLinksData, 'weigth');
</script>

<div class="border-l dark:border-skin-base-dark">
	<div>
		{#each menuItems as item}
			{#if !item.children}
				<a
					href={item.url}
					data-sveltekit-prefetch
					class="group flex items-center p-2 pl-6 text-base font-light text-skin-link hover:bg-skin-light hover:text-skin-link-hover dark:text-skin-link-dark dark:hover:bg-skin-dark dark:hover:text-skin-link-dark-hover umami--click--{item.identifier}"
					class:active={!dark && removeTrailingSlash($page.url.pathname) == item.url}
					class:active-dark={dark && removeTrailingSlash($page.url.pathname) == item.url}
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
									data-sveltekit-prefetch
									class="group flex items-center p-2 pl-3 text-base font-light text-skin-link hover:bg-skin-light hover:text-skin-link-hover focus:border-skin-muted dark:text-skin-link-dark dark:hover:bg-skin-dark dark:hover:text-skin-link-dark-hover umami--click--{child.identifier}"
									class:active={!dark &&
										removeTrailingSlash($page.url.pathname) === child.url}
									class:active-dark={dark &&
										removeTrailingSlash($page.url.pathname) === child.url}
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
	<BuildInfo />
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
