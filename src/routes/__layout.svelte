<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { website } from '$config/website.js';
	import { theme } from '$lib/shared/stores';
	import type { WebSite, MenuItem, ExternalLinkItem } from '$lib/interfaces';
	import externals from '$config/externals.js';
	import sveltinVersion from '$config/defaults.js';
	import menu from '$config/menu.js';
	import orderBy from 'lodash-es/orderBy.js';
	import externalLinks from '$config/external_links.js';
	import GoogleFonts from '$components/GoogleFonts.svelte';
	import SEO from '$components/SEO.svelte';
	import GoogleAnalytics from '$components/GoogleAnalytics.svelte';
	import Toolbar from '$themes/dockerz/partials/Toolbar.svelte';
	import SidebarDesktop from '$themes/dockerz/partials/SidebarDesktop.svelte';
	import SidebarMobile from '$themes/dockerz/partials/SidebarMobile.svelte';
	import BottomPageLinks from '$themes/dockerz/partials/BottomPageLinks.svelte';
	import Footer from '$themes/dockerz/partials/Footer.svelte';
	import ScrollToTop from '$themes/dockerz/partials/ScrollToTop.svelte';

	let dark = false;
	let navIsOpen = false;

	const websiteData = website as unknown as WebSite;
	const menuItems = orderBy(menu, 'weight');
	const menuData = menuItems as unknown as MenuItem[];
	const externalLinksData = externalLinks as unknown as ExternalLinkItem[];
	const googleAnalytics = externals.googleAnalytics.UA_ID;

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
	<SEO websiteData={website} {menuData} />
	<GoogleFonts fonts={externals.googleFonts} />
	<script>
		//console.log(localStorage);
		if (!('theme' in localStorage)) {
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				document.documentElement.classList.add('dark');
				//document.cookie = 'theme=dark;path=/;expires=Fri, 31 Dec 9999 23:59:59 GMT;';
				dark = true;
			} else {
				document.documentElement.classList.remove('dark');
				//document.cookie = 'theme=light;path=/;expires=Fri, 31 Dec 9999 23:59:59 GMT;';
				dark = false;
			}
		} else {
			dark = false;
		}
	</script>
</svelte:head>

{#if googleAnalytics != ''}
	<GoogleAnalytics trackingId={googleAnalytics} />
{/if}

<div class:dark class="min-h-[640px] bg-skin-light dark:bg-skin-dark">
	<div>
		<SidebarDesktop bind:dark {menuData} {externalLinksData} />
		<div class="relative z-0 flex flex-1 overflow-hidden">
			<div class="relative z-0 flex-1 overflow-y-auto focus:outline-none lg:pl-72">
				<Toolbar bind:dark />
				<SidebarMobile bind:dark bind:navIsOpen {menuData} {externalLinksData} />
				<main class="flex-1 mx-auto">
					<slot />
					<BottomPageLinks {websiteData} {menuData} {externalLinksData} />
					<Footer />
				</main>
			</div>
		</div>
	</div>
	<ScrollToTop />
</div>
