import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../../chunks/index.js";
import { S as SourceButton } from "../../../../chunks/SourceButton.js";
import { I as IonPage } from "../../../../chunks/IonPage.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let modalOpen = false;
  return `${$$result.head += `${$$result.title = `<title>Ionic Companion - Datetime</title>`, ""}`, ""}

${validate_component(IonPage, "IonPage").$$render($$result, {}, {}, {
    default: () => {
      return `<ion-header translucent="${"true"}"><ion-toolbar><ion-buttons slot="${"start"}"><ion-menu-button></ion-menu-button></ion-buttons>
			<ion-buttons slot="${"end"}">${validate_component(SourceButton, "SourceButton").$$render($$result, { name: "Datetime" }, {}, {})}</ion-buttons>
			<ion-title>DateTime</ion-title></ion-toolbar></ion-header>

	<ion-content fullscreen><ion-button expand="${"block"}">Open Datetime Modal</ion-button>
		<ion-modal${add_attribute("is-open", modalOpen, 0)}><ion-content force-overscroll="${"false"}"><ion-datetime></ion-datetime>
				<ion-button expand="${"block"}">Close</ion-button></ion-content></ion-modal>
		<ion-list><ion-item><ion-label>Start Date</ion-label>
				<ion-datetime value="${"1990-02-19"}" placeholder="${"Select Date"}"></ion-datetime></ion-item>
			<ion-item><ion-label>Start Time</ion-label>
				<ion-datetime display-format="${"h:mm A"}" picker-format="${"h:mm A"}" value="${"1990-02-19T07:43Z"}"></ion-datetime></ion-item>
			<ion-item><ion-label>Ends</ion-label>
				<ion-datetime value="${"1990-02-20"}" placeholder="${"Select Date"}"></ion-datetime></ion-item>
			<ion-item><ion-label>Repeat</ion-label>
				<ion-datetime placeholder="${"Never"}" disabled></ion-datetime></ion-item>
			<ion-item><ion-label>Travel Time</ion-label>
				<ion-datetime placeholder="${"None"}" disabled></ion-datetime></ion-item>
			<ion-item-divider></ion-item-divider>
			<ion-item><ion-label>Alert</ion-label>
				<ion-datetime placeholder="${"None"}" disabled></ion-datetime></ion-item></ion-list></ion-content>`;
    }
  })}`;
});
export {
  Page as default
};
