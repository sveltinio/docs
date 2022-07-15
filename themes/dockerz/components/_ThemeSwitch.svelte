<script lang="ts">
	import { theme } from '$lib/shared/stores';
	import { SunLightIcon, HalfMoonIcon, ComputerIcon } from '@indaco/svelte-iconoir';

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
		const isAutoSettings = window.matchMedia('(prefers-color-scheme: dark)').matches;
		let themeName = isAutoSettings ? 'dark' : 'light';
		theme.set(themeName);
		dark = isAutoSettings;
		visible = !visible;
	}
</script>

{#if visible}
	<ul
		class="dark:highlight-white/5 absolute top-full right-0 z-50 mt-8 w-36 overflow-hidden rounded-lg bg-skin-light py-1 text-sm font-semibold text-gray-700 shadow-lg ring-1 ring-gray-900/10 dark:bg-skin-dark dark:text-gray-300 dark:ring-0"
		aria-orientation="vertical"
		role="listbox"
		tabindex="0"
	>
		<li
			class="flex cursor-pointer items-center py-1 px-2 hover:bg-gray-100 dark:hover:bg-skin-base-dark-hover"
			role="option"
			tabindex="-1"
			on:click|preventDefault={handleLightMode}
		>
			<SunLightIcon class="mr-2 h-5 w-5" />
			Light
		</li>
		<li
			class="flex cursor-pointer items-center py-1 px-2 hover:bg-gray-100 dark:hover:bg-skin-base-dark-hover"
			role="option"
			tabindex="-1"
			on:click|preventDefault={handleDarkMode}
		>
			<HalfMoonIcon class="mr-2 h-5 w-5" />
			Dark
		</li>
		<li
			class="flex cursor-pointer items-center py-1 px-2 hover:bg-gray-100 dark:hover:bg-skin-base-dark-hover"
			role="option"
			tabindex="-1"
			on:click|preventDefault={handleSystemMode}
		>
			<ComputerIcon class="mr-2 h-5 w-5 " />
			System
		</li>
	</ul>
{/if}
