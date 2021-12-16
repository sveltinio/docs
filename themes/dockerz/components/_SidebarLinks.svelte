<script>
	import { page } from '$app/stores';
	import menu from '$config/menu.js';
	import CollapsableList from './_CollapsableList.svelte';
	import SidebarExternals from './_SidebarExternals.svelte';
	import sortBy from 'lodash-es/sortBy.js';

	let menuStructure = sortBy(menu, 'weigth');
</script>

<div class="dark:border-skin-base-dark border-l">
	<div>
		{#each menuStructure as item}
			{#if !item.children}
				<a
					href={item.url}
					class="dark:bg-skin-dark text-skin-accent dark:text-skin-accent-dark hover:text-skin-accent-hover group dark:hover:text-skin-accent-dark-hover flex items-center p-2 pl-6 text-base font-light border-l-2 border-skin-muted"
					class:active={$page.path === item.url}
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
									class="text-skin-link hover:text-skin-link-hover dark:text-skin-link-dark dark:hover:text-skin-link-dark-hover group hover:bg-skin-light dark:hover:bg-skin-dark focus:border--skin-muted flex items-center p-2 pl-3 text-base font-light border-l-2 border-transparent"
									class:active={$page.path === child.url}
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
	<SidebarExternals />
</div>

<style>
	.active {
		background-color: var(--pure-white);
	}
</style>
