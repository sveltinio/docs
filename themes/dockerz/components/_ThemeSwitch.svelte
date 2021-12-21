<script lang="ts">
	import SunLightIcon from '@indaco/svelte-iconoir/icons/SunLightIcon.svelte';
	import HalfMoonIcon from '@indaco/svelte-iconoir/icons/HalfMoonIcon.svelte';
	import ComputerIcon from '@indaco/svelte-iconoir/icons/ComputerIcon.svelte';
	import { theme } from '$lib/shared/stores';

	export let dark: boolean;
	export let visible: boolean;

	function handleLightMode(): void {
		theme.set('light');
		dark = false;
		visible = !visible;
	}

	function handleDarkMode(): void {
		theme.set('dark');
		dark = true;
		visible = !visible;
	}

	function handleSystemMode(): void {
		theme.set('system');
		dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		visible = !visible;
	}
</script>

{#if visible}
	<ul
		class="absolute z-50 top-full right-0 bg-skin-light rounded-lg ring-1 ring-gray-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-gray-700 font-semibold dark:bg-skin-dark dark:ring-0 dark:highlight-white/5 dark:text-gray-300 mt-8"
		aria-orientation="vertical"
		role="listbox"
		tabindex="0"
	>
		<li
			class="py-1 px-2 flex items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-skin-base-dark-hover"
			role="option"
			tabindex="-1"
			on:click|preventDefault={handleLightMode}
		>
			<SunLightIcon class="w-5 h-5 mr-2" />
			Light
		</li>
		<li
			class="py-1 px-2 flex items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-skin-base-dark-hover"
			role="option"
			tabindex="-1"
			on:click|preventDefault={handleDarkMode}
		>
			<HalfMoonIcon class="w-5 h-5 mr-2" />
			Dark
		</li>
		<li
			class="py-1 px-2 flex items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-skin-base-dark-hover"
			role="option"
			tabindex="-1"
			on:click|preventDefault={handleSystemMode}
		>
			<ComputerIcon class="w-5 h-5 mr-2 " />
			System
		</li>
	</ul>
{/if}
