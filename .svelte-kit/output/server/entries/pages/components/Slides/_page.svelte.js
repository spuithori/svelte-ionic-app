import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../../chunks/index.js";
import { menu } from "ionicons/icons";
import { S as SourceButton } from "../../../../chunks/SourceButton.js";
import "@ionic/core";
import "../../../../chunks/platform.js";
import { I as IonPage } from "../../../../chunks/IonPage.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--ion-safe-area-top:20px;--ion-safe-area-bottom:22px}ion-slide.svelte-9ug1id.svelte-9ug1id{display:block}ion-slide.svelte-9ug1id>h2.svelte-9ug1id{margin-top:2.8rem}ion-slide.svelte-9ug1id>img.svelte-9ug1id{max-height:50%;max-width:60%;margin:36px 0}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Ionic Companion - Slides</title>`, ""}`, ""}

${validate_component(IonPage, "IonPage").$$render($$result, {}, {}, {
    default: () => {
      return `<ion-header translucent="${"true"}"><ion-toolbar><ion-buttons slot="${"start"}"><ion-menu-button></ion-menu-button></ion-buttons>
			<ion-buttons slot="${"end"}">${validate_component(SourceButton, "SourceButton").$$render($$result, { name: "Slides" }, {}, {})}</ion-buttons>
			<ion-title>Slides</ion-title></ion-toolbar></ion-header>

	<ion-content fullscreen padding scroll-y="${"false"}"><ion-slides pager="${"true"}"><ion-slide class="${"svelte-9ug1id"}"><img src="${"../assets/img/slides/slide-1.png"}" alt="${"pict"}" class="${"svelte-9ug1id"}">
				<h2 class="${"svelte-9ug1id"}">Welcome!</h2>
				The<b>Ionic UI App</b> is a practical preview of the ionic framework, and a demonstration of
				use in svelte or even other languages. <br>
				<br>
				<br></ion-slide>

			<ion-slide class="${"svelte-9ug1id"}"><img src="${"../assets/img/slides/svelte.png"}" alt="${"pict"}" class="${"svelte-9ug1id"}">
				<h2 class="${"svelte-9ug1id"}">Handy tool!</h2>
				By clicking the button bottom right you can instantly view the source code of the element you
				are viewing, to copy/paste and direct link to API docs.<br>
				<br>
				<br></ion-slide>

			<ion-slide class="${"svelte-9ug1id"}"><img src="${"../assets/img/slides/slide-2.png"}" alt="${"pict"}" class="${"svelte-9ug1id"}">
				<h2 class="${"svelte-9ug1id"}">Easy starters</h2>
				This project also has references to a number of starter templates for you to jumpstart Ionic
				development
				<br>
				Check the readme on
				<a href="${"https://github.com/Tommertom/svelte-ionic-app"}" target="${"_blank"}">Github</a>
				<br>
				<br></ion-slide>

			<ion-slide class="${"svelte-9ug1id"}"><img src="${"../assets/img/slides/slide-4.png"}" alt="${"pict"}" class="${"svelte-9ug1id"}">
				<h2 class="${"svelte-9ug1id"}">Ready to Play?</h2>
				Check out
				<ion-icon${add_attribute("icon", menu, 0)}></ion-icon>
				to look at UI examples. <br>
				<br>
				<br>
				<br></ion-slide></ion-slides></ion-content>`;
    }
  })}`;
});
export {
  Page as default
};
