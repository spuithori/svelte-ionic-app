import { c as create_ssr_component, a as subscribe, v as validate_component, d as add_attribute } from "../../../../chunks/index.js";
import { S as SourceButton } from "../../../../chunks/SourceButton.js";
import { I as IonPage } from "../../../../chunks/IonPage.js";
import { t as tweened } from "../../../../chunks/index4.js";
import { c as cubicOut } from "../../../../chunks/index3.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "progress.svelte-1vol2d3{display:block;width:100%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $progress, $$unsubscribe_progress;
  const progress = tweened(0, { duration: 2e3, easing: cubicOut });
  $$unsubscribe_progress = subscribe(progress, (value) => $progress = value);
  $$result.css.add(css);
  $$unsubscribe_progress();
  return `${$$result.head += `${$$result.title = `<title>Ionic Companion - Svelte Tweened</title>`, ""}`, ""}

${validate_component(IonPage, "IonPage").$$render($$result, {}, {}, {
    default: () => {
      return `<ion-header translucent="${"true"}"><ion-toolbar><ion-buttons slot="${"start"}"><ion-menu-button></ion-menu-button></ion-buttons>
			<ion-buttons slot="${"end"}">${validate_component(SourceButton, "SourceButton").$$render($$result, { name: "SvelteTweened" }, {}, {})}</ion-buttons>
			<ion-title>Svelte Tweened </ion-title></ion-toolbar></ion-header>

	<ion-content fullscreen class="${"ion-padding"}"><p>Svelte tweened is part of Svelte&#39;s nifty runtime features to easily add animation to DOM
			elements.This code comes from the Svelte Tutorial on <a href="${"https://svelte.dev/tutorial/tweened"}" target="${"_blank"}">https://svelte.dev/tutorial/tweened
			</a></p>
		&quot;Setting values and watching the DOM update automatically is cool. Know what&#39;s even cooler? Tweening
		those values. Svelte includes tools to help you build slick user interfaces that use animation to
		communicate changes.&quot;
		<br><br>Click the percentages to see the transition
		<br><br>
		<progress${add_attribute("value", $progress, 0)} class="${"svelte-1vol2d3"}"></progress>

		<button>0% </button>

		<button>25% </button>

		<button>50% </button>

		<button>75% </button>

		<button>100% </button></ion-content>`;
    }
  })}`;
});
export {
  Page as default
};
