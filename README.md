# Ionic Svelte UI demo
A showcase app for all Ionic UI elements - up to Ionic 6!!! Use this app to try-out the elements you like for your app, and then navigate directly to the API docs or the source code.

Secondly, it is a boilerplate to start developing an Ionic/Svelte/PWA supercharged app. Easy to remove the stuff specific to this app and continue working for your own great app!

Published as web app: https://ionicsvelte.firebaseapp.com

*Open developer tools to see developer info in the console.log*

Design objectives
- Use all Ionic 6 UI elements
- Fast bundler using VITE
- Ease PWA configuration with good documentation - using zero-config Vite (https://vite-plugin-pwa.netlify.app/)
- Deployable as PWA
- File based router (using Roxy/Routify)
- aligned as much as possible to the Ionic documentation for other integrations (Vue mostly)

As far as I can see now, the current new version is getting there pretty closely. 

Nevertheless, there are known and unknown issues.

Published as web app: https://ionicsvelte.firebaseapp.com

Hint: try responsive design of the app and ionic UI magic by using various devices or the Chrome developer view: iOS, Android's material design and fullscreen desktop responsiveness guaranteed!

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

Ionic related steps
- npm i @ionic/core  sass
- create "ionic/svelte" library (via alias) - so the ionic-integration almost looks like for real
- added initialise function for Ionic UI stuff - (initialiseIonicSvelte)
- main.ts -> refer to initialiseIonicSvelte
- App.svelte -> include ion-app 

As of this step, the hard work started. Getting all UI components working... 

Much realised and still work to be done

But, the highlights for now:
- Ion page events - as prop but also on-function (like onMount) !!!
- Lib structure of all Ionic related stuff - so easy to drop in your own project

# Issues - work in progress
- Ion Icons implementation will not support md and ios specific icons etc (yet) - name prop does not function - also happening in Vue/React
- Modal and Popover not working via Controller - there is a way, but it delays the content (modal) - and there is a warning on componentProps - so have to check how to get it to work with passing data and its properties. Inline modals and embedding the component in there is working nicely (see Components.svelte)
- Tab bar -> does not move to default selected at start (IonTab.svelte)
- unused styles warning - what is happening?
- item sliding npt working (Item) - seems to work on ios?? But not on browser (chrome w10)
- Gestures: Need a timeout to get proper style value even though I am using onMount?? 
- Modal is not working (via controller - dismiss handler fails)

# Todo
- Controller - implement Card modal
- Ion Back Button - testing if it works - https://ionicframework.com/docs/vue/utility-functions
- Deal with missing Nav
- Datetime popover
- make it an npm package - already in a lib style
- add utilities such as shown in Angalur's integration (isRTL etc)

# Issues - need help
- Webcomponent of ion-page gives known issue on transition (https://github.com/Auroratide/svelte-custom-element-transitions). So no webcomponent of ion-page available for now. IonPage does seem to work nicely though.

- Sometimes occuring - TypeError - happening - ypeError: Cannot read properties of null (reading 'offsetHeight') (ion-content) - webcomponent issue? maybe HMR related?