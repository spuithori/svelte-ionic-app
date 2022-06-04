
import App from './App.svelte'

import { initialiseIonicSvelte } from "./services/IonicSvelte";

initialiseIonicSvelte();

const app = new App({
  target: document.getElementById('app')
})

export default app


