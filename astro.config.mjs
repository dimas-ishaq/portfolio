// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
// ponytail: set `site` to your real domain before deploy — canonical/og:url
// are omitted entirely until then, rather than shipping a wrong URL.
export default defineConfig({
	output: 'static',
	vite: {
		plugins: [tailwindcss()],
	},
});
