import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

const svelteWebcomponentConfig = {
  include: ['./src/lib/*.svelte'],
  compilerOptions: {
    customElement: true,
  }
}

const svelteNonWebcomponentConfig = {
  exclude: ['./src/lib/*.svelte']
}


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // svelte(),
    svelte(svelteWebcomponentConfig),
    svelte(svelteNonWebcomponentConfig)
  ],
  publicDir: "src/static"
})
