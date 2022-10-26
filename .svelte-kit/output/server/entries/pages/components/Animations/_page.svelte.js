import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../../chunks/index.js";
import "@ionic/core";
import { S as SourceButton } from "../../../../chunks/SourceButton.js";
import { I as IonPage } from "../../../../chunks/IonPage.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".square.svelte-1n03jy{width:100px;height:100px;background:rgba(0, 0, 255, 0.5);margin:10px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let squareA, squareB, squareC;
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Ionic Companion - Animations</title>`, ""}`, ""}

${validate_component(IonPage, "IonPage").$$render($$result, {}, {}, {
    default: () => {
      return `<ion-header translucent="${"true"}"><ion-toolbar><ion-buttons slot="${"start"}"><ion-menu-button></ion-menu-button></ion-buttons>
			<ion-buttons slot="${"end"}">${validate_component(SourceButton, "SourceButton").$$render($$result, { name: "Animations" }, {}, {})}</ion-buttons>
			<ion-title>Animations</ion-title></ion-toolbar></ion-header>

	<ion-content fullscreen class="${"ion-padding"}"><div class="${"square svelte-1n03jy"}"${add_attribute("this", squareA, 0)}></div>
		<div class="${"square svelte-1n03jy"}"${add_attribute("this", squareB, 0)}></div>
		<div class="${"square svelte-1n03jy"}"${add_attribute("this", squareC, 0)}></div>

		<ion-button>Play</ion-button>
		<ion-button>Pause</ion-button>
		<ion-button>Stop</ion-button></ion-content>`;
    }
  })}`;
});
export {
  Page as default
};
