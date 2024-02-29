import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import glsl from 'vite-plugin-glsl';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/ACS-1320-Final-Event-Wave/',
	plugins: [react(), glsl()],
	define: {
		'process.env': {},
	},
});
