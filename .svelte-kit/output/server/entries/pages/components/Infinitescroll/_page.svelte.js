import { c as create_ssr_component, v as validate_component, e as each, d as add_attribute, f as escape } from "../../../../chunks/index.js";
import { S as SourceButton } from "../../../../chunks/SourceButton.js";
import { I as IonPage } from "../../../../chunks/IonPage.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let infiniteScroll;
  let itemList = [];
  return `${$$result.head += `${$$result.title = `<title>Ionic Companion - Infinitescroll</title>`, ""}`, ""}

${validate_component(IonPage, "IonPage").$$render($$result, {}, {}, {
    default: () => {
      return `<ion-header translucent="${"true"}"><ion-toolbar><ion-buttons slot="${"start"}"><ion-menu-button></ion-menu-button></ion-buttons>
			<ion-buttons slot="${"end"}">${validate_component(SourceButton, "SourceButton").$$render($$result, { name: "Infinitescroll" }, {}, {})}</ion-buttons>
			<ion-title>Accounts - Scroll down to see it work!</ion-title></ion-toolbar></ion-header>

	<ion-content fullscreen><ion-list>${each(itemList, (item) => {
        return `<ion-item><ion-avatar slot="${"start"}"><img${add_attribute("src", item.avatar, 0)}${add_attribute("alt", item.name, 0)}></ion-avatar>
					<ion-label><h2>${escape(item.name)}</h2>
						<p>Created ${escape(item.created)}</p></ion-label>
				</ion-item>`;
      })}</ion-list>

		<ion-infinite-scroll threshold="${"100px"}"${add_attribute("this", infiniteScroll, 0)}><ion-infinite-scroll-content loading-spinner="${"bubbles"}" loading-text="${"Loading more data..."}"></ion-infinite-scroll-content></ion-infinite-scroll></ion-content>`;
    }
  })}`;
});
export {
  Page as default
};
