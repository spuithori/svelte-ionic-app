import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../../chunks/index.js";
import { add, logoFacebook, logoTwitter, logoVimeo, logoGoogle, share } from "ionicons/icons";
import { S as SourceButton } from "../../../../chunks/SourceButton.js";
import { I as IonPage } from "../../../../chunks/IonPage.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Ionic Companion - Fabs</title>`, ""}`, ""}

${validate_component(IonPage, "IonPage").$$render($$result, {}, {}, {
    default: () => {
      return `<ion-header translucent="${"true"}"><ion-toolbar><ion-buttons slot="${"start"}"><ion-menu-button></ion-menu-button></ion-buttons>
			<ion-buttons slot="${"end"}">${validate_component(SourceButton, "SourceButton").$$render($$result, { name: "Fab" }, {}, {})}</ion-buttons>
			<ion-title>Fab</ion-title></ion-toolbar></ion-header>

	<ion-content fullscreen class="${"ion-padding"}"><ion-fab horizontal="${"end"}" vertical="${"top"}" slot="${"fixed"}" edge><ion-fab-button><ion-icon${add_attribute("icon", add, 0)}></ion-icon></ion-fab-button>
			<ion-fab-list><ion-fab-button color="${"light"}"><ion-icon${add_attribute("icon", logoFacebook, 0)}></ion-icon></ion-fab-button>
				<ion-fab-button color="${"light"}"><ion-icon${add_attribute("icon", logoTwitter, 0)}></ion-icon></ion-fab-button>
				<ion-fab-button color="${"light"}"><ion-icon${add_attribute("icon", logoVimeo, 0)}></ion-icon></ion-fab-button></ion-fab-list></ion-fab>

		<ion-fab horizontal="${"end"}" vertical="${"center"}" slot="${"fixed"}"><ion-fab-button color="${"danger"}"><ion-icon${add_attribute("icon", add, 0)}></ion-icon></ion-fab-button></ion-fab>

		<ion-fab horizontal="${"end"}" vertical="${"bottom"}" slot="${"fixed"}"><ion-fab-button color="${"light"}"><ion-icn${add_attribute("md", logoFacebook, 0)}${add_attribute("ios", logoGoogle, 0)}></ion-icn>
				<ion-icon${add_attribute("icon", add, 0)}></ion-icon></ion-fab-button>
			<ion-fab-list side="${"start"}"><ion-fab-button color="${"light"}"><ion-icon${add_attribute("icon", logoFacebook, 0)}></ion-icon></ion-fab-button>
				<ion-fab-button color="${"light"}"><ion-icon${add_attribute("icon", logoTwitter, 0)}></ion-icon></ion-fab-button>
				<ion-fab-button color="${"light"}"><ion-icon${add_attribute("icon", logoVimeo, 0)}></ion-icon></ion-fab-button></ion-fab-list></ion-fab>

		<ion-fab horizontal="${"start"}" vertical="${"bottom"}" slot="${"fixed"}"><ion-fab-button color="${"dark"}"><ion-icn md="${"caret-up"}" ios="${"chevron-up-circle-outline"}"></ion-icn>
				<ion-icon${add_attribute("icon", add, 0)}></ion-icon></ion-fab-button>
			<ion-fab-list side="${"top"}"><ion-fab-button color="${"light"}"><ion-icon${add_attribute("icon", logoFacebook, 0)}></ion-icon></ion-fab-button>
				<ion-fab-button color="${"light"}"><ion-icon${add_attribute("icon", logoTwitter, 0)}></ion-icon></ion-fab-button>
				<ion-fab-button color="${"light"}"><ion-icon${add_attribute("icon", logoVimeo, 0)}></ion-icon></ion-fab-button></ion-fab-list></ion-fab>

		<ion-fab horizontal="${"start"}" vertical="${"top"}" slot="${"fixed"}"><ion-fab-button color="${"secondary"}"><ion-icn md="${"caret-forward"}" ios="${"chevron-forward-circle-outline"}"></ion-icn>
				<ion-icon${add_attribute("icon", add, 0)}></ion-icon></ion-fab-button>
			<ion-fab-list side="${"end"}"><ion-fab-button color="${"light"}"><ion-icon${add_attribute("icon", logoFacebook, 0)}></ion-icon></ion-fab-button>
				<ion-fab-button color="${"light"}"><ion-icon${add_attribute("icon", logoTwitter, 0)}></ion-icon></ion-fab-button>
				<ion-fab-button color="${"light"}"><ion-icon${add_attribute("icon", logoVimeo, 0)}></ion-icon></ion-fab-button></ion-fab-list></ion-fab>

		<ion-fab horizontal="${"center"}" vertical="${"center"}" slot="${"fixed"}"><ion-fab-button color="${"light"}"><ion-icon${add_attribute("icon", share, 0)}></ion-icon></ion-fab-button>
			<ion-fab-list side="${"top"}"><ion-fab-button color="${"light"}"><ion-icon${add_attribute("icon", logoVimeo, 0)}></ion-icon></ion-fab-button></ion-fab-list>
			<ion-fab-list side="${"end"}"><ion-fab-button color="${"light"}"><ion-icon${add_attribute("icon", logoTwitter, 0)}></ion-icon></ion-fab-button></ion-fab-list>
			<ion-fab-list side="${"bottom"}"><ion-fab-button color="${"light"}"><ion-icon${add_attribute("icon", logoFacebook, 0)}></ion-icon></ion-fab-button></ion-fab-list>
			<ion-fab-list side="${"start"}"><ion-fab-button color="${"light"}"><ion-icon${add_attribute("icon", logoGoogle, 0)}></ion-icon></ion-fab-button></ion-fab-list></ion-fab></ion-content>`;
    }
  })}`;
});
export {
  Page as default
};
