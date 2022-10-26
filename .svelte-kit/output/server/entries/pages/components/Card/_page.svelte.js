import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../../chunks/index.js";
import { pin, wifi, wine, warning, walk } from "ionicons/icons";
import { S as SourceButton } from "../../../../chunks/SourceButton.js";
import { I as IonPage } from "../../../../chunks/IonPage.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Ionic Companion - Cards</title>`, ""}`, ""}

${validate_component(IonPage, "IonPage").$$render($$result, {}, {}, {
    default: () => {
      return `<ion-header translucent="${"true"}"><ion-toolbar><ion-buttons slot="${"start"}"><ion-menu-button></ion-menu-button></ion-buttons>
			<ion-buttons slot="${"end"}">${validate_component(SourceButton, "SourceButton").$$render($$result, { name: "Card" }, {}, {})}</ion-buttons>
			<ion-title>Card</ion-title></ion-toolbar></ion-header>

	<ion-content fullscreen><ion-card><ion-card-header><ion-card-subtitle>Card Subtitle</ion-card-subtitle>
				<ion-card-title>Card Title</ion-card-title></ion-card-header>

			<ion-card-content>Keep close to Nature&#39;s heart... and break clear away, once in awhile, and climb a mountain
				or spend a week in the woods. Wash your spirit clean.
			</ion-card-content></ion-card>

		<ion-card><ion-item><ion-icon${add_attribute("icon", pin, 0)} slot="${"start"}"></ion-icon>

				<ion-label>ion-item in a card, icon left, button right</ion-label>
				<ion-button fill="${"outline"}" slot="${"end"}">View</ion-button></ion-item>

			<ion-card-content>This is content, without any paragraph or header tags, within an ion-card-content element.
			</ion-card-content></ion-card>

		<ion-card><ion-item href="${"/components/tabs/:tab"}" class="${"activated"}"><ion-icon${add_attribute("icon", wifi, 0)} slot="${"start"}"></ion-icon>
				<ion-label>Card Link Item 1 .activated</ion-label></ion-item>

			<ion-item href="${"/components/Button"}"><ion-icon${add_attribute("icon", wine, 0)} slot="${"start"}"></ion-icon>
				<ion-label>Card Link Item 2</ion-label></ion-item>

			<ion-item class="${"activated"}"><ion-icon${add_attribute("icon", warning, 0)} slot="${"start"}"></ion-icon>
				<ion-label>Card Button Item 1 .activated</ion-label></ion-item>

			<ion-item><ion-icon${add_attribute("icon", walk, 0)} slot="${"start"}"></ion-icon>
				<ion-label>Card Button Item 2</ion-label></ion-item></ion-card>

		<ion-card><img src="${"/assets/img/madison.jpg"}" alt="${"madison"}">
			<ion-card-header><ion-card-subtitle>Destination</ion-card-subtitle>
				<ion-card-title>Madison, WI</ion-card-title></ion-card-header>
			<ion-card-content>Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the
				capital of the Wisconsin Territory in 1836.
			</ion-card-content></ion-card></ion-content>`;
    }
  })}`;
});
export {
  Page as default
};
