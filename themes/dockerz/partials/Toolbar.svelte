<script lang="ts">
	import SearchBar from '../components/_SearchBar.svelte';
	import DarkModeToggle from '../components/_DarkModeToggle.svelte';

	export let dark: boolean;
</script>

<nav
	class="mx-auto bg-skin-light border-b dark:bg-skin-pure-dark dark:border-skin-muted-dark border-skin-base"
>
	<div class="px-2 mx-auto max-w-7xl sm:px-4 lg:px-8">
		<div class="flex justify-between h-16">
			<div
				class="relative flex items-center justify-center flex-1 px-2 space-x-8 lg:ml-6 lg:justify-end"
			>
				<SearchBar />
				<DarkModeToggle bind:dark />
			</div>
		</div>
	</div>
</nav>
