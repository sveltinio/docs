<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { website } from '$config/website.js';
	import { theme } from '$lib/shared/stores';
	import type { MenuItem, ExternalLinkItem } from '$lib/schema';
	import userSettings from '$config/user_settings.js';
	import sveltinVersion from '$config/defaults.js';
	import menu from '$config/menu.js';
	import externalLinks from '$config/external_links.js';
	import GoogleFonts from '$components/GoogleFonts.svelte';
	import SEO from '$components/SEO.svelte';
	import GoogleAnalytics from '$components/GoogleAnalytics.svelte';
	import Footer from '$themes/dockerz/partials/Footer.svelte';
	import SidebarDesktop from '$themes/dockerz/partials/SidebarDesktop.svelte';
	import SidebarMobile from '$themes/dockerz/partials/SidebarMobile.svelte';
	import ScrollToTop from '$themes/dockerz/components/ScrollToTop.svelte';
	import Toolbar from '$themes/dockerz/partials/Toolbar.svelte';
	const googleAnalytics = userSettings.googleAnalytics.UA_ID;

	let dark: boolean;
	let navIsOpen = false;
	const menuData = menu as unknown as MenuItem[];
	const externalLinksData = externalLinks as unknown as ExternalLinkItem[];

	function handleEscape({ key }) {
		if (key === 'Escape') {
			navIsOpen = false;
		}
	}

	onMount(() => {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) &&
				window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			dark = true;
		} else {
			dark = false;
		}
	});
</script>

<svelte:window on:keyup={handleEscape} />

<svelte:head>
	<html lang={website.language} />
	<title>{website.name}</title>
	<meta name="description" content={website.description} />
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
	<link rel="canonical" href={website.baseURL} />
	<GoogleFonts fonts={userSettings.googleFonts} />
	{#if googleAnalytics != ''}
		<GoogleAnalytics UA_ID={googleAnalytics} />
	{/if}

	<script>
		if (!('theme' in localStorage)) {
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				document.documentElement.classList.add('dark');
				document.cookie = 'theme=dark;path=/;expires=Fri, 31 Dec 9999 23:59:59 GMT;';
				dark = true;
			} else {
				document.documentElement.classList.remove('dark');
				document.cookie = 'theme=light;path=/;expires=Fri, 31 Dec 9999 23:59:59 GMT;';
				dark = false;
			}
		} else {
			dark = false;
		}
	</script>
</svelte:head>

<SEO data={website} />

<div class:dark class="min-h-[640px] bg-skin-light dark:bg-skin-dark">
	<div>
		<SidebarDesktop data={menu} bind:dark />
		<div class="relative z-0 flex flex-1 overflow-hidden">
			<div class="relative z-0 flex-1 overflow-y-auto focus:outline-none lg:pl-72">
				<Toolbar bind:dark />
				<SidebarMobile data={menu} bind:dark bind:navIsOpen />
				<main class="flex-1 mx-auto">
					<slot />
					<Footer
						cliVersion={sveltinVersion}
						websiteData={website}
						{menuData}
						{externalLinksData}
					/>
				</main>
			</div>
		</div>
	</div>
	<!-- <ScrollToTop /> -->
</div>
