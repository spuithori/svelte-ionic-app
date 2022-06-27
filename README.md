
<h1 align="center"> Ionic Svelte Demo </h1> <br>
<p align="center">
  <a href="https://gitpoint.co/">
    <img alt="GitPoint" title="GitPoint" src="https://github.com/Tommertom/svelte-ionic-app/raw/master/src/static/assets/img/great-success.png" width="150">
  </a>
</p>

<p align="center">
  A showcase app for all Ionic UI elements. Supercharged by Svelte and Vite
</p>

<p align="center">

<a href="https://ionicsvelte.firebaseapp.com" target="_blank"><img alt="Download as PWA" title="PWA power" src="https://github.com/Tommertom/svelte-ionic-app/raw/master/src/static/assets/img/pwa-download.png" width="140"></a>
</p>


[![All Contributors](https://img.shields.io/badge/all_contributors-6-orange.svg?style=flat-square)](./CONTRIBUTORS.md)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
</p>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Ionic Svelte UI demo](#ionic-svelte-ui-demo)
- [PWA Interface - easing the PWA work in your app](#pwa-interface---easing-the-pwa-work-in-your-app)
- [How I got started with this rebuild: the basic steps performed](#how-i-got-started-with-this-rebuild-the-basic-steps-performed)
- [Issues - work in progress](#issues---work-in-progress)
- [Todo](#todo)
- [Issues - need help](#issues---need-help)
- [Wishlist](#wishlist)
- [Acknowledgements](#acknowledgements)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


# Ionic Svelte UI demo
A showcase app for all Ionic UI elements - up to Ionic 6!!! Use this app to try-out the elements you like for your app, and then navigate directly to the API docs or the source code.

Published as web app: https://ionicsvelte.firebaseapp.com

*Open developer tools to see developer info in the console.log*

Design objectives
- Use all Ionic 6 UI elements
- Fast bundler using VITE
- Ease PWA configuration with good documentation - using zero-config Vite (https://vite-plugin-pwa.netlify.app/)
- Deployable as PWA
- File based router (using Roxy/Routify)
- aligned as much as possible to the Ionic documentation for other integrations (Vue mostly)

As far as I can see now, the current new version is getting there pretty close! 

Hint: try responsive design of the app and ionic UI magic by using various devices or the Chrome developer view: iOS, Android's material design and fullscreen desktop responsiveness guaranteed!

Secondly, it is a boilerplate to start developing an Ionic/Svelte/PWA supercharged app. Easy to remove the stuff specific to this app and continue working for your own great app!

Other versions available
* Ionic's blank starter - https://github.com/Tommertom/svelte-ionic-app/tree/1.BlankStarter
* Ionic's List starter - https://github.com/Tommertom/svelte-ionic-app/tree/2.ListStarter 
* Ionic's Sidemenu starter - https://github.com/Tommertom/svelte-ionic-app/tree/3.SidemenuStarter (has issue with router)

If you want to run it locally:

```bash
npx degit Tommertom/svelte-ionic-app svelte-ionic-app
cd svelte-ionic-app
npm i
npm run dev
```

REPLS available - https://github.com/Tommertom/svelte-ionic-app/blob/master/REPLS.md
These are Ionic 4 components only.

# PWA Interface - easing the PWA work in your app
To help you managing state of the service worker and the various events, a simple svelte store is provided for (`lib/pwa.ts`). This store wraps the various events of the service worker in a readable store and a number of derived stores so you can easily listen to various events.

The following derived stores are implemented:
- `needRefresh`:`boolean` telling you if there is an update available
- `updateObject`:`undefined|UpdateObject`. When UpdateObject is provided, you can call its `updateSWObject()` method to update the app
- `offlineReady`:`boolean` telling you all offline assets have been loaded
- `registerError`:`any` - the error message when the registration of the service worker failed
- `registration`:`undefined|ServiceWorkerRegistration` - the service worker registration object - when succesfull
- `beforeInstallPrompt` - `undefined|BeforeInstallPromptEvent` - which you can use to fire the `.prompt()` method to invoke the install prompt. N.B. this needs to happen right after an userevent (like button press)!

All these props are also available via the `pwaStatusStream` readable store.

# How I got started with this rebuild: the basic steps performed
In pseudo code - this is what I did

Scaffold the Svelte app
- npm create vite@latest (config - Svelte, TS)

Svelte router steps
- install roxy router run-all
- package.json scripts changed to router build scripts
- changes pages folder to routes folder (routify config in package.json) - I like it a bit more

Configuring Svelte workspace to my liking
- remove public folder
- created static folder as static dir
- config vite -> to include static dir for assets etc
- add aliases using $ sign (in vite.config as well as tsconfig) - https://dev.to/danawoodman/how-to-add-module-import-aliases-in-sveltekit-2ck

PWA steps:
Follow the documentation on vite-plugin-pwa.netlify.app!! VERRRRRY easy
Changed some stuff in index.html, including adding base-href and some meta stuff

Ionic related steps
- npm i @ionic/core  sass
- create "ionic/svelte" library (via alias) - so the ionic-integration almost looks like for real
- added initialise function for Ionic UI stuff - (initialiseIonicSvelte)
- main.ts -> refer to initialiseIonicSvelte
- App.svelte -> include ion-app 

Then......
As of this step, the hard work started. Getting all UI components working, aligning with the Ionic documentation... 

Much has been realised and still lots of work to be done

But, the highlights for now:
- This project has all Ionic related stuff in a lib structure - so easy to drop in your own project
- Ionic lifecycle hooks implemented - see Page.svelte and Note.svelte (and IonPage.svelte) - also in onMount/onDestroy style
- modal and popover controllers work via inline and programmatically - was quite a search to get this done!!


# Issues - work in progress
- Ion Icons implementation will not support md and ios specific icons etc (yet) - name prop does not function - also happening in Vue/React.Similar icon issues arise with other component that can digest custom icons (to check)
- A IonFooter in a Modal gives weird layout - not happening in Angular, so a thing related to this implementation
- Adding custom class to Modal/Popover does not work (using controller) - using inline is probably better

# Todo
- Ion Back Button - does not show nor work - rebuild using https://github.com/ionic-team/ionic-framework/blob/main/core/src/components/back-button/back-button.tsx
- Nav component - works nicely, but implementation might be dirty (leaking DOM elements?). ion-nav-link not implemented.
- Menu controller - getMenu needed to get menu, not menucontroller 

# Issues - need help
- TOP PRIORITY - IonTabs and IonPage have their own implementation only accessible as Svelte component, not web component. Need to figure out how to wrap them into a webcomponent, without loosing animation stuff. Webcomponent of ion-page gives known issue on transition (https://github.com/Auroratide/svelte-custom-element-transitions). So no webcomponent of ion-page available for now. IonPage does seem to work nicely though. Later I might try wrapping the ion-nav in other element and see if that makes the animation go?

- IonTabs needs to manually call the select method of ion-tabs to ensure the selectedTab prop is really acted upon. Issue known: https://github.com/ionic-team/ionic-framework/issues/20060. Gives a brief undesireable view on the wrong tab. Might need to look into the angular/react/vue way as these packages don't have this issue. Probably tabs is wired up in the router. 

- Sometimes occuring - TypeError - happening - TypeError: Cannot read properties of null (reading 'offsetHeight') (ion-content) - webcomponent issue? maybe HMR related? No need to figure out, if you ask me.

- Will this work on SvelteKit? I had some issues before and thought, let's skip it again. But if it works on sveltekit, why not use that one?

- Gestures: Need a timeout to get proper style value even though I am using onMount?? 

- Some styles are unused - related to md and ios options for webcomponents? Or need to be discarded.


# Wishlist
- svelte-add integration?
- Tailwind in separate branch?
- Bundle optimisation using router bundling?
- make it an npm package - already in a lib style - https://betterprogramming.pub/creating-a-package-for-svelte-f44fccbc886b, https://blog.logrocket.com/build-your-own-component-library-svelte/
- test ssr setup
- dark mode
- Ionic demos as branches


# Acknowledgements
https://github.com/gitpoint/git-point/blob/master/README.md
https://github.com/webmaxru/progressive-web-apps-logo