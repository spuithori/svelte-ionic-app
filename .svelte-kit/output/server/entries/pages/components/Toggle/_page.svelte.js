import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { S as SourceButton } from "../../../../chunks/SourceButton.js";
import { I as IonPage } from "../../../../chunks/IonPage.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(IonPage, "IonPage").$$render($$result, {}, {}, {
    default: () => {
      return `<ion-header translucent="${"true"}"><ion-toolbar><ion-buttons slot="${"start"}"><ion-menu-button></ion-menu-button></ion-buttons>
			<ion-buttons slot="${"end"}">${validate_component(SourceButton, "SourceButton").$$render($$result, { name: "Toggle" }, {}, {})}</ion-buttons>
			<ion-title>Toggle</ion-title></ion-toolbar></ion-header>

	<ion-content fullscreen><ion-list><ion-item><ion-label>Blueberry</ion-label>
				<ion-toggle slot="${"start"}" name="${"blueberry"}" checked></ion-toggle></ion-item>

			<ion-item><ion-label>Apple</ion-label>
				<ion-toggle slot="${"start"}" name="${"apple"}" color="${"secondary"}" checked></ion-toggle></ion-item>

			<ion-item><ion-label>Grape</ion-label>
				<ion-toggle slot="${"start"}" name="${"grape"}" color="${"tertiary"}" checked></ion-toggle></ion-item>

			<ion-item><ion-label>Kiwi</ion-label>
				<ion-toggle slot="${"start"}" name="${"kiwi"}" color="${"success"}" checked></ion-toggle></ion-item>

			<ion-item><ion-label>Orange</ion-label>
				<ion-toggle slot="${"start"}" name="${"banana"}" color="${"warning"}" checked></ion-toggle></ion-item>

			<ion-item><ion-label>Cherry</ion-label>
				<ion-toggle slot="${"start"}" name="${"cherry"}" color="${"danger"}" checked></ion-toggle></ion-item>

			<ion-item><ion-label>Banana</ion-label>
				<ion-toggle slot="${"start"}" name="${"banana"}" color="${"light"}" checked></ion-toggle></ion-item>

			<ion-item><ion-label>Cantaloupe</ion-label>
				<ion-toggle slot="${"start"}" name="${"cantaloupe"}" color="${"medium"}" checked></ion-toggle></ion-item>

			<ion-item><ion-label>Blackberry</ion-label>
				<ion-toggle slot="${"start"}" name="${"blackberry"}" color="${"dark"}" checked></ion-toggle></ion-item></ion-list></ion-content>`;
    }
  })}`;
});
export {
  Page as default
};
