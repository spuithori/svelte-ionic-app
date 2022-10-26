import { c as create_ssr_component, a as subscribe, v as validate_component, f as escape, d as add_attribute } from "../../../../chunks/index.js";
import { S as SourceButton } from "../../../../chunks/SourceButton.js";
import { I as IonPage } from "../../../../chunks/IonPage.js";
import { s as spring } from "../../../../chunks/index4.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "svg.svelte-h2t6l5{width:100%;height:100%;background:gray}circle.svelte-h2t6l5{fill:#ff3e00}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $coords, $$unsubscribe_coords;
  let $size, $$unsubscribe_size;
  let coords = spring({ x: 50, y: 50 }, { stiffness: 0.1, damping: 0.25 });
  $$unsubscribe_coords = subscribe(coords, (value) => $coords = value);
  let size = spring(10);
  $$unsubscribe_size = subscribe(size, (value) => $size = value);
  $$result.css.add(css);
  $$unsubscribe_coords();
  $$unsubscribe_size();
  return `${$$result.head += `${$$result.title = `<title>Ionic Companion - Svelte Spring</title>`, ""}`, ""}

${validate_component(IonPage, "IonPage").$$render($$result, {}, {}, {
    default: () => {
      return `<ion-header translucent="${"true"}"><ion-toolbar><ion-buttons slot="${"start"}"><ion-menu-button></ion-menu-button></ion-buttons>
			<ion-buttons slot="${"end"}">${validate_component(SourceButton, "SourceButton").$$render($$result, { name: "SvelteSpring" }, {}, {})}</ion-buttons>
			<ion-title>Svelte Spring </ion-title></ion-toolbar></ion-header>

	<ion-content fullscreen class="${"ion-padding"}"><p>Svelte spring is part of Svelte&#39;s nifty runtime features to easily add animation to DOM
			elements.This code comes from the Svelte Tutorial on <a href="${"https://svelte.dev/tutorial/spring"}" target="${"_blank"}">https://svelte.dev/tutorial/spring
			</a></p>
		&quot;The spring function is an alternative to tweened that often works better for values that are frequently
		changing. In this example we have two stores \u2014 one representing the circle&#39;s coordinates, and one
		representing its size. Let&#39;s convert them to springs.&quot;
		<br><br>Waggle your mouse around, and try dragging the sliders to get a feel for how they
		affect the spring&#39;s behaviour. Notice that you can adjust the values while the spring is still
		in motion.
		<br><br>

		<div style="${"position: absolute; right: 1em;"}"><label><h3>stiffness (${escape(coords.stiffness)})</h3>
				<input type="${"range"}" min="${"0"}" max="${"1"}" step="${"0.01"}"${add_attribute("value", coords.stiffness, 0)}></label>

			<label><h3>damping (${escape(coords.damping)})</h3>
				<input type="${"range"}" min="${"0"}" max="${"1"}" step="${"0.01"}"${add_attribute("value", coords.damping, 0)}></label></div>

		<svg class="${"svelte-h2t6l5"}"><circle${add_attribute("cx", $coords.x, 0)}${add_attribute("cy", $coords.y, 0)}${add_attribute("r", $size, 0)} class="${"svelte-h2t6l5"}"></circle></svg></ion-content>`;
    }
  })}`;
});
export {
  Page as default
};
