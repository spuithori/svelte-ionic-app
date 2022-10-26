import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../../chunks/index.js";
import { call, heart, pin, logoIonic, logoTwitter, logoFacebook } from "ionicons/icons";
import { S as SourceButton } from "../../../../chunks/SourceButton.js";
import { I as IonPage } from "../../../../chunks/IonPage.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "ion-segment.svelte-h0ayik{padding:5px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Ionic Companion - Segment</title>`, ""}`, ""}

${validate_component(IonPage, "IonPage").$$render($$result, {}, {}, {
    default: () => {
      return `<ion-header translucent="${"true"}"><ion-toolbar><ion-buttons slot="${"start"}"><ion-menu-button></ion-menu-button></ion-buttons>
			<ion-buttons slot="${"end"}">${validate_component(SourceButton, "SourceButton").$$render($$result, { name: "Segment" }, {}, {})}</ion-buttons>
			<ion-title>Segment</ion-title></ion-toolbar></ion-header>

	<ion-content fullscreen><ion-list-header>Default</ion-list-header>

		
		<ion-segment value="${"call"}" class="${"svelte-h0ayik"}"><ion-segment-button value="${"call"}"><ion-label>Call</ion-label></ion-segment-button>
			<ion-segment-button value="${"favorite"}"><ion-label>Favorite</ion-label></ion-segment-button>
			<ion-segment-button value="${"map"}"><ion-label>Map</ion-label></ion-segment-button></ion-segment>

		
		<ion-segment color="${"secondary"}" value="${"heart"}" class="${"svelte-h0ayik"}"><ion-segment-button><ion-icon${add_attribute("icon", call, 0)}></ion-icon></ion-segment-button>
			<ion-segment-button value="${"heart"}"><ion-icon${add_attribute("icon", heart, 0)}></ion-icon></ion-segment-button>
			<ion-segment-button><ion-icon${add_attribute("icon", pin, 0)}></ion-icon></ion-segment-button></ion-segment>

		
		<ion-segment color="${"tertiary"}" value="${"favorite"}" class="${"svelte-h0ayik"}"><ion-segment-button><ion-label>Call</ion-label>
				<ion-icon${add_attribute("icon", call, 0)}></ion-icon></ion-segment-button>
			<ion-segment-button value="${"favorite"}"><ion-label>Favorite</ion-label>
				<ion-icon${add_attribute("icon", heart, 0)}></ion-icon></ion-segment-button>
			<ion-segment-button><ion-label>Map</ion-label>
				<ion-icon${add_attribute("icon", pin, 0)}></ion-icon></ion-segment-button></ion-segment>

		
		<ion-segment color="${"success"}" value="${"call"}" class="${"svelte-h0ayik"}"><ion-segment-button value="${"call"}" layout="${"icon-bottom"}"><ion-icon${add_attribute("icon", call, 0)}></ion-icon>
				<ion-label>Call</ion-label></ion-segment-button>
			<ion-segment-button layout="${"icon-bottom"}"><ion-icon${add_attribute("icon", heart, 0)}></ion-icon>
				<ion-label>Favorite</ion-label></ion-segment-button>
			<ion-segment-button layout="${"icon-bottom"}"><ion-icon${add_attribute("icon", pin, 0)}></ion-icon>
				<ion-label>Map</ion-label></ion-segment-button></ion-segment>

		<ion-list-header>Scrollable</ion-list-header>

		
		<ion-segment color="${"warning"}" value="${"call"}" scrollable class="${"svelte-h0ayik"}"><ion-segment-button value="${"call"}" layout="${"icon-start"}"><ion-label>Call</ion-label>
				<ion-icon${add_attribute("icon", call, 0)}></ion-icon></ion-segment-button>
			<ion-segment-button layout="${"icon-start"}"><ion-label>Favorite</ion-label>
				<ion-icon${add_attribute("icon", heart, 0)}></ion-icon></ion-segment-button>
			<ion-segment-button layout="${"icon-start"}"><ion-label>Map</ion-label>
				<ion-icon${add_attribute("icon", pin, 0)}></ion-icon></ion-segment-button>
			<ion-segment-button layout="${"icon-start"}"><ion-label>Map</ion-label>
				<ion-icon${add_attribute("icon", logoIonic, 0)}></ion-icon></ion-segment-button>
			<ion-segment-button layout="${"icon-start"}"><ion-label>Map</ion-label>
				<ion-icon${add_attribute("icon", logoTwitter, 0)}></ion-icon></ion-segment-button>
			<ion-segment-button layout="${"icon-start"}"><ion-label>Map</ion-label>
				<ion-icon${add_attribute("icon", logoFacebook, 0)}></ion-icon></ion-segment-button></ion-segment>

		
		<ion-segment color="${"danger"}" value="${"call"}" scrollable class="${"svelte-h0ayik"}"><ion-segment-button value="${"call"}" layout="${"icon-end"}"><ion-icon${add_attribute("icon", call, 0)}></ion-icon>
				<ion-label>Call</ion-label></ion-segment-button>
			<ion-segment-button layout="${"icon-end"}"><ion-icon${add_attribute("icon", heart, 0)}></ion-icon>
				<ion-label>Favorite</ion-label></ion-segment-button>
			<ion-segment-button layout="${"icon-end"}"><ion-icon${add_attribute("icon", pin, 0)}></ion-icon>
				<ion-label>Map</ion-label></ion-segment-button></ion-segment></ion-content>`;
    }
  })}`;
});
export {
  Page as default
};
