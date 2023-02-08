export interface ExternalLinkItem {
	identifier: string;
	name: string;
	url: string;
	weight: number;
}

declare global {
	interface Window {
		dataLayer: object[];
	}
}
