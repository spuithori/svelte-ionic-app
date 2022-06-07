# Ionic Svelte UI demo
A showcase app for all Ionic UI elements - up to Ionic 6!!! Use this app to try-out the elements you like for your app, and then navigate directly to the API docs or the source code.

Secondly, it is a boilerplate to start developing an Ionic/Svelte/PWA supercharged app. Easy to remove the stuff specific to this app and continue working for your own great app!

Design objectives
- Use all Ionic 6 UI elements
- Fast bundler using VITE
- Ease PWA configuration with good documentation - using zero-config Vite (https://vite-plugin-pwa.netlify.app/)
- Deployable as PWA
- File based router (using Roxy/Routify)

As far as I can see now, the current new version is getting there pretty closely. 

Nevertheless, there are known and unknown issues.

Published as web app: https://ionicsvelte.firebaseapp.com

Hint: try reactivity of the app by using various devices or the Chrome developer view: iOS, Android's material design and fullscreen desktop responsiveness guaranteed!

If you want to run it locally:

```bash
npx degit Tommertom/svelte-ionic-app svelte-ionic-app
cd svelte-ionic-app
npm i
npm run dev
```

REPLS available - https://github.com/Tommertom/svelte-ionic-app/blob/master/REPLS.md
These are Ionic 4 components only.

# How I got started with this rebuild: the basic steps performed
In pseudo code - this is what I did
- npm create vite@latest (config - Svelte, TS)
- npm i @ionic/core  sass
- install roxy router run-all
- package.json scripts changed
- changes pages folder to routes folder (routify config in package.json)
- remove public folder
- created static folder as static dir
- config vite -> to include static dir for assets etc
- added initialise function for Ionic UI stuff(initialiseIonicSvelte)
- main.ts -> refer to initialiseIonicSvelte
- App.svelte -> include ion-app 

As of this step, the hard work started getting all UI components working... and still work to be done

PWA steps (done in separate branch): follow the documentation in vite-plugin-pwa.netlify.app!!


# Issues (work in progress)
- Ion Icons implementation will not support md and ios specific icons etc 
- Modal and Popover not working - there is a way, but it delays the content (modal) - and there is a warning on componentProps - so have to check how to get it to work with passing data and its properties. Alterantive - only using Inline modals and embedding the component in there (Controller.svelte)
- Tab bar -> does not move to default selected (IonTab.svelte)
- Sometimes occuring - TypeError - happening - ypeError: Cannot read properties of null (reading 'offsetHeight') (ion-content)
- unused styles warning - what is happening?
- item sliding npt working (Item) - seems to work on ios??
- Need a timeout to get proper style value even though I am using onMount?? (Gesture)
- IonPage - are the lifecycle hooks well implemented? Can I make this a webcomponent?

# Todo
- Controller - Card modal
- Ion Back Button - testing if it works - https://ionicframework.com/docs/vue/utility-functions
- Research if ion-router and such need to be built
- Deal with missing Nav
- Datetime popover
- Page transitions
- make it an npm package or lib?
- add utilities such as shown in Angalur's integration (isRTL etc)