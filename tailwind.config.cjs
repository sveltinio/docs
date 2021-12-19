const config = {
	content: [
		'./src/components/*.{html,svelte,js,ts}',
		'./src/routes/*.{html,svelte,js,ts}',
		'./themes/**/*.{html,svelte,js,ts}',
		'./themes/**/*.{html,svelte,js,ts}'
	],
	theme: {
		extend: {
			textColor: {
				skin: {
					white: 'var(--pure-white)',

					base: 'var(--color-text-base)',
					'base-hover': 'var(--color-text-base-hover)',
					'base-dark': 'var(--color-text-base-dark)',
					'base-dark-hover': 'var(--color-text-base-dark-hover)',

					muted: 'var(--color-text-muted)',
					'muted-hover': 'var(--color-text-muted-hover)',
					'muted-dark': 'var(--color-text-muted-dark)',
					'muted-dark-hover': 'var(--color-text-muted-dark-hover)',

					accent: 'var(--color-text-accent)',
					'accent-hover': 'var(--color-text-accent-hover)',
					'accent-dark': 'var(--color-text-accent-dark)',
					'accent-dark-hover': 'var(--color-text-accent-dark-hover)',

					heading: 'var(--color-text-heading)',
					'heading-hover': 'var(--color-text-heading-hover)',
					'heading-dark': 'var(--color-text-heading-dark)',
					'heading-dark-hover': 'var(--color-text-heading-dark-hover)',

					body: 'var(--color-text-body)',
					'body-hover': 'var(--color-text-body-hover)',
					'body-dark': 'var(--color-text-body-dark)',
					'body-dark-hover': 'var(--color-text-body-dark-hover)',

					link: 'var(--color-text-link)',
					'link-hover': 'var(--color-text-link-hover)',
					'link-dark': 'var(--color-text-link-dark)',
					'link-dark-hover': 'var(--color-text-link-dark-hover)',

					input: 'var(--color-input-base)',
					'input-hover': 'var(--color-input-base-hover)',
					'input-muted': 'var(--color-input-muted)'
				}
			},
			borderColor: {
				skin: {
					base: 'var(--color-border-base)',
					'base-dark': 'var(--color-border-base-dark)',

					muted: 'var(--color-border-muted)',
					'muted-dark': 'var(--color-border-muted-dark)',

					accent: 'var(--color-border-accent)',
					'accent-dark': 'var(--color-border-accent-dark)'
				}
			},
			backgroundColor: {
				skin: {
					light: 'var(--pure-white)',
					dark: 'var(--dark)',
					'pure-dark': 'var(--pure-dark)',

					base: 'var(--color-fill-base)',
					'base-hover': 'var(--color-fill-base-hover)',
					'base-dark': 'var(--color-fill-base-dark)',
					'base-dark-hover': 'var(--color-fill-base-dark-hover)',

					muted: 'var(--color-fill-muted)',
					'muted-dark': 'var(--color-fill-muted-dark)',

					accent: 'var(--color-text-accent)',
					'accent-hover': 'var()',
					'accent-dark': 'var()',
					'accent-dark-hover': 'var()'
				}
			},
			boxShadow: {
				gitter:
					'rgba(136, 172, 243, 0.25) 0px 10px 30px, rgba(0, 0, 0, 0.03) 0px 1px 1px, rgba(0, 51, 167, 0.1) 0px 10px 20px;'
			},
			fontFamily: {
				mono: ['"IBM Plex Mono"', 'ui-monospace'], // Ensure fonts with spaces have " " surrounding it.
				sans: [
					'"IBM Plex Sans"',
					'system-ui',
					'-apple-system',
					'BlinkMacSystemFont',
					'"Segoe UI"',
					'Roboto',
					'"Helvetica Neue"',
					'Arial',
					'"Noto Sans"',
					'sans-serif',
					'"Apple Color Emoji"',
					'"Segoe UI Emoji"',
					'"Segoe UI Symbol"'
				] // Ensure fonts with spaces have " " surrounding it.
			},
			fontSize: {
				xs: '0.75rem',
				sm: '0.875rem',
				base: '1rem',
				lg: '1.125rem',
				xl: '1.25rem',
				'2xl': '1.5rem',
				'3xl': '1.875rem',
				'4xl': '2.25rem',
				'5xl': '3rem',
				'6xl': '4rem',
				'7xl': '5rem',
				'8xl': '6rem',
				'9xl': '7rem',
				'10xl': '8rem',
				'11xl': '9rem',
				'12xl': '10rem',
				'13xl': '11rem',
				'14xl': '12rem',
				'15xl': '13rem',
				'16xl': '14rem',
				'17xl': '15rem',
				'18xl': '16rem',
				'19xl': '17rem',
				'20xl': '18rem'
			},
			colors: {
				santa: '#a0a1b2',
				river: '#464a5d',
				oyster: '#5576f9'
			},
			typography: (theme) => ({
				wicked: {
					css: {
						'--tw-prose-body': theme('textColor.skin.body'),
						'--tw-prose-headings': theme('textColor.skin.heading'),
						'--tw-prose-lead': theme('textColor.skin.accent'),
						'--tw-prose-links': theme('textColor.skin.link'),
						'--tw-prose-bold': theme('textColor.skin.heading'),
						'--tw-prose-counters': theme('textColor.skin.body'),
						'--tw-prose-bullets': theme('textColor.skin.body'),
						'--tw-prose-hr': theme('textColor.skin.heading'),
						'--tw-prose-quotes': theme('textColor.skin.heading'),
						'--tw-prose-quote-borders': theme('textColor.skin.accent'),
						'--tw-prose-captions': theme('textColor.skin.body'),
						'--tw-prose-code': theme('textColor.skin.accent'),
						'--tw-prose-pre-code': theme('textColor.skin.body-hover'),
						'--tw-prose-pre-bg': theme('textColor.skin.heading'),
						'--tw-prose-th-borders': theme('textColor.skin.accent'),
						'--tw-prose-td-borders': theme('textColor.skin.accent'),
						'--tw-prose-invert-body': theme('textColor.skin.body-dark'),
						'--tw-prose-invert-headings': theme('textColor.skin.heading-dark'),
						'--tw-prose-invert-lead': theme('textColor.skin.accent-dark'),
						'--tw-prose-invert-links': theme('textColor.skin.link-dark'),
						'--tw-prose-invert-bold': theme('textColor.skin.heading-dark'),
						'--tw-prose-invert-counters': theme('textColor.skin.body-dark'),
						'--tw-prose-invert-bullets': theme('textColor.skin.body-dark'),
						'--tw-prose-invert-hr': theme('textColor.skin.heading-dark'),
						'--tw-prose-invert-quotes': theme('textColor.skin.heading-dark'),
						'--tw-prose-invert-quote-borders': theme('textColor.skin.accent-dark'),
						'--tw-prose-invert-captions': theme('textColor.skin.body-dark'),
						'--tw-prose-invert-code': theme('textColor.skin.accent-dark'),
						'--tw-prose-invert-pre-code': theme('textColor.skin.body-dark-hover'),
						'--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
						'--tw-prose-invert-th-borders': theme('textColor.skin.accent-dark'),
						'--tw-prose-invert-td-borders': theme('textColor.skin.accent-dark')
					}
				}
			})
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/aspect-ratio')
	]
};

module.exports = config;
