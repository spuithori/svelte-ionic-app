import { c as create_ssr_component, v as validate_component, f as escape } from "../../../../chunks/index.js";
import { I as IonPage } from "../../../../chunks/IonPage.js";
import { S as SourceButton } from "../../../../chunks/SourceButton.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const ionViewWillEnter = () => {
    console.log("Page:ionViewWillEnter");
  };
  const ionViewDidEnter = () => {
    console.log("Page:ionViewDidEnter");
  };
  const ionViewWillLeave = () => {
    console.log("Page:ionViewWillLeave");
  };
  const ionViewDidLeave = () => {
    console.log("Page:ionViewDidLeave");
  };
  const ionPageSyntax = `...
  const ionViewWillEnter=
        ionViewDidEnter=
        ionViewWillLeave=
        ionViewDidLeave=console.log('We got an event!') 
  
  <IonPage {ionViewWillEnter} {ionViewDidEnter} {ionViewWillLeave} {ionViewDidLeave}>
  
  `;
  return `${$$result.head += `${$$result.title = `<title>Ionic Companion - Page</title>`, ""}`, ""}

${validate_component(IonPage, "IonPage").$$render(
    $$result,
    {
      ionViewWillEnter,
      ionViewDidEnter,
      ionViewWillLeave,
      ionViewDidLeave
    },
    {},
    {
      default: () => {
        return `<ion-header translucent="${"true"}"><ion-toolbar><ion-buttons slot="${"start"}"><ion-menu-button></ion-menu-button></ion-buttons>
			<ion-buttons slot="${"end"}">${validate_component(SourceButton, "SourceButton").$$render($$result, { name: "Page" }, {}, {})}</ion-buttons>
			<ion-title>Page</ion-title></ion-toolbar></ion-header>

	<ion-content fullscreen class="${"ion-padding"}"><ion-card><ion-card-header><h1>API specs for IonPage</h1></ion-card-header>
			<ion-card-content>This intends to show the working of the IonPage component. This components the lifecycle
				hooks and proper animation for a page shown in your app. The following lifecycle hooks are
				provided for:
				<br>
				<pre>  ionViewWillEnter
  ionViewDidEnter
  ionViewWillLeave
  ionViewDidLeave
</pre>
				You can bind the hook using simple function binding.
				<pre>  ${escape(ionPageSyntax)}
</pre>

				Easy does it!
			</ion-card-content></ion-card></ion-content>`;
      }
    }
  )}`;
});
export {
  Page as default
};
