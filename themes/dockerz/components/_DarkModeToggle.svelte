<script lang="ts">
	import SunLightIcon from '@indaco/svelte-iconoir/icons/SunLightIcon.svelte';
	import HalfMoonIcon from '@indaco/svelte-iconoir/icons/HalfMoonIcon.svelte';
	import ThemeSwitch from './_ThemeSwitch.svelte';

	import { clickOutside } from '$lib/shared/events';

	export let dark: boolean;
	let isThemeSwitchVisible = false;

	function handleEscape({ key }) {
		if (key === 'Escape') {
			isThemeSwitchVisible = false;
		}
	}

	function handleThemeSwitchVisibility(): void {
		isThemeSwitchVisible = !isThemeSwitchVisible;
	}
</script>

<svelte:window on:keyup={handleEscape} />

<button
	on:click|preventDefault={handleThemeSwitchVisibility}
	use:clickOutside={{ enabled: isThemeSwitchVisible, cb: () => (isThemeSwitchVisible = false) }}
>
	{#if dark}
		<HalfMoonIcon class="text-skin-white w-7 h-7 rounded-full p-1" />
	{:else}
		<SunLightIcon class="text-skin-pure-dark w-7 h-7 rounded-full p-1" />
	{/if}
	<span class="sr-only">Light/Dark mode button</span>
</button>

<ThemeSwitch bind:dark bind:visible={isThemeSwitchVisible} />
