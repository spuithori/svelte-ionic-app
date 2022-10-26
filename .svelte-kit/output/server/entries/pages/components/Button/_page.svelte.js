import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { S as SourceButton } from "../../../../chunks/SourceButton.js";
import { I as IonPage } from "../../../../chunks/IonPage.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--ion-safe-area-top:20px;--ion-safe-area-bottom:22px}header.svelte-v8dd7g.svelte-v8dd7g{font-size:11px;font-weight:600;letter-spacing:0.05em;margin-bottom:1.25em;text-transform:uppercase}section.svelte-v8dd7g.svelte-v8dd7g{margin-top:1em;margin-bottom:2.5em}section.svelte-v8dd7g.svelte-v8dd7g:not(.full-width),.full-width.svelte-v8dd7g>header.svelte-v8dd7g{padding:0 10px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Ionic Companion - Buttons</title>`, ""}`, ""}

${validate_component(IonPage, "IonPage").$$render($$result, {}, {}, {
    default: () => {
      return `<ion-header translucent="${"true"}"><ion-toolbar><ion-buttons slot="${"start"}"><ion-menu-button></ion-menu-button></ion-buttons>
			<ion-buttons slot="${"end"}">${validate_component(SourceButton, "SourceButton").$$render($$result, { name: "Button" }, {}, {})}</ion-buttons>
			<ion-title>Button</ion-title></ion-toolbar></ion-header>
	<ion-content fullscreen><section class="${"svelte-v8dd7g"}"><header class="${"svelte-v8dd7g"}">Small Size</header>
			<ion-button size="${"small"}">Default</ion-button>
			<ion-button size="${"small"}" color="${"secondary"}">Secondary</ion-button>
			<ion-button size="${"small"}" color="${"tertiary"}">Tertiary</ion-button></section>

		<section class="${"svelte-v8dd7g"}"><header class="${"svelte-v8dd7g"}">Default Size</header>
			<ion-button color="${"success"}">Success</ion-button>
			<ion-button color="${"warning"}">Warning</ion-button>
			<ion-button color="${"danger"}">Danger</ion-button></section>

		<section class="${"svelte-v8dd7g"}"><header class="${"svelte-v8dd7g"}">Large Size</header>
			<ion-button size="${"large"}" color="${"light"}">Light</ion-button>
			<ion-button size="${"large"}" color="${"medium"}">Medium</ion-button>
			<ion-button size="${"large"}" color="${"dark"}">Dark</ion-button></section>

		<section class="${"svelte-v8dd7g"}"><header class="${"svelte-v8dd7g"}">Block Width</header>
			<ion-button expand="${"block"}">A block button</ion-button></section>

		<section class="${"full-width svelte-v8dd7g"}"><header class="${"svelte-v8dd7g"}">Full Width</header>
			<ion-button expand="${"full"}" color="${"secondary"}">A full-width button</ion-button></section></ion-content>`;
    }
  })}`;
});
export {
  Page as default
};
