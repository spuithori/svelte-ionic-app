# Svelte + TS + Vite + Ionic 6
Implementing Ionic 6 in Svelte Vite!

# Steps performed
- npm create vite@latest (config - Svelte, TS)
- npm i @ionic/core  sass
- install roxy router run-all
- package.json scripts changed
- package.json configured routify routes directory
- remove public folder
- created static
- config vite -> to include static dir for assets etc
- added initialise function (initialiseIonicSvelte)
- main.ts -> refer to initialiseIonicSvelte
- App.svelte -> include ion-app 

Status - currently working on initialiseIonicSvelte - see issues & todo

Some things learned
- Vue implementation resembles most what needed in Svelte
- 

# Issues
- Ion Icons implementation will not support md and ios specific icons etc 
- Modal and Popover not working - there is a way, but it delays the content (modal) - and there is a warning on componentProps - so have to check how to get it to work with passing data and its properties. Alterantive - only using Inline modals and embedding the component in there (Controller.svelte)
- Tab bar -> does not move to default selected (IonTab.svelte)
- Sometimes occuring - TypeError - happening - ypeError: Cannot read properties of null (reading 'offsetHeight') (ion-content)
- unused styles warning - what is happening?
- item sliding npt working (Item)
- Need a timeout to get proper style value even though I am using onMount?? (Gesture)


# Todo
- Controller - Card modal
- Ion Back Button - testing if it works - https://ionicframework.com/docs/vue/utility-functions
- Work on outstanding items - Nav
-- compare with Vue & React add-on functions (on top of core)
- Sourceviewer
- Splash
- index.html compare and prepare for PWA (PWA Vite)
- Copy/paste (ionicons testing)
- Unresolved routes to /
- Home screen
- Research if ion-router and such need to be built
- Maybe add some platform goodies from Angular's implementation
- page lifecycles

# Icons issue - how to resolve?

Alternative 1 - use CDN
Icons - <script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"></script>

Alternative 2 - implement like Vue (or even with Vue)
https://github.com/ionic-team/ionic-framework/blob/main/packages/vue/src/components/IonIcon.ts

Alternative 3 - IonSvelte component