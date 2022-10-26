import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import "@ionic/core";
import "../../../../chunks/platform.js";
import { S as SourceButton } from "../../../../chunks/SourceButton.js";
import { I as IonPage } from "../../../../chunks/IonPage.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Ionic Companion - Alerts</title>`, ""}`, ""}

${validate_component(IonPage, "IonPage").$$render($$result, {}, {}, {
    default: () => {
      return `<ion-header translucent="${"true"}"><ion-toolbar><ion-buttons slot="${"start"}"><ion-menu-button></ion-menu-button></ion-buttons>
			<ion-buttons slot="${"end"}">${validate_component(SourceButton, "SourceButton").$$render($$result, { name: "Alert" }, {}, {})}</ion-buttons>
			<ion-title>Alerts</ion-title></ion-toolbar></ion-header>

	<ion-content fullscreen class="${"ion-padding"}"><h1>Click me stuff below!</h1>
		<ion-button expand="${"block"}">Show Simple Alert </ion-button>
		<ion-button expand="${"block"}">Show Radio Alert </ion-button>
		<ion-button expand="${"block"}">Show Checkbox Alert </ion-button>
		<ion-button expand="${"block"}">Show Input Alert </ion-button></ion-content>`;
    }
  })}`;
});
export {
  Page as default
};
