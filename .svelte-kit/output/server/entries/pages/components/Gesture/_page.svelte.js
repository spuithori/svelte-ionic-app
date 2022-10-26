import { c as create_ssr_component, v as validate_component, d as add_attribute, f as escape } from "../../../../chunks/index.js";
import "@ionic/core";
import { S as SourceButton } from "../../../../chunks/SourceButton.js";
import { I as IonPage } from "../../../../chunks/IonPage.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".square.svelte-hre4dx{width:100px;height:100px;background:rgba(0, 0, 255, 0.5)}.moveTrack.svelte-hre4dx{width:100%;max-width:500px;background:rgba(0, 0, 0, 0.2)}.rectangle.svelte-hre4dx{width:500px;height:100px;background:rgba(0, 0, 255, 0.5)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let movableSquare;
  let moveTrack;
  let swipeTrack;
  let gestureType = "Start swiping this area!";
  let currentX;
  let deltaX;
  let velocityX;
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Ionic Companion - Gesture</title>`, ""}`, ""}

${validate_component(IonPage, "IonPage").$$render($$result, {}, {}, {
    default: () => {
      return `<ion-header translucent="${"true"}"><ion-toolbar><ion-buttons slot="${"start"}"><ion-menu-button></ion-menu-button></ion-buttons>
			<ion-buttons slot="${"end"}">${validate_component(SourceButton, "SourceButton").$$render($$result, { name: "Gesture" }, {}, {})}</ion-buttons>
			<ion-title>Gesture</ion-title></ion-toolbar></ion-header>

	<ion-content fullscreen class="${"ion-padding"}"><ion-card><div class="${"moveTrack svelte-hre4dx"}"${add_attribute("this", moveTrack, 0)}><div class="${"square svelte-hre4dx"}"${add_attribute("this", movableSquare, 0)}></div></div>
			<p>Drag the square along the track.</p></ion-card>

		<ion-card><div class="${"rectangle svelte-hre4dx"}"${add_attribute("this", swipeTrack, 0)}></div>
			<p>Swipe to start tracking</p>
			<div>Type: ${escape(gestureType)}</div>
			<div>Current X: ${escape(currentX)}</div>
			<div>Delta X: ${escape(deltaX)}</div>
			<div>Velocity X: ${escape(velocityX)}</div></ion-card></ion-content>`;
    }
  })}`;
});
export {
  Page as default
};
