<script context="module">
	import { website } from '$config/website.js';
	import userSettings from '$config/user_settings.js';
	import WebPage from '$components/seo/jsonld/WebPage.svelte';
	export const prerender = true;
</script>

<svelte:head>
	<title>About | {website.title}</title>
	<meta name="description" content="" />
</svelte:head>

<!-- JSON-LD WebPage-->
<WebPage name="about" description="" publisher={website.title} baseURL={website.baseURL} />

<!-- Page markup-->
<section class="hero">
	<div class="content">
		<img class="logo" src="sveltin_logo.png" alt="sveltin logo" />
		<h1>This is the About page</h1>
	</div>
</section>
