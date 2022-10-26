import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../../chunks/index.js";
import { S as SourceButton } from "../../../../chunks/SourceButton.js";
import { I as IonPage } from "../../../../chunks/IonPage.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let listElement;
  return `${$$result.head += `${$$result.title = `<title>Ionic Companion - Searchbar</title>`, ""}`, ""}

${validate_component(IonPage, "IonPage").$$render($$result, {}, {}, {
    default: () => {
      return `<ion-header translucent="${"true"}"><ion-toolbar><ion-buttons slot="${"start"}"><ion-menu-button></ion-menu-button></ion-buttons>
			<ion-buttons slot="${"end"}">${validate_component(SourceButton, "SourceButton").$$render($$result, { name: "Searchbar" }, {}, {})}</ion-buttons>
			<ion-title>Searchbar</ion-title></ion-toolbar>
		<ion-toolbar><ion-searchbar></ion-searchbar></ion-toolbar></ion-header>
	<ion-content fullscreen><ion-list${add_attribute("this", listElement, 0)}><ion-item>Amsterdam</ion-item>
			<ion-item>Bogota</ion-item>
			<ion-item>Buenos Aires</ion-item>
			<ion-item>Cairo</ion-item>
			<ion-item>Dhaka</ion-item>
			<ion-item>Edinburgh</ion-item>
			<ion-item>Geneva</ion-item>
			<ion-item>Genoa</ion-item>
			<ion-item>Glasgow</ion-item>
			<ion-item>Hanoi</ion-item>
			<ion-item>Hong Kong</ion-item>
			<ion-item>Islamabad</ion-item>
			<ion-item>Istanbul</ion-item>
			<ion-item>Jakarta</ion-item>
			<ion-item>Kiel</ion-item>
			<ion-item>Kyoto</ion-item>
			<ion-item>Le Havre</ion-item>
			<ion-item>Lebanon</ion-item>
			<ion-item>Lhasa</ion-item>
			<ion-item>Lima</ion-item>
			<ion-item>London</ion-item>
			<ion-item>Los Angeles</ion-item>
			<ion-item>Madrid</ion-item>
			<ion-item>Manila</ion-item>
			<ion-item>New York</ion-item>
			<ion-item>Olympia</ion-item>
			<ion-item>Oslo</ion-item>
			<ion-item>Panama City</ion-item>
			<ion-item>Peking</ion-item>
			<ion-item>Philadelphia</ion-item>
			<ion-item>San Francisco</ion-item>
			<ion-item>Seoul</ion-item>
			<ion-item>Taipeh</ion-item>
			<ion-item>Tel Aviv</ion-item>
			<ion-item>Tokio</ion-item>
			<ion-item>Uelzen</ion-item>
			<ion-item>Washington</ion-item></ion-list></ion-content>`;
    }
  })}`;
});
export {
  Page as default
};
