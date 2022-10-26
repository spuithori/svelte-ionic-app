import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../../chunks/index.js";
import "@ionic/core";
import "../../../../chunks/platform.js";
import "ionicons/icons";
import { S as SourceButton } from "../../../../chunks/SourceButton.js";
import { M as Music } from "../../../../chunks/Music.js";
import { I as IonPage } from "../../../../chunks/IonPage.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let inlineModalOpen = false;
  let breakpoints = [0, 0.5, 1];
  return `${$$result.head += `${$$result.title = `<title>Ionic Companion - Controllers</title>`, ""}`, ""}

${validate_component(IonPage, "IonPage").$$render($$result, {}, {}, {
    default: () => {
      return `<ion-header translucent="${"true"}"><ion-toolbar><ion-buttons slot="${"start"}"><ion-menu-button></ion-menu-button></ion-buttons>
			<ion-buttons slot="${"end"}">${validate_component(SourceButton, "SourceButton").$$render($$result, { name: "Controllers" }, {}, {})}</ion-buttons>
			<ion-title>Controllers</ion-title></ion-toolbar></ion-header>

	<ion-content fullscreen class="${"ion-padding"}"><h1>All controllers in one page</h1>
		<ion-button expand="${"block"}">Action Sheet </ion-button>
		<ion-button expand="${"block"}">Show Simple Alert </ion-button>
		<ion-button expand="${"block"}">Show Radio Alert </ion-button>
		<ion-button expand="${"block"}">Show Checkbox Alert </ion-button>
		<ion-button expand="${"block"}">Show Input Alert </ion-button>

		<ion-button expand="${"block"}">Show modal - via controller</ion-button>
		<ion-button expand="${"block"}">Show modal - via inline &amp; as sheet</ion-button>
		<ion-button expand="${"block"}">Show Popover</ion-button>
		<ion-button expand="${"block"}">Show Loading</ion-button>
		<ion-button expand="${"block"}">Show Picker</ion-button>
		<ion-button expand="${"block"}">Show Toast</ion-button>

		<ion-modal${add_attribute("is-open", inlineModalOpen, 0)} initial-breakpoint="${"0.5"}"${add_attribute("breakpoints", breakpoints, 0)}><ion-content><br><br><br>
				<ion-button expand="${"block"}">Close modal
				</ion-button>
				${validate_component(Music, "Music").$$render($$result, {}, {}, {})}</ion-content></ion-modal></ion-content>`;
    }
  })}`;
});
export {
  Page as default
};
