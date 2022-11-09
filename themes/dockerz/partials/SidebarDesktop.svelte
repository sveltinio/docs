<script lang="ts">
	import type { IMenuItem } from '@sveltinio/seo/types';
	import type { ExternalLinkItem } from '$lib/interfaces';
	import SidebarLinks from '../components/_SidebarLinks.svelte';
	import SveltinLogo from '../components/_SveltinLogo.svelte';

	export let menuData: Array<IMenuItem>;
	export let externalLinksData: Array<ExternalLinkItem>;
</script>

<div
	class="z-50 hidden bg-skin-muted dark:bg-skin-base-dark md:fixed md:inset-y-0 md:w-72 md:flex-col lg:flex"
>
	<div class="flex min-h-0 flex-1 flex-col border-r border-skin-base dark:border-skin-muted-dark">
		<div class="flex flex-1 flex-col overflow-y-auto pt-5 pb-4 lg:pl-6">
			<div class="flex shrink-0 items-center px-4 text-skin-heading dark:text-skin-white">
				<a href="/">
					<SveltinLogo />
					<span class="sr-only">Sveltin Logo</span>
				</a>
			</div>
			<nav class="mt-12 flex-1">
				<SidebarLinks {menuData} {externalLinksData} />
			</nav>
		</div>
	</div>
</div>
