// vite.config.ts
import { sveltekit } from "file:///C:/Data/src/svelte-ionic-app/node_modules/@sveltejs/kit/src/exports/vite/index.js";
import { VitePWA } from "file:///C:/Data/src/svelte-ionic-app/node_modules/vite-plugin-pwa/dist/index.mjs";

// pwa-configuration.ts
var pwaManifest = {
  name: "Ionic Svelte",
  short_name: "Ionic Svelte Demo",
  description: "Coolness in Vite Svelte and Ionic",
  theme_color: "#ffffff",
  icons: [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable any"
    }
  ]
};
var componentList = [
  "Accordion",
  "Actionsheet",
  "Alert",
  "Animations",
  "Avatar",
  "Badge",
  "Breadcrumb",
  "Button",
  "Card",
  "Checkbox",
  "Chip",
  "Controllers",
  "Datetime",
  "Fab",
  "Gesture",
  "Grid",
  "Icon",
  "Infinitescroll",
  "Inputs",
  "Item",
  "List",
  "Loading",
  "Modal",
  "Nav",
  "Note",
  "Page",
  "Picker",
  "Platform",
  "Popover",
  "ProgressBar",
  "Radio",
  "Range",
  "Refresher",
  "Reorder",
  "Searchbar",
  "Segment",
  "Select",
  "Skeleton",
  "Slides",
  "Spinner",
  "Splash",
  "SvelteAnimate",
  "SvelteSpring",
  "SvelteTransition",
  "SvelteTweened",
  "tabs",
  "Text",
  "Thumbnails",
  "Toast",
  "Toggle",
  "Toolbar"
].map((item) => {
  return `assets/src/components/${item}/*`;
});
var ionicSvelteDirectories = [
  "assets/json/*",
  "assets/img/*",
  "assets/img/slides/*",
  "assets/img/ionic/*",
  "assets/src/ionic-docs/api/*",
  ...componentList
];
var pwaConfiguration = {
  srcDir: "./build",
  outDir: "./build",
  // to ensure sw.js and workbox are in build - not according to docs, but works nevertheless? 
  includeAssets: ["favicon.svg", "favicon.ico", "robots.txt", "apple-touch-icon.png", "assets/*", ...ionicSvelteDirectories],
  base: "/",
  scope: "/",
  manifest: pwaManifest
};

// vite.config.ts
var config = {
  plugins: [
    VitePWA(pwaConfiguration),
    sveltekit()
  ]
};
var vite_config_default = config;
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicHdhLWNvbmZpZ3VyYXRpb24udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxEYXRhXFxcXHNyY1xcXFxzdmVsdGUtaW9uaWMtYXBwXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxEYXRhXFxcXHNyY1xcXFxzdmVsdGUtaW9uaWMtYXBwXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9EYXRhL3NyYy9zdmVsdGUtaW9uaWMtYXBwL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHR5cGUgeyBVc2VyQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcblxyXG5pbXBvcnQgeyBzdmVsdGVraXQgfSBmcm9tICdAc3ZlbHRlanMva2l0L3ZpdGUnO1xyXG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSAndml0ZS1wbHVnaW4tcHdhJztcclxuaW1wb3J0IHsgcHdhQ29uZmlndXJhdGlvbiB9IGZyb20gJy4vcHdhLWNvbmZpZ3VyYXRpb24uanMnO1xyXG5cclxuY29uc3QgY29uZmlnOiBVc2VyQ29uZmlnID0ge1xyXG5cdHBsdWdpbnM6IFtcclxuXHRcdFZpdGVQV0EocHdhQ29uZmlndXJhdGlvbiksXHJcblx0XHRzdmVsdGVraXQoKVxyXG5cdF1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxEYXRhXFxcXHNyY1xcXFxzdmVsdGUtaW9uaWMtYXBwXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxEYXRhXFxcXHNyY1xcXFxzdmVsdGUtaW9uaWMtYXBwXFxcXHB3YS1jb25maWd1cmF0aW9uLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9EYXRhL3NyYy9zdmVsdGUtaW9uaWMtYXBwL3B3YS1jb25maWd1cmF0aW9uLnRzXCI7XHJcbmNvbnN0IHB3YU1hbmlmZXN0ID0ge1xyXG4gICAgbmFtZTogJ0lvbmljIFN2ZWx0ZScsXHJcbiAgICBzaG9ydF9uYW1lOiAnSW9uaWMgU3ZlbHRlIERlbW8nLFxyXG4gICAgZGVzY3JpcHRpb246ICdDb29sbmVzcyBpbiBWaXRlIFN2ZWx0ZSBhbmQgSW9uaWMnLFxyXG4gICAgdGhlbWVfY29sb3I6ICcjZmZmZmZmJyxcclxuICAgIGljb25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcInNyY1wiOiBcIi9hbmRyb2lkLWNocm9tZS0xOTJ4MTkyLnBuZ1wiLFxyXG4gICAgICAgICAgICBcInNpemVzXCI6IFwiMTkyeDE5MlwiLFxyXG4gICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZS9wbmdcIixcclxuICAgICAgICAgICAgXCJwdXJwb3NlXCI6IFwibWFza2FibGUgYW55XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJzcmNcIjogXCIvYW5kcm9pZC1jaHJvbWUtNTEyeDUxMi5wbmdcIixcclxuICAgICAgICAgICAgXCJzaXplc1wiOiBcIjUxMng1MTJcIixcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICAgICAgICAgIFwicHVycG9zZVwiOiBcIm1hc2thYmxlIGFueVwiXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59XHJcblxyXG5jb25zdCBjb21wb25lbnRMaXN0ID0gW1xyXG4gICAgJ0FjY29yZGlvbicsXHJcbiAgICAnQWN0aW9uc2hlZXQnLFxyXG4gICAgJ0FsZXJ0JyxcclxuICAgICdBbmltYXRpb25zJyxcclxuICAgICdBdmF0YXInLFxyXG4gICAgJ0JhZGdlJyxcclxuICAgICdCcmVhZGNydW1iJyxcclxuICAgICdCdXR0b24nLFxyXG4gICAgJ0NhcmQnLFxyXG4gICAgJ0NoZWNrYm94JyxcclxuICAgICdDaGlwJyxcclxuICAgICdDb250cm9sbGVycycsXHJcbiAgICAnRGF0ZXRpbWUnLFxyXG4gICAgJ0ZhYicsXHJcbiAgICAnR2VzdHVyZScsXHJcbiAgICAnR3JpZCcsXHJcbiAgICAnSWNvbicsXHJcbiAgICAnSW5maW5pdGVzY3JvbGwnLFxyXG4gICAgJ0lucHV0cycsXHJcbiAgICAnSXRlbScsXHJcbiAgICAnTGlzdCcsXHJcbiAgICAnTG9hZGluZycsXHJcbiAgICAnTW9kYWwnLFxyXG4gICAgJ05hdicsXHJcbiAgICAnTm90ZScsXHJcbiAgICAnUGFnZScsXHJcbiAgICAnUGlja2VyJyxcclxuICAgICdQbGF0Zm9ybScsXHJcbiAgICAnUG9wb3ZlcicsXHJcbiAgICAnUHJvZ3Jlc3NCYXInLFxyXG4gICAgJ1JhZGlvJyxcclxuICAgICdSYW5nZScsXHJcbiAgICAnUmVmcmVzaGVyJyxcclxuICAgICdSZW9yZGVyJyxcclxuICAgICdTZWFyY2hiYXInLFxyXG4gICAgJ1NlZ21lbnQnLFxyXG4gICAgJ1NlbGVjdCcsXHJcbiAgICAnU2tlbGV0b24nLFxyXG4gICAgJ1NsaWRlcycsXHJcbiAgICAnU3Bpbm5lcicsXHJcbiAgICAnU3BsYXNoJyxcclxuICAgICdTdmVsdGVBbmltYXRlJyxcclxuICAgICdTdmVsdGVTcHJpbmcnLFxyXG4gICAgJ1N2ZWx0ZVRyYW5zaXRpb24nLFxyXG4gICAgJ1N2ZWx0ZVR3ZWVuZWQnLFxyXG4gICAgJ3RhYnMnLFxyXG4gICAgJ1RleHQnLFxyXG4gICAgJ1RodW1ibmFpbHMnLFxyXG4gICAgJ1RvYXN0JyxcclxuICAgICdUb2dnbGUnLFxyXG4gICAgJ1Rvb2xiYXInXHJcbl0ubWFwKGl0ZW0gPT4geyByZXR1cm4gYGFzc2V0cy9zcmMvY29tcG9uZW50cy8ke2l0ZW19LypgIH0pO1xyXG5cclxuY29uc3QgaW9uaWNTdmVsdGVEaXJlY3RvcmllcyA9IFtcclxuICAgICdhc3NldHMvanNvbi8qJywgJ2Fzc2V0cy9pbWcvKicsICdhc3NldHMvaW1nL3NsaWRlcy8qJyxcclxuICAgICdhc3NldHMvaW1nL2lvbmljLyonLCAnYXNzZXRzL3NyYy9pb25pYy1kb2NzL2FwaS8qJywgLi4uY29tcG9uZW50TGlzdF1cclxuXHJcbmNvbnN0IHB3YUNvbmZpZ3VyYXRpb24gPSB7XHJcbiAgICBzcmNEaXI6ICcuL2J1aWxkJyxcclxuICAgIG91dERpcjogJy4vYnVpbGQnLCAvLyB0byBlbnN1cmUgc3cuanMgYW5kIHdvcmtib3ggYXJlIGluIGJ1aWxkIC0gbm90IGFjY29yZGluZyB0byBkb2NzLCBidXQgd29ya3MgbmV2ZXJ0aGVsZXNzPyBcclxuICAgIGluY2x1ZGVBc3NldHM6IFsnZmF2aWNvbi5zdmcnLCAnZmF2aWNvbi5pY28nLCAncm9ib3RzLnR4dCcsICdhcHBsZS10b3VjaC1pY29uLnBuZycsICdhc3NldHMvKicsIC4uLmlvbmljU3ZlbHRlRGlyZWN0b3JpZXNdLFxyXG4gICAgYmFzZTogJy8nLFxyXG4gICAgc2NvcGU6ICcvJyxcclxuICAgIG1hbmlmZXN0OiBwd2FNYW5pZmVzdFxyXG59XHJcblxyXG5leHBvcnQgeyBwd2FDb25maWd1cmF0aW9uIH1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUVBLFNBQVMsaUJBQWlCO0FBQzFCLFNBQVMsZUFBZTs7O0FDRnhCLElBQU0sY0FBYztBQUFBLEVBQ2hCLE1BQU07QUFBQSxFQUNOLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQSxFQUNiLE9BQU87QUFBQSxJQUNIO0FBQUEsTUFDSSxPQUFPO0FBQUEsTUFDUCxTQUFTO0FBQUEsTUFDVCxRQUFRO0FBQUEsTUFDUixXQUFXO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUNJLE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULFFBQVE7QUFBQSxNQUNSLFdBQVc7QUFBQSxJQUNmO0FBQUEsRUFDSjtBQUNKO0FBRUEsSUFBTSxnQkFBZ0I7QUFBQSxFQUNsQjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQ0osRUFBRSxJQUFJLFVBQVE7QUFBRSxTQUFPLHlCQUF5QjtBQUFTLENBQUM7QUFFMUQsSUFBTSx5QkFBeUI7QUFBQSxFQUMzQjtBQUFBLEVBQWlCO0FBQUEsRUFBZ0I7QUFBQSxFQUNqQztBQUFBLEVBQXNCO0FBQUEsRUFBK0IsR0FBRztBQUFhO0FBRXpFLElBQU0sbUJBQW1CO0FBQUEsRUFDckIsUUFBUTtBQUFBLEVBQ1IsUUFBUTtBQUFBO0FBQUEsRUFDUixlQUFlLENBQUMsZUFBZSxlQUFlLGNBQWMsd0JBQXdCLFlBQVksR0FBRyxzQkFBc0I7QUFBQSxFQUN6SCxNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUCxVQUFVO0FBQ2Q7OztBRGpGQSxJQUFNLFNBQXFCO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1IsUUFBUSxnQkFBZ0I7QUFBQSxJQUN4QixVQUFVO0FBQUEsRUFDWDtBQUNEO0FBRUEsSUFBTyxzQkFBUTsiLAogICJuYW1lcyI6IFtdCn0K
