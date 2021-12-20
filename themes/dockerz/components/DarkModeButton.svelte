<script lang="ts">
	import { theme } from '$lib/shared/stores/theme';
	import LightBulbOffIcon from '@indaco/svelte-iconoir/icons/LightBulbOffIcon.svelte';
	import LightBulbOnIcon from '@indaco/svelte-iconoir/icons/LightBulbOnIcon.svelte';
	export let dark: boolean;

	function handleDarkMode(): void {
		if (dark) {
			theme.set('dark');
		} else {
			theme.set('light');
		}
		dark = !dark;
	}
</script>

<button on:click|preventDefault={handleDarkMode}>
	{#if dark}
		<LightBulbOnIcon class="text-skin-white w-7 h-7 rounded-full p-1" />
	{:else}
		<LightBulbOffIcon class="text-skin-pure-dark w-7 h-7 rounded-full p-1" />
	{/if}
	<span class="sr-only">Light/Dark mode button</span>
</button>
