import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../../chunks/index.js";
import "ionicons/icons";
import "@ionic/core";
import "../../../../chunks/platform.js";
import "localforage";
import { I as IonPage } from "../../../../chunks/IonPage.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ionNav;
  let root;
  return `${$$result.head += `${$$result.title = `<title>Ionic Companion - Nav</title>`, ""}`, ""}

${validate_component(IonPage, "IonPage").$$render($$result, {}, {}, {
    default: () => {
      return `<ion-nav${add_attribute("root", root, 0)}${add_attribute("this", ionNav, 0)}></ion-nav>`;
    }
  })}`;
});
export {
  Page as default
};
