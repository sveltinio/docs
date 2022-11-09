import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const defaultValue = false;

export const theme = writable(defaultValue);
theme.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('isDark', value.toString());
	}
});
export const resetTheme = () => {
	theme.set(defaultValue);
};
