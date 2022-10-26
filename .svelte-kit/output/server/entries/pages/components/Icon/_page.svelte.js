import { c as create_ssr_component, v as validate_component, e as each, d as add_attribute } from "../../../../chunks/index.js";
import * as allIonicIcons from "ionicons/icons";
import { S as SourceButton } from "../../../../chunks/SourceButton.js";
import "@ionic/core";
import "../../../../chunks/platform.js";
import { I as IonPage } from "../../../../chunks/IonPage.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "ion-icon.svelte-cghyi7{font-size:500%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let icons = Object.keys(allIonicIcons);
  let list = [];
  list = icons.slice(0, 100);
  setTimeout(
    () => {
      list = [].concat(icons);
    },
    3e3
  );
  const getRandomColor = () => {
    const items = [
      "secondary",
      "primary",
      "danger",
      "warning",
      "dark",
      "medium",
      "success",
      "tertiary"
    ];
    return items[Math.floor(Math.random() * items.length)];
  };
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Ionic Companion - Icons</title>`, ""}`, ""}

${validate_component(IonPage, "IonPage").$$render($$result, {}, {}, {
    default: () => {
      return `<ion-header translucent="${"true"}"><ion-toolbar><ion-title>Icons</ion-title>
			<ion-buttons slot="${"start"}"><ion-menu-button></ion-menu-button></ion-buttons>
			<ion-buttons slot="${"end"}">${validate_component(SourceButton, "SourceButton").$$render($$result, { name: "Icon" }, {}, {})}</ion-buttons></ion-toolbar>
		<ion-toolbar><ion-searchbar animated debounce="${"1500"}" show-cancel-button="${"'never'"}"></ion-searchbar></ion-toolbar></ion-header>

	<ion-content fullscreen class="${"ion-padding"}"><ion-grid><ion-row>${each(list, (icon) => {
        return `<ion-col><ion-icon${add_attribute("icon", allIonicIcons[icon], 0)}${add_attribute("color", getRandomColor(), 0)} class="${"svelte-cghyi7"}"></ion-icon>
					</ion-col>`;
      })}</ion-row></ion-grid></ion-content>`;
    }
  })}`;
});
export {
  Page as default
};
