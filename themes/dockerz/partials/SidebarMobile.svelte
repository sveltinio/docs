<script lang="ts">
	import { website } from '$config/website';
	import type { MenuItem, ExternalLinkItem } from '$lib/interfaces';
	import CancelIcon from '@indaco/svelte-iconoir/icons/CancelIcon.svelte';
	import MenuMobileBtn from '../components/_MenuMobileBtn.svelte';
	import SidebarLinks from '../components/_SidebarLinks.svelte';
	import ModernImage from '$components/_ModernImage.svelte';

	import { fly, fade } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import { opacityTransition } from '$lib/shared/transitions';
	import SveltinLogo from '../components/_SveltinLogo.svelte';

	export let dark: boolean;
	export let navIsOpen: boolean;
	export let menuData: Array<MenuItem>;
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
				class="relative flex flex-col flex-1 w-full max-w-xs bg-skin-light dark:bg-skin-muted-dark"
				class:hidden={!navIsOpen}
				in:fly={{ x: -200, duration: 300, easing: cubicInOut }}
				out:fly={{ x: -200, duration: 300, easing: cubicInOut }}
			>
				{#if navIsOpen}
					<div
						class="absolute top-0 right-0 pt-2 -mr-12"
						class:hidden={!navIsOpen}
						in:opacityTransition
						out:opacityTransition
					>
						<button
							type="button"
							class="flex items-center justify-center w-10 h-10 ml-1 rounded-full  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
							on:click={handleNavMenu}
						>
							<span class="sr-only">Close sidebar</span>
							<CancelIcon class="w-6 h-6 text-skin-white" />
						</button>
					</div>
				{/if}

				<div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
					<div
						class="flex items-center flex-shrink-0 px-4 text-skin-heading dark:text-skin-heading-dark-hover"
					>
						<a href="/">
							<SveltinLogo />
							<span class="sr-only">Sveltin Logo</span>
						</a>
					</div>
					<nav class="px-2 mt-5 space-y-1">
						<SidebarLinks
							bind:dark
							{menuData}
							{externalLinksData}
							handleNavMenu={() => handleNavMenu()}
						/>
					</nav>
				</div>
				<div
					class="flex flex-shrink-0 p-4 pl-12 border-t  border-skin-base-dark dark:border-skin-base-dark"
				>
					<!------ CTA buttons goes here-->
				</div>
			</div>
		{/if}

		<div class="flex-shrink-0 w-14">
			<!-- Force sidebar to shrink to fit close icon -->
		</div>
	</div>
{/if}
<MenuMobileBtn {navIsOpen} {handleNavMenu} />
