import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../../chunks/index.js";
import { S as SourceButton } from "../../../../chunks/SourceButton.js";
import { I as IonPage } from "../../../../chunks/IonPage.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let controller;
  return `${$$result.head += `${$$result.title = `<title>Ionic Companion - Inputs</title>`, ""}`, ""}

${validate_component(IonPage, "IonPage").$$render($$result, {}, {}, {
    default: () => {
      return `<ion-header translucent="${"true"}"><ion-toolbar><ion-buttons slot="${"start"}"><ion-menu-button></ion-menu-button></ion-buttons>
			<ion-buttons slot="${"end"}">${validate_component(SourceButton, "SourceButton").$$render($$result, { name: "Inputs" }, {}, {})}</ion-buttons>
			<ion-title>Create Account</ion-title></ion-toolbar></ion-header>

	<ion-content fullscreen class="${"ion-padding"}"><form><ion-list lines="${"full"}" class="${"ion-no-margin ion-no-padding"}"><ion-item><ion-label position="${"stacked"}">First Name
						<ion-text color="${"danger"}">*</ion-text></ion-label>
					<ion-input required type="${"text"}"></ion-input></ion-item>

				<ion-item><ion-label position="${"stacked"}">Last Name
						<ion-text color="${"danger"}">*</ion-text></ion-label>
					<ion-input required type="${"text"}"></ion-input></ion-item>

				<ion-item><ion-label position="${"floating"}">Title</ion-label>
					<ion-input></ion-input></ion-item>

				<ion-item><ion-label position="${"stacked"}">Address</ion-label>
					<ion-input placeholder="${"Address Line 1"}"></ion-input>
					<ion-input placeholder="${"Address Line 2"}"></ion-input>
					<ion-input placeholder="${"City"}"></ion-input>
					<ion-input placeholder="${"State"}"></ion-input>
					<ion-input placeholder="${"Zip Code"}"></ion-input></ion-item>

				<ion-item><ion-label position="${"stacked"}">Notes</ion-label>
					<ion-textarea></ion-textarea></ion-item></ion-list>

			<div class="${"ion-padding"}"><ion-button expand="${"block"}" class="${"ion-no-margin"}">Create account
				</ion-button></div></form></ion-content>
	<ion-alert-controller${add_attribute("this", controller, 0)}></ion-alert-controller>`;
    }
  })}`;
});
export {
  Page as default
};
