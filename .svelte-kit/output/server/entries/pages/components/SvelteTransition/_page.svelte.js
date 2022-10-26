import { c as create_ssr_component, v as validate_component, d as add_attribute, f as escape, e as each } from "../../../../chunks/index.js";
import { S as SourceButton } from "../../../../chunks/SourceButton.js";
import { I as IonPage } from "../../../../chunks/IonPage.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".centered.svelte-12jwz8q{position:absolute;left:50%;top:50%;transform:translate(-50%, -50%)}.span.svelte-12jwz8q{position:absolute;transform:translate(-50%, -50%);font-size:4em}.numberlist.svelte-12jwz8q{padding:0.5em 0;border-top:1px solid #eee}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let status = "waiting...";
  let visible = true;
  let showItems = true;
  let i = 5;
  let items = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
  let number = 0;
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Ionic Companion - Svelte Transition</title>`, ""}`, ""}

${validate_component(IonPage, "IonPage").$$render($$result, {}, {}, {
    default: () => {
      return `<ion-header translucent="${"true"}"><ion-toolbar><ion-buttons slot="${"start"}"><ion-menu-button></ion-menu-button></ion-buttons>
			<ion-buttons slot="${"end"}">${validate_component(SourceButton, "SourceButton").$$render($$result, { name: "SvelteTransition" }, {}, {})}</ion-buttons>
			<ion-title>Svelte Transition </ion-title></ion-toolbar></ion-header>

	<ion-content fullscreen class="${"ion-padding"}"><p>Svelte transition is part of Svelte&#39;s nifty runtime features to easily add animation to DOM
			elements.This code comes from the Svelte Tutorial on <a href="${"https://svelte.dev/tutorial/transition"}" target="${"_blank"}">https://svelte.dev/tutorial/transition
			</a></p>
		<br>

		&quot;We can make more appealing user interfaces by gracefully transitioning elements into and out of
		the DOM. Svelte makes this very easy with the transition directive.&quot;
		<br><br>Click the checkbox to see the transitions
		<br><br>
		<label><input type="${"checkbox"}"${add_attribute("checked", visible, 1)}>
			visible - event listener status: ${escape(status)}</label>
		${`<p>Fades in and out</p>

			<p>Flies in and out</p>

			<p>Flies in, fades out</p>

			<div class="${"centered svelte-12jwz8q"}"><div class="${"span svelte-12jwz8q"}">transitions!</div></div>

			<p>The quick brown fox jumps over the lazy dog</p>

			<p>Flies in and out with event listener
			</p>`}

		<br><br>
		<label><input type="${"checkbox"}"${add_attribute("checked", showItems, 1)}>
			Local transitions demo - Show List
		</label>
		<br>
		Move slider
		<label><input type="${"range"}" max="${"10"}"${add_attribute("value", i, 0)}></label>
		${`${each(items.slice(0, i), (item) => {
        return `<div class="${"numberlist svelte-12jwz8q"}">${escape(item)}
				</div>`;
      })}`}

		<div><h2>Key block demo - The number is:
				<span style="${"display: inline-block"}">${escape(number)}</span></h2></div>
		<br>
		<ion-button>Increment number of transitions demo
		</ion-button></ion-content>`;
    }
  })}`;
});
export {
  Page as default
};
