import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../../chunks/index.js";
import { home, folder, arrowForward } from "ionicons/icons";
import { S as SourceButton } from "../../../../chunks/SourceButton.js";
import { I as IonPage } from "../../../../chunks/IonPage.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--ion-safe-area-top:20px;--ion-safe-area-bottom:22px}ion-content.svelte-y509bw{--background:#f2f2f7}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let expandBreadcrumb;
  let popoverBreadcrumb;
  let popover;
  $$result.css.add(css);
  return `${validate_component(IonPage, "IonPage").$$render($$result, {}, {}, {
    default: () => {
      return `<ion-header translucent="${"true"}"><ion-toolbar><ion-buttons slot="${"start"}"><ion-menu-button></ion-menu-button></ion-buttons>
			<ion-buttons slot="${"end"}">${validate_component(SourceButton, "SourceButton").$$render($$result, { name: "Breadcrumb" }, {}, {})}</ion-buttons>
			<ion-title>Breadcrumb</ion-title></ion-toolbar></ion-header>

	<ion-content fullscreen class="${"svelte-y509bw"}"><ion-list inset="${"true"}"><ion-list-header>Basic</ion-list-header>
			<ion-breadcrumbs><ion-breadcrumb href="${"#"}">Home </ion-breadcrumb>
				<ion-breadcrumb href="${"#electronics"}">Electronics </ion-breadcrumb>
				<ion-breadcrumb href="${"#photography"}">Photography </ion-breadcrumb></ion-breadcrumbs></ion-list>

		<ion-list inset="${"true"}"><ion-list-header>Colors</ion-list-header>
			<ion-breadcrumbs color="${"secondary"}"><ion-breadcrumb href="${"#"}">Home </ion-breadcrumb>
				<ion-breadcrumb href="${"#electronics"}">Electronics </ion-breadcrumb>
				<ion-breadcrumb href="${"#photography"}">Photography </ion-breadcrumb></ion-breadcrumbs></ion-list>

		<ion-list inset="${"true"}"><ion-list-header>Icons - Start</ion-list-header>
			<ion-breadcrumbs><ion-breadcrumb href="${"#"}"><ion-icon slot="${"start"}"${add_attribute("icon", home, 0)}></ion-icon>
					Home
				</ion-breadcrumb>
				<ion-breadcrumb href="${"#files"}"><ion-icon slot="${"start"}"${add_attribute("icon", folder, 0)}></ion-icon>
					Files
				</ion-breadcrumb>
				<ion-breadcrumb href="${"#projects"}"><ion-icon slot="${"start"}"${add_attribute("icon", folder, 0)}></ion-icon>
					Projects
				</ion-breadcrumb></ion-breadcrumbs></ion-list>

		<ion-list inset="${"true"}"><ion-list-header>Icons - End</ion-list-header>
			<ion-breadcrumbs><ion-breadcrumb href="${"#"}">Home <ion-icon slot="${"end"}"${add_attribute("icon", home, 0)}></ion-icon></ion-breadcrumb>
				<ion-breadcrumb href="${"#files"}">Files <ion-icon slot="${"end"}"${add_attribute("icon", folder, 0)}></ion-icon></ion-breadcrumb>
				<ion-breadcrumb href="${"#projects"}">Projects <ion-icon slot="${"end"}"${add_attribute("icon", folder, 0)}></ion-icon></ion-breadcrumb></ion-breadcrumbs></ion-list>

		<ion-list inset="${"true"}"><ion-list-header>Custom Separator - Icon</ion-list-header>
			<ion-breadcrumbs><ion-breadcrumb href="${"#"}">Home
					<ion-icon slot="${"separator"}"${add_attribute("icon", arrowForward, 0)}></ion-icon></ion-breadcrumb>
				<ion-breadcrumb href="${"#electronics"}">Electronics
					<ion-icon slot="${"separator"}"${add_attribute("icon", arrowForward, 0)}></ion-icon></ion-breadcrumb>
				<ion-breadcrumb href="${"#photography"}">Photography
					<ion-icon slot="${"separator"}"${add_attribute("icon", arrowForward, 0)}></ion-icon></ion-breadcrumb></ion-breadcrumbs></ion-list>

		<ion-list inset="${"true"}"><ion-list-header>Max Items</ion-list-header>
			<ion-breadcrumbs max-items="${"4"}"><ion-breadcrumb href="${"#"}">Home </ion-breadcrumb>
				<ion-breadcrumb href="${"#electronics"}">Electronics </ion-breadcrumb>
				<ion-breadcrumb href="${"#photography"}">Photography </ion-breadcrumb>
				<ion-breadcrumb href="${"#cameras"}">Cameras </ion-breadcrumb>
				<ion-breadcrumb href="${"#film"}">Film </ion-breadcrumb>
				<ion-breadcrumb>35 mm </ion-breadcrumb></ion-breadcrumbs></ion-list>

		<ion-list inset="${"true"}"><ion-list-header>Items Before Collapse</ion-list-header>
			<ion-breadcrumbs max-items="${"4"}" items-before-collapse="${"2"}"><ion-breadcrumb href="${"#"}">Home </ion-breadcrumb>
				<ion-breadcrumb href="${"#electronics"}">Electronics </ion-breadcrumb>
				<ion-breadcrumb href="${"#photography"}">Photography </ion-breadcrumb>
				<ion-breadcrumb href="${"#cameras"}">Cameras </ion-breadcrumb>
				<ion-breadcrumb href="${"#film"}">Film </ion-breadcrumb>
				<ion-breadcrumb>35 mm </ion-breadcrumb></ion-breadcrumbs></ion-list>

		<ion-list inset="${"true"}"><ion-list-header>Items After Collapse</ion-list-header>
			<ion-breadcrumbs max-items="${"4"}" items-after-collapse="${"3"}"><ion-breadcrumb href="${"#"}">Home </ion-breadcrumb>
				<ion-breadcrumb href="${"#electronics"}">Electronics </ion-breadcrumb>
				<ion-breadcrumb href="${"#photography"}">Photography </ion-breadcrumb>
				<ion-breadcrumb href="${"#cameras"}">Cameras </ion-breadcrumb>
				<ion-breadcrumb href="${"#film"}">Film </ion-breadcrumb>
				<ion-breadcrumb>35 mm </ion-breadcrumb></ion-breadcrumbs></ion-list>

		<ion-list inset="${"true"}"><ion-list-header>Items Before And After Collapse</ion-list-header>
			<ion-breadcrumbs max-items="${"4"}" items-before-collapse="${"0"}" items-after-collapse="${"3"}"><ion-breadcrumb href="${"#"}">Home </ion-breadcrumb>
				<ion-breadcrumb href="${"#electronics"}">Electronics </ion-breadcrumb>
				<ion-breadcrumb href="${"#photography"}">Photography </ion-breadcrumb>
				<ion-breadcrumb href="${"#cameras"}">Cameras </ion-breadcrumb>
				<ion-breadcrumb href="${"#film"}">Film </ion-breadcrumb>
				<ion-breadcrumb>35 mm </ion-breadcrumb></ion-breadcrumbs></ion-list>

		<ion-list inset="${"true"}"><ion-list-header>Expand on Collapsed Indicator Click</ion-list-header>
			<ion-breadcrumbs id="${"expand"}"${add_attribute("this", expandBreadcrumb, 0)}><ion-breadcrumb href="${"#"}">Home </ion-breadcrumb>
				<ion-breadcrumb href="${"#electronics"}">Electronics </ion-breadcrumb>
				<ion-breadcrumb href="${"#photography"}">Photography </ion-breadcrumb>
				<ion-breadcrumb href="${"#cameras"}">Cameras </ion-breadcrumb>
				<ion-breadcrumb href="${"#film"}">Film </ion-breadcrumb>
				<ion-breadcrumb>35 mm </ion-breadcrumb></ion-breadcrumbs>

			<ion-popover alignment="${"center"}"${add_attribute("this", popover, 0)}><ion-content class="${"svelte-y509bw"}"><ion-list><ion-item href="${"#electronics"}"><ion-label>Electronics</ion-label></ion-item>
						<ion-item href="${"#photography"}"><ion-label>Photography</ion-label></ion-item>
						<ion-item href="${"#cameras"}"><ion-label>Cameras</ion-label></ion-item>
						<ion-item href="${"#film"}"><ion-label>Film</ion-label></ion-item></ion-list></ion-content></ion-popover></ion-list>

		<ion-list inset="${"true"}"><ion-list-header>Popover on Collapsed Indicator Click</ion-list-header>
			<ion-breadcrumbs max-items="${"4"}" id="${"popover"}"${add_attribute("this", popoverBreadcrumb, 0)}><ion-breadcrumb href="${"#"}">Home </ion-breadcrumb>
				<ion-breadcrumb href="${"#electronics"}">Electronics </ion-breadcrumb>
				<ion-breadcrumb href="${"#photography"}">Photography </ion-breadcrumb>
				<ion-breadcrumb href="${"#cameras"}">Cameras </ion-breadcrumb>
				<ion-breadcrumb href="${"#film"}">Film </ion-breadcrumb>
				<ion-breadcrumb>35 mm </ion-breadcrumb></ion-breadcrumbs></ion-list></ion-content>`;
    }
  })}`;
});
export {
  Page as default
};
