import { fileURLToPath, URL } from 'node:url'
import ViteImagemin from 'vite-plugin-imagemin'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		ViteImagemin({
			gifsicle: { optimizationLevel: 7, interlaced: false },
			optipng: { optimizationLevel: 7 },
			mozjpeg: { quality: 75 },
			pngquant: { quality: [0.75, 0.9], speed: 4 },
			svgo: {
				plugins: [
					{
						name: 'removeViewBox',
						active: false,
					},
					{
						name: 'addAttributesToSVGElement',
						params: {
							attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
						},
					},
				],
			},
			webp: { quality: 75 },
		}),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
})
