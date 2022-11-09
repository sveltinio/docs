<script lang="ts">
	import { SunLightIcon } from '@indaco/svelte-iconoir/icons/SunLightIcon';
	import { HalfMoonIcon } from '@indaco/svelte-iconoir/icons/HalfMoonIcon';
	import { theme } from '$lib/shared/stores';
	import { browser } from '$app/environment';

	$: isDarkMode = browser ? Boolean(document.documentElement.classList.contains('dark')) : true;

	function handleLightDark() {
		isDarkMode = !isDarkMode;
		$theme = isDarkMode;
		isDarkMode
			? document.querySelector('html').classList.add('dark')
			: document.querySelector('html').classList.remove('dark');
	}
</script>

<button
	type="button"
	role="switch"
	aria-label="Toggle Dark Mode"
	aria-checked={isDarkMode}
	class="w-5 h-5 sm:h-8 sm:w-8 sm:p-1"
	on:click|preventDefault={handleLightDark}
	on:keyup|preventDefault={handleLightDark}
	on:keydown|preventDefault={handleLightDark}
	on:keypress={handleLightDark}
>
	<HalfMoonIcon class="hidden h-7 w-7 rounded-full p-1 text-skin-white  dark:block" />
	<SunLightIcon class="block h-7 w-7 rounded-full p-1 text-skin-pure-dark dark:hidden" />
	<span class="sr-only">Light/Dark mode button</span>
</button>
