import { c as create_ssr_component, v as validate_component, d as add_attribute, e as each, f as escape } from "../../../../chunks/index.js";
import { S as SourceButton } from "../../../../chunks/SourceButton.js";
import { I as IonPage } from "../../../../chunks/IonPage.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--ion-safe-area-top:20px;--ion-safe-area-bottom:22px}ion-content.svelte-eth0z8{user-select:none}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const names = [
    "Burt Bear",
    "Charlie Cheetah",
    "Donald Duck",
    "Eva Eagle",
    "Ellie Elephant",
    "Gino Giraffe",
    "Isabella Iguana",
    "Karl Kitten",
    "Lionel Lion",
    "Molly Mouse",
    "Paul Puppy",
    "Rachel Rabbit",
    "Ted Turtle"
  ];
  let refresher;
  let itemList = [];
  const chooseRandomName = () => {
    return names[Math.floor(Math.random() * names.length)];
  };
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Ionic Companion - Refresher</title>`, ""}`, ""}

${validate_component(IonPage, "IonPage").$$render($$result, {}, {}, {
    default: () => {
      return `<ion-header translucent="${"true"}"><ion-toolbar><ion-buttons slot="${"start"}"><ion-menu-button></ion-menu-button></ion-buttons>
			<ion-buttons slot="${"end"}">${validate_component(SourceButton, "SourceButton").$$render($$result, { name: "Refresher" }, {}, {})}</ion-buttons>
			<ion-title>Pull to refresh</ion-title></ion-toolbar></ion-header>

	<ion-content class="${"svelte-eth0z8"}"><ion-refresher slot="${"fixed"}"${add_attribute("this", refresher, 0)}><ion-refresher-content></ion-refresher-content></ion-refresher>

		<ion-list>${each(itemList, (item) => {
        return `<ion-item><ion-avatar slot="${"start"}"><img${add_attribute("src", item.avatar, 0)}${add_attribute("alt", item.avatar, 0)}></ion-avatar>
					<ion-label class="${"ion-text-wrap"}"><h2>${escape(chooseRandomName())}</h2>
						<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3></ion-label>
				</ion-item>`;
      })}</ion-list></ion-content>`;
    }
  })}`;
});
export {
  Page as default
};
