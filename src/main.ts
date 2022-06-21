import App from './App.svelte'
// @ts-ignore
import { registerSW } from 'virtual:pwa-register'
import { pwaStatusStream } from '$lib/pwa';
import { setupIonicSvelte } from '$ionic/svelte';


/*
const updateSW = registerSW({
  onNeedRefresh() {
    console.log('PWA App needs refresh - will do so in 5 secs');
    setTimeout(() => {
      updateSW();
    }, 5000);
  },
  onOfflineReady() { console.log('PWA Offline ready') },
  onRegisterError(error) { console.log('PWA error', error) },
  onRegistered(registration) { console.log('PWA registration', registration) }
})
*/
pwaStatusStream.subscribe(x => { console.log('PWA status', x) })

setupIonicSvelte();

// if the page was prerendered, we want to remove the prerendered html
document.querySelector('[data-routify]')?.remove()
const app = new App({
  target: document.getElementById('app')
})

export default app


