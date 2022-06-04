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


# Issues
- Ripple Effect not working
- Ion Icons implementation will not support md and ios specific icons etc
- Reorder not working
- appSetfocus not a focus (Ion Select backdrop click)
- Slides not working

# Todo
- Work on outstanding items - Nav, Tab 
- side-pane
- menu
- Backbutton?
- Platform?
- Gestures?Animations?
- compare with all UI components on Ionic site
- Sourceviewer
- Splash
- index.html compare and prepare for PWA

# Icons issue - how to resolve?

Alternative 1 - use CDN
Icons - <script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"></script>

Alternative 2 - implement like Vue (or even with Vue)
https://github.com/ionic-team/ionic-framework/blob/main/packages/vue/src/components/IonIcon.ts

Alternative 3 - IonSvelte component