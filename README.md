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

As far as I can see now, the current new version is getting there pretty close! 

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

Then......
As of this step, the hard work started. Getting all UI components working, aligning with the Ionic documentation... 

Much has been realised and still lots of work to be done

But, the highlights for now:
- This project has all Ionic related stuff in a lib structure - so easy to drop in your own project
- Ionic lifecycle hooks implemented - see Page.svelte and Note.svelte (and IonPage.svelte) - also in onMount/onDestroy style
- modal and popover controllers work via inline and programmatically - was quite a search to get this done!!

# Issues - work in progress
- Ion Icons implementation will not support md and ios specific icons etc (yet) - name prop does not function - also happening in Vue/React
- Tab bar -> does not move to default selected at start (IonTab.svelte)
- unused styles warning - what is happening?
- item sliding npt working (Item) - seems to work on ios?? But not on browser (chrome w10)
- Gestures: Need a timeout to get proper style value even though I am using onMount?? 
- SSR build will fail on Platform.svelte due to window object not present (use by ionic/core) - can be avoided

# Todo
- Ion Back Button - testing if it works - https://ionicframework.com/docs/vue/utility-functions
- Deal with missing Nav
- Datetime popover
- make it an npm package - already in a lib style
- add utilities such as shown in Angalur's integration (isRTL etc)
- making npm package of it
- svelte-add integration?
- typescript improvements here and there?

# Issues - need help
- Webcomponent of ion-page gives known issue on transition (https://github.com/Auroratide/svelte-custom-element-transitions). So no webcomponent of ion-page available for now. IonPage does seem to work nicely though.

- Sometimes occuring - TypeError - happening - ypeError: Cannot read properties of null (reading 'offsetHeight') (ion-content) - webcomponent issue? maybe HMR related?

- Will this work on SvelteKit? I had some issues before and thought, let's skip it again. But if it works on sveltekit, why not use that one?