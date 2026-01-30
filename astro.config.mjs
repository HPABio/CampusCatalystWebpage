// @ts-check

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	integrations: [react()],
	server: {
		host: true,
	},
	vite: {
		plugins: [tailwindcss()],
		server: {
			watch: {
				usePolling: true,
			},
		},
	},
});
