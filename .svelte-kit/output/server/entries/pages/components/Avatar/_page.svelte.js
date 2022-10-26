import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { S as SourceButton } from "../../../../chunks/SourceButton.js";
import { I as IonPage } from "../../../../chunks/IonPage.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const ionViewDidEnter = () => {
    console.log("Avatar:ionViewDidEnter");
  };
  return `${$$result.head += `${$$result.title = `<title>Ionic Companion - Avatars</title>`, ""}`, ""}

${validate_component(IonPage, "IonPage").$$render($$result, { ionViewDidEnter }, {}, {
    default: () => {
      return `<ion-header translucent="${"true"}"><ion-toolbar><ion-buttons slot="${"start"}"><ion-menu-button></ion-menu-button></ion-buttons>
			<ion-buttons slot="${"end"}">${validate_component(SourceButton, "SourceButton").$$render($$result, { name: "Avatar" }, {}, {})}</ion-buttons>
			<ion-title>Avatar</ion-title></ion-toolbar></ion-header>

	<ion-content fullscreen><ion-list-header>Default</ion-list-header>
		<ion-avatar class="${"ion-margin-start"}"><img alt="${"avatar"}" src="${"/assets/img/ionic/avatar.svg"}"></ion-avatar>

		<ion-list-header>Chip!</ion-list-header>
		<ion-chip class="${"ion-margin-start"}"><ion-avatar><img alt="${"avatar"}" src="${"/assets/img/ionic/avatar.svg"}"></ion-avatar>
			<ion-label>Kit Bishop</ion-label></ion-chip>

		<ion-list><ion-list-header>Item Avatars</ion-list-header>
			<ion-item><ion-avatar slot="${"start"}"><img alt="${"avatar"}" src="${"/assets/img/ionic/avatar.svg"}"></ion-avatar>
				<ion-label>Lorem ipsum</ion-label></ion-item>
			<ion-item><ion-avatar slot="${"end"}"><img alt="${"avatar"}" src="${"/assets/img/ionic/avatar.svg"}"></ion-avatar>
				<ion-label><p>Lorem ipsum</p></ion-label></ion-item>
			<ion-item><ion-avatar slot="${"start"}"><img alt="${"avatar"}" src="${"/assets/img/ionic/avatar.svg"}"></ion-avatar>
				<ion-label><h3>Lorem ipsum</h3>
					<p>dolor sit amet</p></ion-label></ion-item>
			<ion-item><ion-avatar slot="${"start"}"><img alt="${"avatar"}" src="${"/assets/img/ionic/avatar.svg"}"></ion-avatar>
				<ion-label><h3>Lorem ipsum</h3>
					<p>dolor sit amet</p>
					<p>consectetur adipiscing elit. Duis ut urna neque.</p></ion-label></ion-item>
			<ion-item><ion-avatar slot="${"end"}"><img alt="${"avatar"}" src="${"/assets/img/ionic/avatar.svg"}"></ion-avatar>
				<ion-label>Lorem ipsum</ion-label></ion-item>
			<ion-item><ion-avatar slot="${"end"}"><img alt="${"avatar"}" src="${"/assets/img/ionic/avatar.svg"}"></ion-avatar>
				<ion-label slot="${"start"}"><h3>Lorem ipsum</h3>
					<p>dolor sit amet</p></ion-label></ion-item></ion-list></ion-content>`;
    }
  })}`;
});
export {
  Page as default
};
