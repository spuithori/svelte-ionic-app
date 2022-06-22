import App from './App.svelte'
import { pwaStatusStream } from '$lib/pwa';
import { setupIonicSvelte } from '$ionic/svelte';

pwaStatusStream.subscribe(x => { console.log('PWA status', x) })

setupIonicSvelte();

// if the page was prerendered, we want to remove the prerendered html
document.querySelector('[data-routify]')?.remove()
const app = new App({
  target: document.getElementById('app')
})

export default app


