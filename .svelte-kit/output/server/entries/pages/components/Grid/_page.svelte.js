import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { S as SourceButton } from "../../../../chunks/SourceButton.js";
import { I as IonPage } from "../../../../chunks/IonPage.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--ion-safe-area-top:20px;--ion-safe-area-bottom:22px}ion-col.svelte-i680k3>div.svelte-i680k3{background-color:#f7f7f7;border:solid 1px #ddd;padding:10px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Ionic Companion - Grid</title>`, ""}`, ""}

${validate_component(IonPage, "IonPage").$$render($$result, {}, {}, {
    default: () => {
      return `<ion-header translucent="${"true"}"><ion-toolbar><ion-buttons slot="${"start"}"><ion-menu-button></ion-menu-button></ion-buttons>
			<ion-buttons slot="${"end"}">${validate_component(SourceButton, "SourceButton").$$render($$result, { name: "Grid" }, {}, {})}</ion-buttons>
			<ion-title>Grid</ion-title></ion-toolbar></ion-header>
	<ion-content fullscreen><ion-grid><ion-row><ion-col class="${"svelte-i680k3"}"><div class="${"svelte-i680k3"}">1 of 2</div></ion-col>
				<ion-col class="${"svelte-i680k3"}"><div class="${"svelte-i680k3"}">2 of 2</div></ion-col></ion-row>
			<ion-row><ion-col class="${"svelte-i680k3"}"><div class="${"svelte-i680k3"}">1 of 3</div></ion-col>
				<ion-col class="${"svelte-i680k3"}"><div class="${"svelte-i680k3"}">2 of 3</div></ion-col>
				<ion-col class="${"svelte-i680k3"}"><div class="${"svelte-i680k3"}">3 of 3</div></ion-col></ion-row>
			<ion-row><ion-col class="${"svelte-i680k3"}"><div class="${"svelte-i680k3"}">1 of 3</div></ion-col>
				<ion-col col-6 class="${"svelte-i680k3"}"><div class="${"svelte-i680k3"}">2 of 3</div></ion-col>
				<ion-col class="${"svelte-i680k3"}"><div class="${"svelte-i680k3"}">3 of 3</div></ion-col></ion-row>
			<ion-row><ion-col col-6 class="${"svelte-i680k3"}"><div class="${"svelte-i680k3"}">1 of 3</div></ion-col>
				<ion-col class="${"svelte-i680k3"}"><div class="${"svelte-i680k3"}">2 of 3</div></ion-col>
				<ion-col class="${"svelte-i680k3"}"><div class="${"svelte-i680k3"}">3 of 3</div></ion-col></ion-row>
			<ion-row><ion-col offset-4 class="${"svelte-i680k3"}"><div class="${"svelte-i680k3"}">1 of 2</div></ion-col>
				<ion-col class="${"svelte-i680k3"}"><div class="${"svelte-i680k3"}">2 of 2</div></ion-col></ion-row>
			<ion-row><ion-col class="${"svelte-i680k3"}"><div class="${"svelte-i680k3"}">1 of 2</div></ion-col>
				<ion-col offset-4 class="${"svelte-i680k3"}"><div class="${"svelte-i680k3"}">2 of 2</div></ion-col></ion-row>
			<ion-row><ion-col class="${"svelte-i680k3"}"><div class="${"svelte-i680k3"}">1 of 4</div></ion-col>
				<ion-col class="${"svelte-i680k3"}"><div class="${"svelte-i680k3"}">2 of 4</div></ion-col>
				<ion-col class="${"svelte-i680k3"}"><div class="${"svelte-i680k3"}">3 of 4</div></ion-col>
				<ion-col class="${"svelte-i680k3"}"><div class="${"svelte-i680k3"}">4 of 4</div></ion-col></ion-row></ion-grid></ion-content>`;
    }
  })}`;
});
export {
  Page as default
};
