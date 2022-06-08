
/**
 * @roxi/routify 2.18.7
 * File generated Wed Jun 08 2022 06:45:04 GMT+0200 (Central European Summer Time)
 */

export const __version = "2.18.7"
export const __timestamp = "2022-06-08T04:45:04.264Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "root": true,
  "children": [
    {
      "isFallback": true,
      "path": "/_fallback",
      "component": () => import('../src/routes/_fallback.svelte').then(m => m.default)
    },
    {
      "isDir": true,
      "ext": "",
      "children": [
        {
          "isPage": true,
          "path": "/components/Accordion",
          "id": "_components_Accordion",
          "component": () => import('../src/routes/components/Accordion.svelte').then(m => m.default)
        },
        {
          "isPage": true,
          "path": "/components/Animations",
          "id": "_components_Animations",
          "component": () => import('../src/routes/components/Animations.svelte').then(m => m.default)
        },
        {
          "isPage": true,
          "path": "/components/Avatars",
          "id": "_components_Avatars",
          "component": () => import('../src/routes/components/Avatars.svelte').then(m => m.default)
        },
        {
          "isPage": true,
          "path": "/components/Badge",
          "id": "_components_Badge",
          "component": () => import('../src/routes/components/Badge.svelte').then(m => m.default)
        },
        {
          "isPage": true,
          "path": "/components/Breadcrumb",
          "id": "_components_Breadcrumb",
          "component": () => import('../src/routes/components/Breadcrumb.svelte').then(m => m.default)
        },
        {
          "isPage": true,
          "path": "/components/Button",
          "id": "_components_Button",
          "component": () => import('../src/routes/components/Button.svelte').then(m => m.default)
        },
        {
          "isPage": true,
          "path": "/components/Card",
          "id": "_components_Card",
          "component": () => import('../src/routes/components/Card.svelte').then(m => m.default)
        },
        {
          "isPage": true,
          "path": "/components/Checkbox",
          "id": "_components_Checkbox",
          "component": () => import('../src/routes/components/Checkbox.svelte').then(m => m.default)
        },
        {
          "isPage": true,
          "path": "/components/Chip",
          "id": "_components_Chip",
          "component": () => import('../src/routes/components/Chip.svelte').then(m => m.default)
        },
        {
          "isPage": true,
          "path": "/components/Controllers",
          "id": "_components_Controllers",
          "component": () => import('../src/routes/components/Controllers.svelte').then(m => m.default)
        },
        {
          "isPage": true,
          "path": "/components/Datetime",
          "id": "_components_Datetime",
          "component": () => import('../src/routes/components/Datetime.svelte').then(m => m.default)
        },
        {
          "isPage": true,
          "path": "/components/Fab",
          "id": "_components_Fab",
          "component": () => import('../src/routes/components/Fab.svelte').then(m => m.default)
        },
        {
          "isPage": true,
          "path": "/components/Gesture",
          "id": "_components_Gesture",
          "component": () => import('../src/routes/components/Gesture.svelte').then(m => m.default)
        },
        {
          "isPage": true,
          "path": "/components/Grid",
          "id": "_components_Grid",
          "component": () => import('../src/routes/components/Grid.svelte').then(m => m.default)
        },
        {
          "isPage": true,
          "path": "/components/Icon",
          "id": "_components_Icon",
          "component": () => import('../src/routes/components/Icon.svelte').then(m => m.default)
        },
        {
          "isPage": true,
          "path": "/components/Infinitescroll",
          "id": "_components_Infinitescroll",
          "component": () => import('../src/routes/components/Infinitescroll.svelte').then(m => m.default)
        },
        {
          "isPage": true,
          "path": "/components/Inputs",
          "id": "_components_Inputs",
          "component": () => import('../src/routes/components/Inputs.svelte').then(m => m.default)
        },
        {
          "isPage": true,
          "path": "/components/Item",
          "id": "_components_Item",
          "component": () => import('../src/routes/components/Item.svelte').then(m => m.default)
        },
        {
          "isPage": true,
          "path": "/components/List",
          "id": "_components_List",
          "component": () => import('../src/routes/components/List.svelte').then(m => m.default)
        },
        {
          "isPage": true,
          "path": "/components/Note",
          "id": "_components_Note",
          "component": () => import('../src/routes/components/Note.svelte').then(m => m.default)
        },
        {
          "isPage": true,
          "path": "/components/Page",
          "id": "_components_Page",
          "component": () => import('../src/routes/components/Page.svelte').then(m => m.default)
        },
        {
          "isPage": true,
          "path": "/components/Platform",
          "id": "_components_Platform",
          "component": () => import('../src/routes/components/Platform.svelte').then(m => m.default)
        },
        {
          "isPage": true,
          "path": "/components/ProgressBar",
          "id": "_components_ProgressBar",
          "component": () => import('../src/routes/components/ProgressBar.svelte').then(m => m.default)
        },
        {
          "isPage": true,
          "path": "/components/Radio",
          "id": "_components_Radio",
          "component": () => import('../src/routes/components/Radio.svelte').then(m => m.default)
        },
        {
          "isPage": true,
          "path": "/components/Range",
          "id": "_components_Range",
          "component": () => import('../src/routes/components/Range.svelte').then(m => m.default)
        },
        {
          "isPage": true,
          "path": "/components/Refresher",
          "id": "_components_Refresher",
          "component": () => import('../src/routes/components/Refresher.svelte').then(m => m.default)
        },
        {
          "isPage": true,
          "path": "/components/Reorder",
          "id": "_components_Reorder",
          "component": () => import('../src/routes/components/Reorder.svelte').then(m => m.default)
        },
        {
          "isPage": true,
          "path": "/components/Searchbar",
          "id": "_components_Searchbar",
          "component": () => import('../src/routes/components/Searchbar.svelte').then(m => m.default)
        },
        {
          "isPage": true,
          "path": "/components/Segment",
          "id": "_components_Segment",
          "component": () => import('../src/routes/components/Segment.svelte').then(m => m.default)
        },
        {
          "isPage": true,
          "path": "/components/Select",
          "id": "_components_Select",
          "component": () => import('../src/routes/components/Select.svelte').then(m => m.default)
        },
        {
          "isPage": true,
          "path": "/components/Skeleton",
          "id": "_components_Skeleton",
          "component": () => import('../src/routes/components/Skeleton.svelte').then(m => m.default)
        },
        {
          "isPage": true,
          "path": "/components/Slides",
          "id": "_components_Slides",
          "component": () => import('../src/routes/components/Slides.svelte').then(m => m.default)
        },
        {
          "isPage": true,
          "path": "/components/Spinner",
          "id": "_components_Spinner",
          "component": () => import('../src/routes/components/Spinner.svelte').then(m => m.default)
        },
        {
          "isPage": true,
          "path": "/components/Splash",
          "id": "_components_Splash",
          "component": () => import('../src/routes/components/Splash.svelte').then(m => m.default)
        },
        {
          "isDir": true,
          "ext": "",
          "children": [
            {
              "isPage": true,
              "path": "/components/tabs/:tab",
              "id": "_components_tabs__tab",
              "component": () => import('../src/routes/components/tabs/[tab].svelte').then(m => m.default)
            }
          ],
          "path": "/components/tabs"
        },
        {
          "isPage": true,
          "path": "/components/Text",
          "id": "_components_Text",
          "component": () => import('../src/routes/components/Text.svelte').then(m => m.default)
        },
        {
          "isPage": true,
          "path": "/components/Thumbnails",
          "id": "_components_Thumbnails",
          "component": () => import('../src/routes/components/Thumbnails.svelte').then(m => m.default)
        },
        {
          "isPage": true,
          "path": "/components/Toggle",
          "id": "_components_Toggle",
          "component": () => import('../src/routes/components/Toggle.svelte').then(m => m.default)
        },
        {
          "isPage": true,
          "path": "/components/Toolbar",
          "id": "_components_Toolbar",
          "component": () => import('../src/routes/components/Toolbar.svelte').then(m => m.default)
        }
      ],
      "path": "/components"
    },
    {
      "isIndex": true,
      "isPage": true,
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/routes/index.svelte').then(m => m.default)
    }
  ],
  "isLayout": true,
  "path": "/",
  "id": "__layout",
  "component": () => import('../src/routes/_layout.svelte').then(m => m.default)
}


export const {tree, routes} = buildClientTree(_tree)

