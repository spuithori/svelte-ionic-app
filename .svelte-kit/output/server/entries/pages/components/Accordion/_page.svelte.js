import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../../chunks/index.js";
import { S as SourceButton } from "../../../../chunks/SourceButton.js";
import { I as IonPage } from "../../../../chunks/IonPage.js";
import { arrowDownCircle } from "ionicons/icons";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--ion-safe-area-top:20px;--ion-safe-area-bottom:22px}ion-list-header.svelte-1jpc1k8{padding-bottom:12px}ion-content.svelte-1jpc1k8{--background:#f2f2f7}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let stateAccordion;
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Ionic Companion - Accordion</title>`, ""}`, ""}

${validate_component(IonPage, "IonPage").$$render($$result, {}, {}, {
    default: () => {
      return `<ion-header translucent="${"true"}"><ion-toolbar><ion-buttons slot="${"start"}"><ion-menu-button></ion-menu-button></ion-buttons>
			<ion-buttons slot="${"end"}">${validate_component(SourceButton, "SourceButton").$$render($$result, { name: "Accordion" }, {}, {})}</ion-buttons>
			<ion-title>Accordion</ion-title></ion-toolbar></ion-header>

	<ion-content fullscreen class="${"svelte-1jpc1k8"}"><ion-list inset="${"true"}"><ion-list-header class="${"svelte-1jpc1k8"}">Basic</ion-list-header>
			<ion-accordion-group><ion-accordion value="${"colors"}"><ion-item slot="${"header"}"><ion-label>Colors</ion-label></ion-item>

					<ion-list slot="${"content"}"><ion-item><ion-label>Red</ion-label></ion-item>
						<ion-item><ion-label>Green</ion-label></ion-item>
						<ion-item><ion-label>Blue</ion-label></ion-item></ion-list></ion-accordion>
				<ion-accordion value="${"shapes"}"><ion-item slot="${"header"}"><ion-label>Shapes</ion-label></ion-item>

					<ion-list slot="${"content"}"><ion-item><ion-label>Circle</ion-label></ion-item>
						<ion-item><ion-label>Triangle</ion-label></ion-item>
						<ion-item><ion-label>Square</ion-label></ion-item></ion-list></ion-accordion>
				<ion-accordion value="${"numbers"}"><ion-item slot="${"header"}"><ion-label>Numbers</ion-label></ion-item>

					<ion-list slot="${"content"}"><ion-item><ion-label>1</ion-label></ion-item>
						<ion-item><ion-label>2</ion-label></ion-item>
						<ion-item><ion-label>3</ion-label></ion-item></ion-list></ion-accordion></ion-accordion-group></ion-list>

		<ion-list inset="${"true"}"><ion-list-header class="${"svelte-1jpc1k8"}">Custom Icon</ion-list-header>
			<ion-accordion-group><ion-accordion value="${"colors"}"${add_attribute("toggle-icon", arrowDownCircle, 0)} toggle-icon-slot="${"start"}"><ion-item slot="${"header"}"><ion-label>Colors</ion-label></ion-item>

					<ion-list slot="${"content"}"><ion-item><ion-label>Red</ion-label></ion-item>
						<ion-item><ion-label>Green</ion-label></ion-item>
						<ion-item><ion-label>Blue</ion-label></ion-item></ion-list></ion-accordion>
				<ion-accordion value="${"shapes"}"${add_attribute("toggle-icon", arrowDownCircle, 0)} toggle-icon-slot="${"start"}"><ion-item slot="${"header"}"><ion-label>Shapes</ion-label></ion-item>

					<ion-list slot="${"content"}"><ion-item><ion-label>Circle</ion-label></ion-item>
						<ion-item><ion-label>Triangle</ion-label></ion-item>
						<ion-item><ion-label>Square</ion-label></ion-item></ion-list></ion-accordion>
				<ion-accordion value="${"numbers"}"${add_attribute("toggle-icon", arrowDownCircle, 0)} toggle-icon-slot="${"start"}"><ion-item slot="${"header"}"><ion-label>Numbers</ion-label></ion-item>

					<ion-list slot="${"content"}"><ion-item><ion-label>1</ion-label></ion-item>
						<ion-item><ion-label>2</ion-label></ion-item>
						<ion-item><ion-label>3</ion-label></ion-item></ion-list></ion-accordion></ion-accordion-group></ion-list>

		<ion-list inset="${"true"}"><ion-list-header class="${"svelte-1jpc1k8"}">Open Accordion</ion-list-header>
			<ion-accordion-group value="${"colors"}"><ion-accordion value="${"colors"}"><ion-item slot="${"header"}"><ion-label>Colors</ion-label></ion-item>

					<ion-list slot="${"content"}"><ion-item><ion-label>Red</ion-label></ion-item>
						<ion-item><ion-label>Green</ion-label></ion-item>
						<ion-item><ion-label>Blue</ion-label></ion-item></ion-list></ion-accordion>
				<ion-accordion value="${"shapes"}"><ion-item slot="${"header"}"><ion-label>Shapes</ion-label></ion-item>

					<ion-list slot="${"content"}"><ion-item><ion-label>Circle</ion-label></ion-item>
						<ion-item><ion-label>Triangle</ion-label></ion-item>
						<ion-item><ion-label>Square</ion-label></ion-item></ion-list></ion-accordion>
				<ion-accordion value="${"numbers"}"><ion-item slot="${"header"}"><ion-label>Numbers</ion-label></ion-item>

					<ion-list slot="${"content"}"><ion-item><ion-label>1</ion-label></ion-item>
						<ion-item><ion-label>2</ion-label></ion-item>
						<ion-item><ion-label>3</ion-label></ion-item></ion-list></ion-accordion></ion-accordion-group></ion-list>

		<ion-list inset="${"true"}"><ion-list-header class="${"svelte-1jpc1k8"}">Multiple Accordions</ion-list-header>
			<ion-accordion-group multiple="${"true"}" id="${"multiple"}"><ion-accordion value="${"colors"}"><ion-item slot="${"header"}"><ion-label>Colors</ion-label></ion-item>

					<ion-list slot="${"content"}"><ion-item><ion-label>Red</ion-label></ion-item>
						<ion-item><ion-label>Green</ion-label></ion-item>
						<ion-item><ion-label>Blue</ion-label></ion-item></ion-list></ion-accordion>
				<ion-accordion value="${"shapes"}"><ion-item slot="${"header"}"><ion-label>Shapes</ion-label></ion-item>

					<ion-list slot="${"content"}"><ion-item><ion-label>Circle</ion-label></ion-item>
						<ion-item><ion-label>Triangle</ion-label></ion-item>
						<ion-item><ion-label>Square</ion-label></ion-item></ion-list></ion-accordion>
				<ion-accordion value="${"numbers"}"><ion-item slot="${"header"}"><ion-label>Numbers</ion-label></ion-item>

					<ion-list slot="${"content"}"><ion-item><ion-label>1</ion-label></ion-item>
						<ion-item><ion-label>2</ion-label></ion-item>
						<ion-item><ion-label>3</ion-label></ion-item></ion-list></ion-accordion></ion-accordion-group></ion-list>

		<ion-list inset="${"true"}"><ion-list-header class="${"svelte-1jpc1k8"}">Managing State</ion-list-header>
			<ion-accordion-group id="${"state"}" value="${"numbers"}"${add_attribute("this", stateAccordion, 0)}><ion-accordion value="${"colors"}"><ion-item slot="${"header"}"><ion-label>Colors</ion-label></ion-item>

					<ion-list slot="${"content"}"><ion-item><ion-label>Red</ion-label></ion-item>
						<ion-item><ion-label>Green</ion-label></ion-item>
						<ion-item><ion-label>Blue</ion-label></ion-item></ion-list></ion-accordion>
				<ion-accordion value="${"shapes"}"><ion-item slot="${"header"}"><ion-label>Shapes</ion-label></ion-item>

					<ion-list slot="${"content"}"><ion-item><ion-label>Circle</ion-label></ion-item>
						<ion-item><ion-label>Triangle</ion-label></ion-item>
						<ion-item><ion-label>Square</ion-label></ion-item></ion-list></ion-accordion>
				<ion-accordion value="${"numbers"}"><ion-item slot="${"header"}"><ion-label>Numbers</ion-label></ion-item>

					<ion-list slot="${"content"}"><ion-item><ion-label>1</ion-label></ion-item>
						<ion-item><ion-label>2</ion-label></ion-item>
						<ion-item><ion-label>3</ion-label></ion-item></ion-list></ion-accordion></ion-accordion-group></ion-list>

		<ion-button>Log Value of Accordion Group</ion-button>
		<ion-button>Close All Accordions</ion-button></ion-content>`;
    }
  })}`;
});
export {
  Page as default
};
