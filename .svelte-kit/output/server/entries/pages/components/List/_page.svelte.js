import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { S as SourceButton } from "../../../../chunks/SourceButton.js";
import { I as IonPage } from "../../../../chunks/IonPage.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Ionic Companion - Lists</title>`, ""}`, ""}

${validate_component(IonPage, "IonPage").$$render($$result, {}, {}, {
    default: () => {
      return `<ion-header translucent="${"true"}"><ion-toolbar><ion-buttons slot="${"start"}"><ion-menu-button></ion-menu-button></ion-buttons>
			<ion-buttons slot="${"end"}">${validate_component(SourceButton, "SourceButton").$$render($$result, { name: "List" }, {}, {})}</ion-buttons>
			<ion-title>List</ion-title></ion-toolbar></ion-header>

	<ion-content fullscreen><ion-list><ion-list-header>Recent Conversations</ion-list-header>

			<ion-item><ion-avatar slot="${"start"}"><img alt="${"avatar"}" src="${"../assets/img/ionic/avatar-finn.png"}"></ion-avatar>
				<ion-label><h2>Finn</h2>
					<h3>I&#39;m a big deal</h3>
					<p>Listen, I&#39;ve had a pretty messed up day...</p></ion-label></ion-item>

			<ion-item><ion-avatar slot="${"start"}"><img alt="${"avatar"}" src="${"../assets/img/ionic/avatar-han.png"}"></ion-avatar>
				<ion-label><h2>Han</h2>
					<h3>Look, kid...</h3>
					<p>I&#39;ve got enough on my plate as it is, and I...</p></ion-label></ion-item>

			<ion-item><ion-avatar slot="${"start"}"><img alt="${"avatar"}" src="${"../assets/img/ionic/avatar-rey.png"}"></ion-avatar>
				<ion-label><h2>Rey</h2>
					<h3>I can handle myself</h3>
					<p>You will remove these restraints and leave...</p></ion-label></ion-item>

			<ion-item><ion-avatar slot="${"start"}"><img alt="${"avatar"}" src="${"../assets/img/ionic/avatar-luke.png"}"></ion-avatar>
				<ion-label><h2>Luke</h2>
					<h3>Your thoughts betray you</h3>
					<p>I feel the good in you, the conflict...</p></ion-label></ion-item></ion-list>

		<ion-list><ion-list-header>Online</ion-list-header>

			<ion-item><ion-avatar slot="${"start"}"><img alt="${"avatar"}" src="${"../assets/img/ionic/avatar-poe.png"}"></ion-avatar>
				<ion-label><h2>Poe</h2>
					<h3>New Ride</h3>
					<p>I just upgraded my X-Wing. Next time...</p></ion-label></ion-item>

			<ion-item><ion-avatar slot="${"start"}"><img alt="${"avatar"}" src="${"../assets/img/ionic/avatar-ben.png"}"></ion-avatar>
				<ion-label><h2>Ben</h2>
					<h3>Move Along</h3>
					<p>These aren&#39;t the droids you&#39;re looking for...</p></ion-label></ion-item>

			<ion-item><ion-avatar slot="${"start"}"><img alt="${"avatar"}" src="${"../assets/img/ionic/avatar-leia.png"}"></ion-avatar>
				<ion-label><h2>Leia</h2>
					<h3>You&#39;re My Only Hope</h3>
					<p>I&#39;ve placed information vital to the survival...</p></ion-label></ion-item>

			<ion-item><ion-avatar slot="${"start"}"><img alt="${"avatar"}" src="${"../assets/img/ionic/avatar-yoda.png"}"></ion-avatar>
				<ion-label><h2>Yoda</h2>
					<h3>Size matters not</h3>
					<p>Do or do not. There is no try...</p></ion-label></ion-item></ion-list></ion-content>`;
    }
  })}`;
});
export {
  Page as default
};
