<script lang="ts">
	import '../app.css';
	import { website } from '$config/website.js';
	import userSettings from '$config/user_settings.js';
	import sveltinVersion from '$config/defaults.js';
	import menu from '$config/menu.js';
	import GoogleFonts from '$components/GoogleFonts.svelte';
	import SEO from '$components/SEO.svelte';
	import GoogleAnalytics from '$components/GoogleAnalytics.svelte';
	import Footer from '$themes/dockerz/partials/Footer.svelte';
	import SidebarDesktop from '$themes/dockerz/partials/SidebarDesktop.svelte';
	import SidebarMobile from '$themes/dockerz/partials/SidebarMobile.svelte';
	import ScrollToTop from '$themes/dockerz/components/ScrollToTop.svelte';
	import SearchBar from '$themes/dockerz/components/SearchBar.svelte';
	import PrevNext from '$themes/dockerz/components/PrevNext.svelte';
	const googleAnalytics = userSettings.googleAnalytics.UA_ID;
</script>

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
</svelte:head>
<SEO data={website} />
<div class="min-h-[640px] bg-white dark:bg-tuna">
	<div>
		<SidebarDesktop />
		<div class="relative z-0 flex flex-1 overflow-hidden">
			<div class="relative z-0 flex-1 overflow-y-auto focus:outline-none lg:pl-72">
				<SearchBar />
				<SidebarMobile />
				<main class="flex-1 mx-auto">
					<slot />
					<PrevNext />
					<Footer cliVersion={sveltinVersion} />
				</main>
			</div>
		</div>
	</div>
	<ScrollToTop />
</div>
