<script lang="ts">
	import SunLightIcon from '@indaco/svelte-iconoir/icons/SunLightIcon.svelte';
	import HalfMoonIcon from '@indaco/svelte-iconoir/icons/HalfMoonIcon.svelte';
	import ThemeSwitch from './_ThemeSwitch.svelte';
	import { clickOutside } from '$lib/shared/events';

	export let dark: boolean;

	let isThemeSwitchVisible = false;
	const toggleThemeSwithVisibility = () => (isThemeSwitchVisible = !isThemeSwitchVisible);

	function handleEscape({ key }) {
		if (key === 'Escape') {
			isThemeSwitchVisible = false;
		}
	}
</script>

<svelte:window on:keyup={handleEscape} />

<button
	on:click={toggleThemeSwithVisibility}
	use:clickOutside={{ enabled: isThemeSwitchVisible, cb: () => (isThemeSwitchVisible = false) }}
>
	{#if dark}
		<HalfMoonIcon class="h-7 w-7 rounded-full p-1 text-skin-white" />
	{:else}
		<SunLightIcon class="text-skin-pure-dark w-7 h-7 rounded-full p-1" />
	{/if}
	<span class="sr-only">Light/Dark mode button</span>
</button>

<ThemeSwitch bind:dark bind:visible={isThemeSwitchVisible} />
