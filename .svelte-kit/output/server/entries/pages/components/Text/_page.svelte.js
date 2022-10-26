import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { S as SourceButton } from "../../../../chunks/SourceButton.js";
import { I as IonPage } from "../../../../chunks/IonPage.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-7mczfj{margin-top:0}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(IonPage, "IonPage").$$render($$result, {}, {}, {
    default: () => {
      return `<ion-header translucent="${"true"}"><ion-toolbar><ion-buttons slot="${"start"}"><ion-menu-button></ion-menu-button></ion-buttons>
			<ion-buttons slot="${"end"}">${validate_component(SourceButton, "SourceButton").$$render($$result, { name: "Text" }, {}, {})}</ion-buttons>
			<ion-title>Text</ion-title></ion-toolbar></ion-header>

	<ion-content fullscreen class="${"ion-padding"}"><ion-text color="${"primary"}"><h1 class="${"svelte-7mczfj"}">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1></ion-text>

		<ion-text color="${"secondary"}"><h2>Nam rutrum justo massa, maximus elementum leo dignissim ac.</h2></ion-text>

		<ion-text color="${"tertiary"}"><h3>Vestibulum eleifend lorem nec neque interdum varius.</h3></ion-text>

		<ion-text color="${"success"}"><h4>Sed in neque at nibh congue tincidunt.</h4></ion-text>

		<ion-text color="${"warning"}"><h5>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
			</h5></ion-text>

		<ion-text color="${"danger"}"><h6>Suspendisse potenti.</h6></ion-text>

		<p>Donec magna odio,
			<ion-text color="${"primary"}">semper</ion-text>
			ac nibh et, vestibulum eleifend felis. Donec
			<ion-text color="${"secondary"}">pulvinar</ion-text>
			ex non quam vulputate malesuada in a magna. Praesent massa arcu,
			<ion-text color="${"tertiary"}">vehicula</ion-text>
			id pharetra et, cursus at lectus.
		</p></ion-content>`;
    }
  })}`;
});
export {
  Page as default
};
