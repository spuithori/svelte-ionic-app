import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { S as SourceButton } from "../../../../chunks/SourceButton.js";
import { I as IonPage } from "../../../../chunks/IonPage.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Ionic Companion - Checkboxes</title>`, ""}`, ""}

${validate_component(IonPage, "IonPage").$$render($$result, {}, {}, {
    default: () => {
      return `<ion-header translucent="${"true"}"><ion-toolbar><ion-buttons slot="${"start"}"><ion-menu-button></ion-menu-button></ion-buttons>
			<ion-buttons slot="${"end"}">${validate_component(SourceButton, "SourceButton").$$render($$result, { name: "Checkbox" }, {}, {})}</ion-buttons>
			<ion-title>Checkbox</ion-title></ion-toolbar></ion-header>
	<ion-content fullscreen><ion-list><ion-list-header>Characters</ion-list-header>
			<ion-item><ion-label>Jon Snow</ion-label>
				<ion-checkbox value="${"jon"}" color="${"primary"}" checked slot="${"start"}"></ion-checkbox></ion-item>
			<ion-item><ion-checkbox value="${"daenerys"}" color="${"dark"}" checked slot="${"start"}"></ion-checkbox>
				<ion-label>Daenerys Targaryen</ion-label></ion-item>
			<ion-item><ion-checkbox disabled slot="${"start"}"></ion-checkbox>
				<ion-label>Arya Stark</ion-label></ion-item>
			<ion-item><ion-checkbox value="${"tyrion"}" color="${"secondary"}" slot="${"start"}"></ion-checkbox>
				<ion-label>Tyrion Lannister</ion-label></ion-item>
			<ion-item><ion-checkbox value="${"sansa"}" color="${"danger"}" checked slot="${"start"}"></ion-checkbox>
				<ion-label>Sansa Stark</ion-label></ion-item>
			<ion-item><ion-checkbox value="${"khal"}" color="${"primary"}" slot="${"start"}"></ion-checkbox>
				<ion-label>Khal Drogo</ion-label></ion-item>
			<ion-item><ion-checkbox value="${"cersei"}" color="${"tertiary"}" checked slot="${"start"}"></ion-checkbox>
				<ion-label>Cersei Lannister</ion-label></ion-item>
			<ion-item><ion-checkbox color="${"medium"}" value="${"stannis"}" checked slot="${"start"}"></ion-checkbox>
				<ion-label>Stannis Baratheon</ion-label></ion-item>
			<ion-item><ion-checkbox color="${"primary"}" disabled slot="${"start"}"></ion-checkbox>
				<ion-label>Petyr Baelish</ion-label></ion-item>
			<ion-item><ion-checkbox color="${"dark"}" value="${"hodor"}" checked slot="${"start"}"></ion-checkbox>
				<ion-label>Hodor</ion-label></ion-item>
			<ion-item><ion-checkbox color="${"secondary"}" value="${"catelyn"}" checked slot="${"start"}"></ion-checkbox>
				<ion-label>Catelyn Stark</ion-label></ion-item>
			<ion-item><ion-checkbox value="${"bronn"}" color="${"primary"}" slot="${"start"}"></ion-checkbox>
				<ion-label>Bronn</ion-label></ion-item></ion-list></ion-content>`;
    }
  })}`;
});
export {
  Page as default
};
