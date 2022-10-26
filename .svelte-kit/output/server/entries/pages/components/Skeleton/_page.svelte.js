import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { S as SourceButton } from "../../../../chunks/SourceButton.js";
import { I as IonPage } from "../../../../chunks/IonPage.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".show.svelte-1v9b77r{display:block}.hide.svelte-1v9b77r{display:none}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { toggle = false } = $$props;
  if ($$props.toggle === void 0 && $$bindings.toggle && toggle !== void 0)
    $$bindings.toggle(toggle);
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Ionic Companion - Skeleton</title>`, ""}`, ""}

${validate_component(IonPage, "IonPage").$$render($$result, {}, {}, {
    default: () => {
      return `<ion-header translucent="${"true"}"><ion-toolbar><ion-buttons slot="${"start"}"><ion-menu-button></ion-menu-button></ion-buttons>
			<ion-buttons slot="${"end"}">${validate_component(SourceButton, "SourceButton").$$render($$result, { name: "Skeleton" }, {}, {})}</ion-buttons>
			<ion-title>Skeleton Text</ion-title>
			<ion-buttons slot="${"primary"}"><ion-button>Toggle</ion-button></ion-buttons></ion-toolbar></ion-header>

	<ion-content><ion-list class="${["svelte-1v9b77r", (toggle ? "show" : "") + " " + (!toggle ? "hide" : "")].join(" ").trim()}"><ion-list-header>Albums</ion-list-header>
			<ion-item><ion-thumbnail slot="${"start"}"><img alt="${"img"}" src="${"../assets/img/ionic/thebeatles.jpeg"}"></ion-thumbnail>
				<ion-label><h3>Abbey Road</h3>
					<p>The Beatles</p>
					<p>1969</p></ion-label></ion-item>
			<ion-item><ion-thumbnail slot="${"start"}"><img alt="${"img"}" src="${"../assets/img/ionic/pinkfloyd.jpeg"}"></ion-thumbnail>
				<ion-label><h3>The Dark Side of the Moon</h3>
					<p>Pink Floyd</p>
					<p>1973</p></ion-label></ion-item>
			<ion-item><ion-thumbnail slot="${"start"}"><img alt="${"img"}" src="${"../assets/img/ionic/boniver.jpeg"}"></ion-thumbnail>
				<ion-label><h3>For Emma, Forever Ago</h3>
					<p>Bon Iver</p>
					<p>2008</p></ion-label></ion-item>
			<ion-item><ion-thumbnail slot="${"start"}"><img alt="${"img"}" src="${"../assets/img/ionic/ironwine.jpeg"}"></ion-thumbnail>
				<ion-label><h3>Beast Epic</h3>
					<p>Iron &amp; Wine</p>
					<p>2017</p></ion-label></ion-item>
			<ion-item><ion-thumbnail slot="${"start"}"><img alt="${"img"}" src="${"../assets/img/ionic/porterrobinson.jpeg"}"></ion-thumbnail>
				<ion-label><h3>Worlds</h3>
					<p>Porter Robinson</p>
					<p>2014</p></ion-label></ion-item>
			<ion-item><ion-thumbnail slot="${"start"}"><img alt="${"img"}" src="${"../assets/img/ionic/childishgambino.jpeg"}"></ion-thumbnail>
				<ion-label><h3>Worlds</h3>
					<p>Awaken, My Love!</p>
					<p>2016</p></ion-label></ion-item>
			<ion-item><ion-thumbnail slot="${"start"}"><img alt="${"img"}" src="${"../assets/img/ionic/chancetherapper.jpeg"}"></ion-thumbnail>
				<ion-label><h3>Coloring Book</h3>
					<p>Chance the Rapper</p>
					<p>2016</p></ion-label></ion-item>
			<ion-item><ion-thumbnail slot="${"start"}"><img alt="${"img"}" src="${"../assets/img/ionic/kimbra.jpeg"}"></ion-thumbnail>
				<ion-label><h3>Primal Heart</h3>
					<p>Kimbra</p>
					<p>2018</p></ion-label></ion-item></ion-list>
		<ion-list class="${["svelte-1v9b77r", (!toggle ? "show" : "") + " " + (toggle ? "hide" : "")].join(" ").trim()}"><ion-list-header><ion-skeleton-text animated style="${"width: 80px"}"></ion-skeleton-text></ion-list-header>
			<ion-item><ion-thumbnail slot="${"start"}"><ion-skeleton-text></ion-skeleton-text></ion-thumbnail>
				<ion-label><h3><ion-skeleton-text animated style="${"width: 80%"}"></ion-skeleton-text></h3>
					<p><ion-skeleton-text animated style="${"width: 60%"}"></ion-skeleton-text></p>
					<p><ion-skeleton-text animated style="${"width: 30%"}"></ion-skeleton-text></p></ion-label></ion-item>
			<ion-item><ion-thumbnail slot="${"start"}"><ion-skeleton-text></ion-skeleton-text></ion-thumbnail>
				<ion-label><h3><ion-skeleton-text animated style="${"width: 80%"}"></ion-skeleton-text></h3>
					<p><ion-skeleton-text animated style="${"width: 60%"}"></ion-skeleton-text></p>
					<p><ion-skeleton-text animated style="${"width: 30%"}"></ion-skeleton-text></p></ion-label></ion-item>
			<ion-item><ion-thumbnail slot="${"start"}"><ion-skeleton-text></ion-skeleton-text></ion-thumbnail>
				<ion-label><h3><ion-skeleton-text animated style="${"width: 80%"}"></ion-skeleton-text></h3>
					<p><ion-skeleton-text animated style="${"width: 60%"}"></ion-skeleton-text></p>
					<p><ion-skeleton-text animated style="${"width: 30%"}"></ion-skeleton-text></p></ion-label></ion-item>
			<ion-item><ion-thumbnail slot="${"start"}"><ion-skeleton-text></ion-skeleton-text></ion-thumbnail>
				<ion-label><h3><ion-skeleton-text animated style="${"width: 80%"}"></ion-skeleton-text></h3>
					<p><ion-skeleton-text animated style="${"width: 60%"}"></ion-skeleton-text></p>
					<p><ion-skeleton-text animated style="${"width: 30%"}"></ion-skeleton-text></p></ion-label></ion-item>
			<ion-item><ion-thumbnail slot="${"start"}"><ion-skeleton-text></ion-skeleton-text></ion-thumbnail>
				<ion-label><h3><ion-skeleton-text animated style="${"width: 80%"}"></ion-skeleton-text></h3>
					<p><ion-skeleton-text animated style="${"width: 60%"}"></ion-skeleton-text></p>
					<p><ion-skeleton-text animated style="${"width: 30%"}"></ion-skeleton-text></p></ion-label></ion-item>
			<ion-item><ion-thumbnail slot="${"start"}"><ion-skeleton-text></ion-skeleton-text></ion-thumbnail>
				<ion-label><h3><ion-skeleton-text animated style="${"width: 80%"}"></ion-skeleton-text></h3>
					<p><ion-skeleton-text animated style="${"width: 60%"}"></ion-skeleton-text></p>
					<p><ion-skeleton-text animated style="${"width: 30%"}"></ion-skeleton-text></p></ion-label></ion-item>
			<ion-item><ion-thumbnail slot="${"start"}"><ion-skeleton-text></ion-skeleton-text></ion-thumbnail>
				<ion-label><h3><ion-skeleton-text animated style="${"width: 80%"}"></ion-skeleton-text></h3>
					<p><ion-skeleton-text animated style="${"width: 60%"}"></ion-skeleton-text></p>
					<p><ion-skeleton-text animated style="${"width: 30%"}"></ion-skeleton-text></p></ion-label></ion-item>
			<ion-item><ion-thumbnail slot="${"start"}"><ion-skeleton-text></ion-skeleton-text></ion-thumbnail>
				<ion-label><h3><ion-skeleton-text animated style="${"width: 80%"}"></ion-skeleton-text></h3>
					<p><ion-skeleton-text animated style="${"width: 60%"}"></ion-skeleton-text></p>
					<p><ion-skeleton-text animated style="${"width: 30%"}"></ion-skeleton-text></p></ion-label></ion-item></ion-list></ion-content>`;
    }
  })}`;
});
export {
  Page as default
};
