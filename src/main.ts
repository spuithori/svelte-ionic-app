// @ts-ignore
import { registerSW } from 'virtual:pwa-register'

const updateSW = registerSW({
  onNeedRefresh() {
    console.log('PWA App needs refresh - will do so in 5 secs');
    setTimeout(() => {
      updateSW()
    }, 5000);
  },
  onOfflineReady() { console.log('PWA Offline ready') },
  onRegisterError(error) { console.log('PWA error', error) },
  onRegistered(registration) { console.log('PWA registration', registration) }
})

console.log('UpdateSW', updateSW);

import App from './App.svelte'

import { initialiseIonicSvelte } from "$ionic/svelte";

initialiseIonicSvelte();

const app = new App({
  target: document.getElementById('app')
})

export default app


