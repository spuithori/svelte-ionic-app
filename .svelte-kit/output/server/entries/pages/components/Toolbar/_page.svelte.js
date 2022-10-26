import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../../chunks/index.js";
import { logoIonic, star, fingerPrint, ellipsisVertical } from "ionicons/icons";
import { S as SourceButton } from "../../../../chunks/SourceButton.js";
import { I as IonPage } from "../../../../chunks/IonPage.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IonPage, "IonPage").$$render($$result, {}, {}, {
    default: () => {
      return `<ion-header translucent="${"true"}"><ion-toolbar><ion-buttons slot="${"start"}"><ion-menu-button></ion-menu-button></ion-buttons>
			<ion-buttons slot="${"end"}">${validate_component(SourceButton, "SourceButton").$$render($$result, { name: "Toolbar" }, {}, {})}</ion-buttons>
			<ion-buttons slot="${"secondary"}"><ion-button><ion-icon slot="${"icon-only"}"${add_attribute("icon", logoIonic, 0)}></ion-icon></ion-button></ion-buttons>

			<ion-title>Header</ion-title>

			<ion-buttons slot="${"primary"}"><ion-button><ion-icon slot="${"icon-only"}"${add_attribute("icon", star, 0)}></ion-icon></ion-button></ion-buttons></ion-toolbar></ion-header>

	<ion-content fullscreen><ion-toolbar><ion-title>Default</ion-title></ion-toolbar>

		<ion-toolbar color="${"primary"}"><ion-title>Primary</ion-title></ion-toolbar>

		<ion-toolbar color="${"secondary"}"><ion-title>Secondary</ion-title></ion-toolbar>

		<ion-toolbar color="${"tertiary"}"><ion-title>Tertiary</ion-title></ion-toolbar>

		<ion-toolbar color="${"success"}"><ion-title>Success</ion-title></ion-toolbar>

		<ion-toolbar color="${"warning"}"><ion-title>Warning</ion-title></ion-toolbar>

		<ion-toolbar color="${"danger"}"><ion-title>Danger</ion-title></ion-toolbar>

		<ion-toolbar><ion-buttons slot="${"secondary"}"><ion-button>Messages (1)</ion-button></ion-buttons>

			<ion-title>Buttons</ion-title>

			<ion-buttons slot="${"primary"}"><ion-button>Log Out</ion-button></ion-buttons></ion-toolbar></ion-content>

	<ion-footer><ion-toolbar><ion-buttons slot="${"secondary"}"><ion-button><ion-icon slot="${"icon-only"}"${add_attribute("icon", fingerPrint, 0)}></ion-icon></ion-button></ion-buttons>

			<ion-title>Footer</ion-title>

			<ion-buttons slot="${"primary"}"><ion-button><ion-icon slot="${"icon-only"}"${add_attribute("icon", ellipsisVertical, 0)}></ion-icon></ion-button></ion-buttons></ion-toolbar></ion-footer>`;
    }
  })}`;
});
export {
  Page as default
};
