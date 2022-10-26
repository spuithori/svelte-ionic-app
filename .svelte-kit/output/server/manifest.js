export const manifest = {
	appDir: "_app",
	assets: new Set(["android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","assets/img/great-success.png","assets/img/ionic/avatar-ben.png","assets/img/ionic/avatar-finn.png","assets/img/ionic/avatar-han.png","assets/img/ionic/avatar-leia.png","assets/img/ionic/avatar-luke.png","assets/img/ionic/avatar-poe.png","assets/img/ionic/avatar-rey.png","assets/img/ionic/avatar-yoda.png","assets/img/ionic/avatar.svg","assets/img/ionic/boniver.jpeg","assets/img/ionic/chancetherapper.jpeg","assets/img/ionic/childishgambino.jpeg","assets/img/ionic/ironwine.jpeg","assets/img/ionic/kimbra.jpeg","assets/img/ionic/pinkfloyd.jpeg","assets/img/ionic/porterrobinson.jpeg","assets/img/ionic/thebeatles.jpeg","assets/img/logo-512.png","assets/img/madison.jpg","assets/img/pwa-download.png","assets/img/safari-bar.png","assets/img/safari-share-options.png","assets/img/slides/slide-1.png","assets/img/slides/slide-2.png","assets/img/slides/slide-3.png","assets/img/slides/slide-4.png","assets/img/slides/svelte.png","assets/json/api-mappings.json","assets/json/repls.json","assets/src/components/Accordion/+page.svelte","assets/src/components/Actionsheet/+page.svelte","assets/src/components/Alert/+page.svelte","assets/src/components/Animations/+page.svelte","assets/src/components/Avatar/+page.svelte","assets/src/components/Badge/+page.svelte","assets/src/components/Breadcrumb/+page.svelte","assets/src/components/Button/+page.svelte","assets/src/components/Card/+page.svelte","assets/src/components/Checkbox/+page.svelte","assets/src/components/Chip/+page.svelte","assets/src/components/Controllers/+page.svelte","assets/src/components/Datetime/+page.svelte","assets/src/components/Fab/+page.svelte","assets/src/components/Gesture/+page.svelte","assets/src/components/Grid/+page.svelte","assets/src/components/Icon/+page.svelte","assets/src/components/Infinitescroll/+page.svelte","assets/src/components/Inputs/+page.svelte","assets/src/components/Item/+page.svelte","assets/src/components/List/+page.svelte","assets/src/components/Loading/+page.svelte","assets/src/components/lst.txt","assets/src/components/Modal/+page.svelte","assets/src/components/Nav/+page.svelte","assets/src/components/Note/+page.svelte","assets/src/components/Page/+page.svelte","assets/src/components/Picker/+page.svelte","assets/src/components/Platform/+page.svelte","assets/src/components/Popover/+page.svelte","assets/src/components/ProgressBar/+page.svelte","assets/src/components/Radio/+page.svelte","assets/src/components/Range/+page.svelte","assets/src/components/Refresher/+page.svelte","assets/src/components/Reorder/+page.svelte","assets/src/components/Searchbar/+page.svelte","assets/src/components/Segment/+page.svelte","assets/src/components/Select/+page.svelte","assets/src/components/Skeleton/+page.svelte","assets/src/components/Slides/+page.svelte","assets/src/components/Spinner/+page.svelte","assets/src/components/Splash/+page.svelte","assets/src/components/SvelteAnimate/+page.svelte","assets/src/components/SvelteSpring/+page.svelte","assets/src/components/SvelteTransition/+page.svelte","assets/src/components/SvelteTweened/+page.svelte","assets/src/components/tabs/+page.svelte","assets/src/components/tabs/[tab]/+page.svelte","assets/src/components/tabs/[tab]/+page.ts","assets/src/components/Text/+page.svelte","assets/src/components/Thumbnails/+page.svelte","assets/src/components/Toast/+page.svelte","assets/src/components/Toggle/+page.svelte","assets/src/components/Toolbar/+page.svelte","assets/src/ionic-docs/api/accordion-group.md","assets/src/ionic-docs/api/accordion.md","assets/src/ionic-docs/api/actionsheet.md","assets/src/ionic-docs/api/alert.md","assets/src/ionic-docs/api/app.md","assets/src/ionic-docs/api/avatar.md","assets/src/ionic-docs/api/back-button.md","assets/src/ionic-docs/api/backdrop.md","assets/src/ionic-docs/api/badge.md","assets/src/ionic-docs/api/breadcrumb.md","assets/src/ionic-docs/api/breadcrumbs.md","assets/src/ionic-docs/api/button.md","assets/src/ionic-docs/api/buttons.md","assets/src/ionic-docs/api/card-content.md","assets/src/ionic-docs/api/card-header.md","assets/src/ionic-docs/api/card-subtitle.md","assets/src/ionic-docs/api/card-title.md","assets/src/ionic-docs/api/card.md","assets/src/ionic-docs/api/checkbox.md","assets/src/ionic-docs/api/chip.md","assets/src/ionic-docs/api/col.md","assets/src/ionic-docs/api/content.md","assets/src/ionic-docs/api/datetime.md","assets/src/ionic-docs/api/fab-button.md","assets/src/ionic-docs/api/fab-list.md","assets/src/ionic-docs/api/fab.md","assets/src/ionic-docs/api/footer.md","assets/src/ionic-docs/api/grid.md","assets/src/ionic-docs/api/header.md","assets/src/ionic-docs/api/img.md","assets/src/ionic-docs/api/infinite-scroll-content.md","assets/src/ionic-docs/api/infinite-scroll.md","assets/src/ionic-docs/api/input.md","assets/src/ionic-docs/api/item-divider.md","assets/src/ionic-docs/api/item-group.md","assets/src/ionic-docs/api/item-option.md","assets/src/ionic-docs/api/item-options.md","assets/src/ionic-docs/api/item-sliding.md","assets/src/ionic-docs/api/item.md","assets/src/ionic-docs/api/label.md","assets/src/ionic-docs/api/list-header.md","assets/src/ionic-docs/api/list.md","assets/src/ionic-docs/api/loading.md","assets/src/ionic-docs/api/menu-button.md","assets/src/ionic-docs/api/menu-toggle.md","assets/src/ionic-docs/api/menu.md","assets/src/ionic-docs/api/modal.md","assets/src/ionic-docs/api/nav-link.md","assets/src/ionic-docs/api/nav.md","assets/src/ionic-docs/api/note.md","assets/src/ionic-docs/api/picker.md","assets/src/ionic-docs/api/popover.md","assets/src/ionic-docs/api/progress-bar.md","assets/src/ionic-docs/api/radio-group.md","assets/src/ionic-docs/api/radio.md","assets/src/ionic-docs/api/range.md","assets/src/ionic-docs/api/refresher-content.md","assets/src/ionic-docs/api/refresher.md","assets/src/ionic-docs/api/reorder-group.md","assets/src/ionic-docs/api/reorder.md","assets/src/ionic-docs/api/ripple-effect.md","assets/src/ionic-docs/api/route-redirect.md","assets/src/ionic-docs/api/route.md","assets/src/ionic-docs/api/router-link.md","assets/src/ionic-docs/api/router-outlet.md","assets/src/ionic-docs/api/router.md","assets/src/ionic-docs/api/row.md","assets/src/ionic-docs/api/searchbar.md","assets/src/ionic-docs/api/segment-button.md","assets/src/ionic-docs/api/segment.md","assets/src/ionic-docs/api/select-option.md","assets/src/ionic-docs/api/select.md","assets/src/ionic-docs/api/skeleton-text.md","assets/src/ionic-docs/api/slide.md","assets/src/ionic-docs/api/slides.md","assets/src/ionic-docs/api/spinner.md","assets/src/ionic-docs/api/split-pane.md","assets/src/ionic-docs/api/tab-bar.md","assets/src/ionic-docs/api/tab-button.md","assets/src/ionic-docs/api/tab.md","assets/src/ionic-docs/api/tabs.md","assets/src/ionic-docs/api/text.md","assets/src/ionic-docs/api/textarea.md","assets/src/ionic-docs/api/thumbnail.md","assets/src/ionic-docs/api/title.md","assets/src/ionic-docs/api/toast.md","assets/src/ionic-docs/api/toggle.md","assets/src/ionic-docs/api/toolbar.md","assets/src/ionic-docs/api/virtual-scroll.md","assets/svelte-ionic-logo.png","browserconfig.xml","favicon-16x16.png","favicon-32x32.png","favicon.ico","favicon.png","manifest.webmanifest","mstile-150x150.png","robots.txt","safari-pinned-tab.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".jpeg":"image/jpeg",".jpg":"image/jpeg",".json":"application/json",".txt":"text/plain",".ts":"video/mp2t",".md":"text/markdown",".xml":"application/xml",".ico":"image/vnd.microsoft.icon",".webmanifest":"application/manifest+json"},
	_: {
		entry: {"file":"_app/immutable/start-277e33f7.js","imports":["_app/immutable/start-277e33f7.js","_app/immutable/chunks/preload-helper-aa6bc0ce.js","_app/immutable/chunks/singletons-834fc638.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/12.js'),
			() => import('./nodes/13.js'),
			() => import('./nodes/14.js'),
			() => import('./nodes/15.js'),
			() => import('./nodes/16.js'),
			() => import('./nodes/17.js'),
			() => import('./nodes/18.js'),
			() => import('./nodes/19.js'),
			() => import('./nodes/20.js'),
			() => import('./nodes/21.js'),
			() => import('./nodes/22.js'),
			() => import('./nodes/23.js'),
			() => import('./nodes/24.js'),
			() => import('./nodes/25.js'),
			() => import('./nodes/26.js'),
			() => import('./nodes/27.js'),
			() => import('./nodes/28.js'),
			() => import('./nodes/29.js'),
			() => import('./nodes/30.js'),
			() => import('./nodes/31.js'),
			() => import('./nodes/32.js'),
			() => import('./nodes/33.js'),
			() => import('./nodes/34.js'),
			() => import('./nodes/35.js'),
			() => import('./nodes/36.js'),
			() => import('./nodes/37.js'),
			() => import('./nodes/38.js'),
			() => import('./nodes/39.js'),
			() => import('./nodes/40.js'),
			() => import('./nodes/41.js'),
			() => import('./nodes/42.js'),
			() => import('./nodes/43.js'),
			() => import('./nodes/44.js'),
			() => import('./nodes/45.js'),
			() => import('./nodes/46.js'),
			() => import('./nodes/47.js'),
			() => import('./nodes/48.js'),
			() => import('./nodes/49.js'),
			() => import('./nodes/50.js'),
			() => import('./nodes/51.js'),
			() => import('./nodes/52.js'),
			() => import('./nodes/53.js'),
			() => import('./nodes/54.js')
		],
		routes: [
			{
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "components/Accordion",
				pattern: /^\/components\/Accordion\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "components/Actionsheet",
				pattern: /^\/components\/Actionsheet\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "components/Alert",
				pattern: /^\/components\/Alert\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "components/Animations",
				pattern: /^\/components\/Animations\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "components/Avatar",
				pattern: /^\/components\/Avatar\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "components/Badge",
				pattern: /^\/components\/Badge\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "components/Breadcrumb",
				pattern: /^\/components\/Breadcrumb\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			},
			{
				id: "components/Button",
				pattern: /^\/components\/Button\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 10 },
				endpoint: null
			},
			{
				id: "components/Card",
				pattern: /^\/components\/Card\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 11 },
				endpoint: null
			},
			{
				id: "components/Checkbox",
				pattern: /^\/components\/Checkbox\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 12 },
				endpoint: null
			},
			{
				id: "components/Chip",
				pattern: /^\/components\/Chip\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 13 },
				endpoint: null
			},
			{
				id: "components/Controllers",
				pattern: /^\/components\/Controllers\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 14 },
				endpoint: null
			},
			{
				id: "components/Datetime",
				pattern: /^\/components\/Datetime\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 15 },
				endpoint: null
			},
			{
				id: "components/Fab",
				pattern: /^\/components\/Fab\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 16 },
				endpoint: null
			},
			{
				id: "components/Gesture",
				pattern: /^\/components\/Gesture\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 17 },
				endpoint: null
			},
			{
				id: "components/Grid",
				pattern: /^\/components\/Grid\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 18 },
				endpoint: null
			},
			{
				id: "components/Icon",
				pattern: /^\/components\/Icon\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 19 },
				endpoint: null
			},
			{
				id: "components/Infinitescroll",
				pattern: /^\/components\/Infinitescroll\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 20 },
				endpoint: null
			},
			{
				id: "components/Inputs",
				pattern: /^\/components\/Inputs\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 21 },
				endpoint: null
			},
			{
				id: "components/Item",
				pattern: /^\/components\/Item\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 22 },
				endpoint: null
			},
			{
				id: "components/List",
				pattern: /^\/components\/List\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 23 },
				endpoint: null
			},
			{
				id: "components/Loading",
				pattern: /^\/components\/Loading\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 24 },
				endpoint: null
			},
			{
				id: "components/Modal",
				pattern: /^\/components\/Modal\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 25 },
				endpoint: null
			},
			{
				id: "components/Nav",
				pattern: /^\/components\/Nav\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 26 },
				endpoint: null
			},
			{
				id: "components/Note",
				pattern: /^\/components\/Note\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 27 },
				endpoint: null
			},
			{
				id: "components/Page",
				pattern: /^\/components\/Page\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 28 },
				endpoint: null
			},
			{
				id: "components/Picker",
				pattern: /^\/components\/Picker\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 29 },
				endpoint: null
			},
			{
				id: "components/Platform",
				pattern: /^\/components\/Platform\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 30 },
				endpoint: null
			},
			{
				id: "components/Popover",
				pattern: /^\/components\/Popover\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 31 },
				endpoint: null
			},
			{
				id: "components/ProgressBar",
				pattern: /^\/components\/ProgressBar\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 32 },
				endpoint: null
			},
			{
				id: "components/Radio",
				pattern: /^\/components\/Radio\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 33 },
				endpoint: null
			},
			{
				id: "components/Range",
				pattern: /^\/components\/Range\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 34 },
				endpoint: null
			},
			{
				id: "components/Refresher",
				pattern: /^\/components\/Refresher\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 35 },
				endpoint: null
			},
			{
				id: "components/Reorder",
				pattern: /^\/components\/Reorder\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 36 },
				endpoint: null
			},
			{
				id: "components/Searchbar",
				pattern: /^\/components\/Searchbar\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 37 },
				endpoint: null
			},
			{
				id: "components/Segment",
				pattern: /^\/components\/Segment\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 38 },
				endpoint: null
			},
			{
				id: "components/Select",
				pattern: /^\/components\/Select\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 39 },
				endpoint: null
			},
			{
				id: "components/Skeleton",
				pattern: /^\/components\/Skeleton\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 40 },
				endpoint: null
			},
			{
				id: "components/Slides",
				pattern: /^\/components\/Slides\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 41 },
				endpoint: null
			},
			{
				id: "components/Spinner",
				pattern: /^\/components\/Spinner\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 42 },
				endpoint: null
			},
			{
				id: "components/Splash",
				pattern: /^\/components\/Splash\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 43 },
				endpoint: null
			},
			{
				id: "components/SvelteAnimate",
				pattern: /^\/components\/SvelteAnimate\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 44 },
				endpoint: null
			},
			{
				id: "components/SvelteSpring",
				pattern: /^\/components\/SvelteSpring\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 45 },
				endpoint: null
			},
			{
				id: "components/SvelteTransition",
				pattern: /^\/components\/SvelteTransition\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 46 },
				endpoint: null
			},
			{
				id: "components/SvelteTweened",
				pattern: /^\/components\/SvelteTweened\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 47 },
				endpoint: null
			},
			{
				id: "components/tabs",
				pattern: /^\/components\/tabs\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 48 },
				endpoint: null
			},
			{
				id: "components/Text",
				pattern: /^\/components\/Text\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 50 },
				endpoint: null
			},
			{
				id: "components/Thumbnails",
				pattern: /^\/components\/Thumbnails\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 51 },
				endpoint: null
			},
			{
				id: "components/Toast",
				pattern: /^\/components\/Toast\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 52 },
				endpoint: null
			},
			{
				id: "components/Toggle",
				pattern: /^\/components\/Toggle\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 53 },
				endpoint: null
			},
			{
				id: "components/Toolbar",
				pattern: /^\/components\/Toolbar\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 54 },
				endpoint: null
			},
			{
				id: "components/tabs/[tab]",
				pattern: /^\/components\/tabs\/([^/]+?)\/?$/,
				names: ["tab"],
				types: [null],
				page: { layouts: [0], errors: [1], leaf: 49 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
