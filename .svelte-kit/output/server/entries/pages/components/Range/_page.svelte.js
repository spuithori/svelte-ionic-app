import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../../chunks/index.js";
import { sunny, contrast, brush, thermometer } from "ionicons/icons";
import { S as SourceButton } from "../../../../chunks/SourceButton.js";
import { I as IonPage } from "../../../../chunks/IonPage.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let dualRange;
  return `${$$result.head += `${$$result.title = `<title>Ionic Companion - Range</title>`, ""}`, ""}

${validate_component(IonPage, "IonPage").$$render($$result, {}, {}, {
    default: () => {
      return `<ion-header translucent="${"true"}"><ion-toolbar><ion-buttons slot="${"start"}"><ion-menu-button></ion-menu-button></ion-buttons>
			<ion-buttons slot="${"end"}">${validate_component(SourceButton, "SourceButton").$$render($$result, { name: "Range" }, {}, {})}</ion-buttons>
			<ion-title>Range</ion-title></ion-toolbar></ion-header>

	<ion-content fullscreen><ion-list><ion-list-header>Adjust Display</ion-list-header>

			<ion-item><ion-range value="${"20"}"><ion-icon slot="${"start"}" size="${"small"}"${add_attribute("icon", sunny, 0)}></ion-icon>
					<ion-icon slot="${"end"}"${add_attribute("icon", sunny, 0)}></ion-icon></ion-range></ion-item>

			<ion-item><ion-range min="${"-200"}" max="${"200"}" pin color="${"secondary"}"><ion-icon slot="${"start"}" size="${"small"}"${add_attribute("icon", contrast, 0)}></ion-icon>
					<ion-icon slot="${"end"}"${add_attribute("icon", contrast, 0)}></ion-icon></ion-range></ion-item>

			<ion-item><ion-range dual-knobs pin color="${"dark"}"${add_attribute("this", dualRange, 0)}><ion-icon slot="${"start"}" size="${"small"}"${add_attribute("icon", brush, 0)}></ion-icon>
					<ion-icon slot="${"end"}"${add_attribute("icon", brush, 0)}></ion-icon></ion-range></ion-item>

			<ion-item><ion-range min="${"1000"}" max="${"2000"}" step="${"100"}" value="${"1400"}" snaps color="${"danger"}"><ion-icon slot="${"start"}" size="${"small"}" color="${"danger"}"${add_attribute("icon", thermometer, 0)}></ion-icon>
					<ion-icon slot="${"end"}" color="${"danger"}"${add_attribute("icon", thermometer, 0)}></ion-icon></ion-range></ion-item></ion-list></ion-content>`;
    }
  })}`;
});
export {
  Page as default
};
