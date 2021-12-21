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
