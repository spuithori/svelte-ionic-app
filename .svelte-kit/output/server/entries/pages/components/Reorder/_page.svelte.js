import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../../chunks/index.js";
import { repeat } from "ionicons/icons";
import { S as SourceButton } from "../../../../chunks/SourceButton.js";
import { I as IonPage } from "../../../../chunks/IonPage.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let reorderGroup;
  return `${$$result.head += `${$$result.title = `<title>Ionic Companion - Reorder</title>`, ""}`, ""}

${validate_component(IonPage, "IonPage").$$render($$result, {}, {}, {
    default: () => {
      return `<ion-header translucent="${"true"}"><ion-toolbar><ion-buttons slot="${"start"}"><ion-menu-button></ion-menu-button></ion-buttons>
			<ion-buttons slot="${"end"}">${validate_component(SourceButton, "SourceButton").$$render($$result, { name: "Reorder" }, {}, {})}</ion-buttons>
			<ion-title>Reorder</ion-title>
			<ion-buttons slot="${"primary"}"><ion-button>Toggle</ion-button></ion-buttons></ion-toolbar></ion-header>

	<ion-content fullscreen><ion-list><ion-list-header>Reorder Icon</ion-list-header>
			<ion-reorder-group${add_attribute("this", reorderGroup, 0)}><ion-item><ion-label>Item 1</ion-label>
					<ion-reorder slot="${"end"}"></ion-reorder></ion-item>

				<ion-item><ion-label>Item 2</ion-label>
					<ion-reorder slot="${"end"}"></ion-reorder></ion-item>

				<ion-item><ion-label>Item 3</ion-label>
					<ion-reorder slot="${"end"}"></ion-reorder></ion-item>

				<ion-item><ion-label>Item 4</ion-label>
					<ion-reorder slot="${"end"}"></ion-reorder></ion-item>

				<ion-list-header>Custom Reorder Icon</ion-list-header>
				<ion-item><ion-label>Item 5</ion-label>
					<ion-reorder slot="${"start"}"><ion-icon${add_attribute("icon", repeat, 0)}></ion-icon></ion-reorder></ion-item>

				<ion-item><ion-label>Item 6</ion-label>
					<ion-reorder slot="${"start"}"><ion-icon${add_attribute("icon", repeat, 0)}></ion-icon></ion-reorder></ion-item>

				<ion-item><ion-label>Item 7</ion-label>
					<ion-reorder slot="${"start"}"><ion-icon${add_attribute("icon", repeat, 0)}></ion-icon></ion-reorder></ion-item>

				<ion-list-header>Reorder Item</ion-list-header>
				<ion-reorder><ion-item><ion-label>Item 8</ion-label></ion-item></ion-reorder>

				<ion-reorder><ion-item><ion-label>Item 9</ion-label></ion-item></ion-reorder>

				<ion-reorder><ion-item><ion-label>Item 10</ion-label></ion-item></ion-reorder></ion-reorder-group></ion-list></ion-content>`;
    }
  })}`;
});
export {
  Page as default
};
