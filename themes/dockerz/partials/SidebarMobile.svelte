<script lang="ts">
	import type { ExternalLinkItem } from '$lib/interfaces';
	import { CancelIcon } from '@indaco/svelte-iconoir/icons/CancelIcon';
	import MenuMobileBtn from '../components/_MenuMobileBtn.svelte';
	import SidebarLinks from '../components/_SidebarLinks.svelte';

	import { fly, fade } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import { opacityTransition } from '$lib/shared/transitions';
	import LogoLink from '../components/_LogoLink.svelte';
	import type { IMenuItem } from '@sveltinio/seo/types';

	export let navIsOpen: boolean;
	export let menuData: Array<IMenuItem>;
	export let externalLinksData: Array<ExternalLinkItem>;

	function handleNavMenu(): void {
		navIsOpen = !navIsOpen;
	}
</script>

{#if navIsOpen}
	<div class="fixed inset-0 z-40 flex lg:hidden" aria-modal="true">
		{#if navIsOpen}
			<div
				class="fixed inset-0 bg-gray-600 bg-opacity-75"
				class:hidden={!navIsOpen}
				aria-hidden="true"
				in:fade={{ duration: 300 }}
				out:fade={{ duration: 300 }}
			/>
		{/if}

		{#if navIsOpen}
			<div
				class="relative flex w-full max-w-xs flex-1 flex-col bg-skin-light dark:bg-skin-muted-dark"
				class:hidden={!navIsOpen}
				in:fly={{ x: -200, duration: 300, easing: cubicInOut }}
				out:fly={{ x: -200, duration: 300, easing: cubicInOut }}
			>
				{#if navIsOpen}
					<div
						class="absolute top-0 right-0 -mr-12 pt-2"
						class:hidden={!navIsOpen}
						in:opacityTransition
						out:opacityTransition
					>
						<button
							type="button"
							class="ml-1 flex h-10 w-10 items-center justify-center rounded-full  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
							on:click={handleNavMenu}
						>
							<span class="sr-only">Close sidebar</span>
							<CancelIcon class="h-6 w-6 text-skin-white" />
						</button>
					</div>
				{/if}

				<div class="h-0 flex-1 overflow-y-auto pt-5 pb-4">
					<div
						class="flex flex-shrink-0 items-center px-4 text-skin-heading dark:text-skin-heading-dark-hover"
					>
						<LogoLink handleNavMenu={() => handleNavMenu()} />
					</div>
					<nav class="mt-5 space-y-1 px-2">
						<SidebarLinks
							{menuData}
							{externalLinksData}
							handleNavMenu={() => handleNavMenu()}
						/>
					</nav>
				</div>
				<div
					class="flex flex-shrink-0 border-t border-skin-base-dark p-4  pl-12 dark:border-skin-base-dark"
				>
					<!------ CTA buttons goes here-->
				</div>
			</div>
		{/if}

		<div class="w-14 flex-shrink-0">
			<!-- Force sidebar to shrink to fit close icon -->
		</div>
	</div>
{/if}
<MenuMobileBtn {navIsOpen} {handleNavMenu} />
