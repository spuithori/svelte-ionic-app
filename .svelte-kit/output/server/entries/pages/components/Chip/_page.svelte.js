import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../../chunks/index.js";
import { checkmarkCircle, pin, closeCircle, wine, restaurant, videocam } from "ionicons/icons";
import { S as SourceButton } from "../../../../chunks/SourceButton.js";
import { I as IonPage } from "../../../../chunks/IonPage.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "p.svelte-vd4fz4{margin-left:16px;margin-top:0}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Ionic Companion - Chips</title>`, ""}`, ""}

${validate_component(IonPage, "IonPage").$$render($$result, {}, {}, {
    default: () => {
      return `<ion-header translucent="${"true"}"><ion-toolbar><ion-buttons slot="${"start"}"><ion-menu-button></ion-menu-button></ion-buttons>
			<ion-buttons slot="${"end"}">${validate_component(SourceButton, "SourceButton").$$render($$result, { name: "Chip" }, {}, {})}</ion-buttons>
			<ion-title>Chip</ion-title></ion-toolbar></ion-header>

	<ion-content fullscreen><ion-list-header>Basic</ion-list-header>
		<p class="${"svelte-vd4fz4"}"><ion-chip><ion-label>Default</ion-label></ion-chip>
			<ion-chip><ion-icon${add_attribute("icon", checkmarkCircle, 0)}></ion-icon>
				<ion-label>Icon</ion-label></ion-chip>
			<ion-chip><ion-avatar><img alt="${"avatar"}" src="${"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSIjYzVkYmZmIiBkPSJNMCAwaDUxMnY1MTJIMHoiLz48cGF0aCBkPSJNMjU2IDMwNGM2MS42IDAgMTEyLTUwLjQgMTEyLTExMlMzMTcuNiA4MCAyNTYgODBzLTExMiA1MC40LTExMiAxMTIgNTAuNCAxMTIgMTEyIDExMnptMCA0MGMtNzQuMiAwLTIyNCAzNy44LTIyNCAxMTJ2NTZoNDQ4di01NmMwLTc0LjItMTQ5LjgtMTEyLTIyNC0xMTJ6IiBmaWxsPSIjODJhZWZmIi8+PC9zdmc+"}"></ion-avatar>
				<ion-label>Avatar</ion-label></ion-chip></p>

		<ion-list-header>Colors</ion-list-header>
		<p class="${"svelte-vd4fz4"}"><ion-chip color="${"primary"}"><ion-label>Primary</ion-label></ion-chip>
			<ion-chip color="${"secondary"}"><ion-label>Secondary</ion-label></ion-chip>
			<ion-chip color="${"tertiary"}"><ion-label>Tertiary</ion-label></ion-chip>
			<ion-chip color="${"success"}"><ion-label>Success</ion-label></ion-chip>
			<ion-chip color="${"warning"}"><ion-label>Warning</ion-label></ion-chip>
			<ion-chip color="${"danger"}"><ion-label>Danger</ion-label></ion-chip></p>

		<ion-list-header>Outline</ion-list-header>
		<p class="${"svelte-vd4fz4"}"><ion-chip outline color="${"primary"}"><ion-label>Primary</ion-label></ion-chip>
			<ion-chip outline color="${"secondary"}"><ion-label>Secondary</ion-label></ion-chip>
			<ion-chip outline color="${"tertiary"}"><ion-label>Tertiary</ion-label></ion-chip>
			<ion-chip outline color="${"success"}"><ion-label>Success</ion-label></ion-chip>
			<ion-chip outline color="${"warning"}"><ion-label>Warning</ion-label></ion-chip>
			<ion-chip outline color="${"danger"}"><ion-label>Danger</ion-label></ion-chip></p>

		<ion-list-header>Icons</ion-list-header>
		<p class="${"svelte-vd4fz4"}"><ion-chip outline color="${"primary"}"><ion-icon${add_attribute("icon", pin, 0)}></ion-icon>
				<ion-label>Madison</ion-label>
				<ion-icon${add_attribute("icon", closeCircle, 0)}></ion-icon></ion-chip>
			<ion-chip outline color="${"secondary"}"><ion-icon${add_attribute("icon", wine, 0)}></ion-icon>
				<ion-label>Nightlife</ion-label>
				<ion-icon${add_attribute("icon", closeCircle, 0)}></ion-icon></ion-chip>
			<ion-chip outline color="${"tertiary"}"><ion-icon${add_attribute("icon", restaurant, 0)}></ion-icon>
				<ion-label>Dining</ion-label>
				<ion-icon${add_attribute("icon", closeCircle, 0)}></ion-icon></ion-chip>
			<ion-chip outline color="${"dark"}"><ion-icon${add_attribute("icon", videocam, 0)}></ion-icon>
				<ion-label>Entertainment</ion-label>
				<ion-icon${add_attribute("icon", closeCircle, 0)}></ion-icon></ion-chip></p></ion-content>`;
    }
  })}`;
});
export {
  Page as default
};
