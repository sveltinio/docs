<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { website } from '$config/website.js';
	import { googleFonts } from '$config/externals.js';
	import { menu } from '$config/menu.js';
	import orderBy from 'lodash-es/orderBy.js';
	import { externalLinks } from '$config/external_links.js';
	import { JsonLdSiteNavigationElements, JsonLdWebSite } from '@sveltinio/seo';
	import { GoogleFonts, UmamiAnalytics } from '@sveltinio/services';
	import Toolbar from '$themes/dockerz/partials/Toolbar.svelte';
	import SidebarDesktop from '$themes/dockerz/partials/SidebarDesktop.svelte';
	import SidebarMobile from '$themes/dockerz/partials/SidebarMobile.svelte';
	import BottomPageLinks from '$themes/dockerz/partials/BottomPageLinks.svelte';
	import Footer from '$themes/dockerz/partials/Footer.svelte';
	import ScrollToTop from '$themes/dockerz/partials/ScrollToTop.svelte';

	let dark = false;
	let navIsOpen = false;

	const sortedMenu = orderBy(menu, 'weight');

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

<JsonLdWebSite websiteData={website} />
<JsonLdSiteNavigationElements websiteData={website} menuData={sortedMenu} />

<GoogleFonts fonts={googleFonts} />
<!--
<UmamiAnalytics
	websiteID="1467a0c5-0b8d-4687-97ee-3dc97eb8becc"
	srcURL="https://umami.sveltin.io/umami.js"
/>
-->
<svelte:head>
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

<div class:dark class="min-h-[640px] bg-skin-light dark:bg-skin-dark">
	<div>
		<SidebarDesktop bind:dark menuData={sortedMenu} externalLinksData={externalLinks} />
		<div class="relative z-0 flex flex-1 overflow-hidden">
			<div class="relative z-0 flex-1 overflow-y-auto focus:outline-none lg:pl-72">
				<Toolbar bind:dark />
				<SidebarMobile
					bind:dark
					bind:navIsOpen
					menuData={menu}
					externalLinksData={externalLinks}
				/>
				<main class="mx-auto flex-1">
					<slot />
					<BottomPageLinks
						websiteData={website}
						menuData={sortedMenu}
						externalLinksData={externalLinks}
					/>
					<Footer />
				</main>
			</div>
		</div>
	</div>
	<ScrollToTop />
</div>
