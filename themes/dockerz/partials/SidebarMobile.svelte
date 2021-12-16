<script lang="ts">
	import ModernImage from '$components/_ModernImage.svelte';
	import { website } from '$config/website';
	import CancelIcon from '@indaco/svelte-iconoir/icons/CancelIcon.svelte';
	import MenuMobileBtn from '../components/_MenuMobileBtn.svelte';
	import SidebarLinks from '../components/_SidebarLinks.svelte';

	let navIsOpen = false;

	function handleNavMenu(): void {
		navIsOpen = !navIsOpen;
	}
</script>

<MenuMobileBtn {navIsOpen} {handleNavMenu} />

<div class="fixed inset-0 z-40 flex lg:hidden" aria-modal="true">
	<div
		class="fixed inset-0 bg-gray-600 bg-opacity-75"
		class:hidden={!navIsOpen}
		aria-hidden="true"
	/>

	<div
		class="relative flex flex-col flex-1 w-full max-w-xs bg-skin-light dark:bg-skin-muted-dark"
		class:hidden={!navIsOpen}
	>
		<div class="absolute top-0 right-0 pt-2 -mr-12" class:hidden={!navIsOpen}>
			<button
				type="button"
				class="flex items-center justify-center w-10 h-10 ml-1 rounded-full  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
				on:click={handleNavMenu}
			>
				<span class="sr-only">Close sidebar</span>
				<CancelIcon class="w-6 h-6 text-skin-white" />
			</button>
		</div>

		<div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
			<div
				class="flex items-center flex-shrink-0 px-4 text-skin-heading dark:text-skin-heading-dark-hover"
			>
				<a href="/"
					><span class="inline-flex items-center font-bold tracking-tight">
						<ModernImage
							pathToFile={website.logo_small}
							altText="{website.title} logo small"
							webp
							avif={false}
							class="w-5 h-auto lazyload"
							width="20px"
							height="auto"
						/>

						<span class="ml-4 text-skin-heading lg:text-2xl">Sveltin</span>
					</span>
				</a>
			</div>
			<nav class="px-2 mt-5 space-y-1">
				<SidebarLinks />
			</nav>
		</div>
		<div
			class="flex flex-shrink-0 p-4 pl-12 border-t  border-skin-base-dark dark:border-skin-base-dark"
		>
			<!------ CTA buttons goes here-->
		</div>
	</div>

	<div class="flex-shrink-0 w-14">
		<!-- Force sidebar to shrink to fit close icon -->
	</div>
</div>
