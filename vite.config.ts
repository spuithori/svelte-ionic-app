import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

const svelteConfig = {

}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(svelteConfig)],
  publicDir: "src/static"
})
