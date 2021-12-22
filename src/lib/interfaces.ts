export interface WebSite {
	name: string;
	baseURL: string;
	language: string;
	title: string;
	slogan: string;
	description: string;
	logo: string;
	logo_small: string;
	copyright: string;
	keywords: string;
	contactEmail: string;
	sitemap: Sitemap;
	socials: Socials;
	webmaster: WebMaster;
}

export interface Sitemap {
	changefreq: string;
	priority: number;
}

export interface Socials {
	linkedin: string;
	twitter: string;
	github: string;
	facebook: string;
	instagram: string;
	youtube: string;
}

export interface WebMaster {
	name: string;
	address: string;
	contactEmail: string;
}

export interface MenuItem {
	identifier: string;
	name: string;
	url: string;
	weight: number;
	children: Array<MenuItem>;
}

export interface ExternalLinkItem {
	identifier: string;
	name: string;
	url: string;
	weight: number;
}

export interface ContentItem {
	title: string;
	slug: string;
	author: string;
	headline: string;
	date: string;
	cover: string;
	draft: boolean;
	headings: Array<Record<string, unknown>>;
	html: string;
}

export interface Metadata {
	name: string;
	items: Array<MetadataItem>;
}

export interface MetadataItem {
	title: string;
	slug: string;
	headline: string;
}
