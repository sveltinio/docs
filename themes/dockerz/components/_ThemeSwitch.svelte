<script lang="ts">
	import { theme } from '$lib/shared/stores';
	import { SunLightIcon } from '@indaco/svelte-iconoir/icons/SunLightIcon';
	import { HalfMoonIcon } from '@indaco/svelte-iconoir/icons/HalfMoonIcon';
	import { ComputerIcon } from '@indaco/svelte-iconoir/icons/ComputerIcon';

	export let dark: boolean;
	export let visible: boolean;

	function handleLightMode(): void {
		theme.set(false);
		dark = false;
		visible = !visible;
	}

	function handleDarkMode(): void {
		theme.set(true);
		dark = true;
		visible = !visible;
	}

	function handleSystemMode(): void {
		const isAutoSettings = window.matchMedia('(prefers-color-scheme: dark)').matches;
		let themeName = isAutoSettings ? true : false;
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
			aria-selected={dark}
			tabindex="-1"
			on:click|preventDefault={handleLightMode}
			on:keyup|preventDefault={handleLightMode}
			on:keydown|preventDefault={handleLightMode}
			on:keypress={handleLightMode}
		>
			<SunLightIcon class="mr-2 h-5 w-5" />
			Light
		</li>
		<li
			class="flex cursor-pointer items-center py-1 px-2 hover:bg-gray-100 dark:hover:bg-skin-base-dark-hover"
			aria-selected={dark}
			tabindex="-1"
			on:click|preventDefault={handleDarkMode}
			on:keyup|preventDefault={handleDarkMode}
			on:keydown|preventDefault={handleDarkMode}
			on:keypress={handleDarkMode}
		>
			<HalfMoonIcon class="mr-2 h-5 w-5" />
			Dark
		</li>
		<li
			class="flex cursor-pointer items-center py-1 px-2 hover:bg-gray-100 dark:hover:bg-skin-base-dark-hover"
			aria-selected={dark}
			tabindex="-1"
			on:click|preventDefault={handleSystemMode}
			on:keyup|preventDefault={handleSystemMode}
			on:keydown|preventDefault={handleSystemMode}
			on:keypress={handleSystemMode}
		>
			<ComputerIcon class="mr-2 h-5 w-5 " />
			System
		</li>
	</ul>
{/if}
