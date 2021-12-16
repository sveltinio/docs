<script>
	import ModernImage from '$components/_ModernImage.svelte';
	import { website } from '$config/website';

	import SidebarLinks from '../components/_SidebarLinks.svelte';
</script>

<div
	class="z-50 hidden bg-skin-muted lg:flex md:w-72 md:flex-col md:fixed md:inset-y-0 dark:bg-skin-base-dark"
>
	<div class="flex flex-col flex-1 min-h-0 border-r border-skin-base dark:border-skin-muted-dark">
		<div class="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto lg:pl-6">
			<div
				class="flex items-center px-4 shrink-0 text-skin-heading dark:text-skin-heading-dark-hover"
			>
				<a href="./index.html"
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
					</span></a
				>
			</div>
			<nav class="flex-1 mt-12">
				<SidebarLinks />
			</nav>
		</div>
	</div>
</div>
