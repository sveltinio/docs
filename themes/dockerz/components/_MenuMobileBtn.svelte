<script lang="ts">
	import MenuIcon from '@indaco/svelte-iconoir/icons/MenuIcon.svelte';
	export let navIsOpen: boolean;
	export let handleNavMenu: any;
</script>

<div
	class="sticky top-0 z-40 pt-1 pl-1 bg-gray-100  dark:bg-skin-muted-dark lg:hidden sm:pl-3 sm:pt-3"
	class:hidden={navIsOpen}
>
	<button
		type="button"
		class="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md  text-gray-300 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-700"
		on:click={handleNavMenu}
	>
		<span class="sr-only">Open sidebar</span>
		<MenuIcon class="w-6 h-6 cursor-pointer" />
	</button>
</div>
