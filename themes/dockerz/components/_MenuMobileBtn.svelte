<script lang="ts">
	import { MenuIcon } from '@indaco/svelte-iconoir/icons/MenuIcon';
	export let navIsOpen: boolean;
	export let handleNavMenu;
</script>

<div
	class="sticky top-0 z-40 bg-gray-100 pt-1 pl-1  dark:bg-skin-muted-dark sm:pl-3 sm:pt-3 lg:hidden"
	class:hidden={navIsOpen}
>
	<button
		type="button"
		class="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md  text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-700 dark:text-gray-300 dark:hover:text-gray-50"
		on:click={handleNavMenu}
	>
		<span class="sr-only">Open sidebar</span>
		<MenuIcon class="h-6 w-6 cursor-pointer" />
	</button>
</div>
