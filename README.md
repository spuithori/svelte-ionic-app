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
- Ion Icons implementation will not support md and ios specific icons etc
- Modal and Popover not working - there is a way, but it delays the content (modal) - and there is a warning on componentProps - so have to check how to get it to work with passing data and its properties. Alterantive - only using Inline modals and embedding the component in there
- Accordion - toggle-icon property won't work - because of the Ionic Icons implementation 


# Todo
- Breadcrumbs - add script code from example
- Accordion
- Slides
- Controller - Card modal
- Ion Back Button - testing if it works
- Work on outstanding items - Nav, Tab 
- Platform? - testing if works
- Gestures?Animations?
-- compare with Vue & React add-on functions (on top of core)
- Sourceviewer
- Splash
- index.html compare and prepare for PWA (PWA Vite)
- Remove capacitor for clipboard

# Icons issue - how to resolve?

Alternative 1 - use CDN
Icons - <script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"></script>

Alternative 2 - implement like Vue (or even with Vue)
https://github.com/ionic-team/ionic-framework/blob/main/packages/vue/src/components/IonIcon.ts

Alternative 3 - IonSvelte component