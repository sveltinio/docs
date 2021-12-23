<script lang="ts">
	import type { MenuItem, ExternalLinkItem } from '$lib/interfaces';
	import { website } from '$config/website';
	import ModernImage from '$components/_ModernImage.svelte';
	import SidebarLinks from '../components/_SidebarLinks.svelte';
	import SveltinLogo from '../components/_SveltinLogo.svelte';

	export let dark: boolean;
	export let menuData: Array<MenuItem>;
	export let externalLinksData: Array<ExternalLinkItem>;
</script>

<div
	class="z-50 hidden bg-skin-muted lg:flex md:w-72 md:flex-col md:fixed md:inset-y-0 dark:bg-skin-base-dark"
>
	<div class="flex flex-col flex-1 min-h-0 border-r border-skin-base dark:border-skin-muted-dark">
		<div class="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto lg:pl-6">
			<div class="flex items-center px-4 shrink-0 text-skin-heading dark:text-skin-white">
				<a href="/">
					<SveltinLogo />
				</a>
			</div>
			<nav class="flex-1 mt-12">
				<SidebarLinks bind:dark {menuData} {externalLinksData} />
			</nav>
		</div>
	</div>
</div>
