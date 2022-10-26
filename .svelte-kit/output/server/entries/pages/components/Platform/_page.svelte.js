import { c as create_ssr_component, a as subscribe, v as validate_component, e as each, d as add_attribute, f as escape } from "../../../../chunks/index.js";
import { S as SourceButton } from "../../../../chunks/SourceButton.js";
import "@ionic/core";
import { p as prefersDark, k as keydown, r as resize, g as getPlatforms, h as height, w as width, u as url, i as isRTL, a as isPortrait, b as isLandscape, c as is, d as isPlatform, e as getQueryParam } from "../../../../chunks/platform.js";
import { I as IonPage } from "../../../../chunks/IonPage.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $prefersDark, $$unsubscribe_prefersDark;
  let $keydown, $$unsubscribe_keydown;
  let $resize, $$unsubscribe_resize;
  $$unsubscribe_prefersDark = subscribe(prefersDark, (value) => $prefersDark = value);
  $$unsubscribe_keydown = subscribe(keydown, (value) => $keydown = value);
  $$unsubscribe_resize = subscribe(resize, (value) => $resize = value);
  let platforms = getPlatforms();
  const platformItems = {
    height: height(),
    width: width(),
    url: url(),
    isRTL: isRTL(),
    isPortrait: isPortrait(),
    isLandscape: isLandscape(),
    is_ios: is("ios"),
    isPlatform_ios: isPlatform("ios"),
    getQueryParam_stuff: getQueryParam("stuff"),
    prefersDark: $prefersDark
  };
  const platformItemKeys = Object.keys(platformItems);
  const getRandomAvatar = () => {
    const ran = Math.round(Date.now() * Math.random());
    return `https://www.gravatar.com/avatar/${ran}?d=monsterid&f=y`;
  };
  platformItems.prefersDark = $prefersDark;
  $$unsubscribe_prefersDark();
  $$unsubscribe_keydown();
  $$unsubscribe_resize();
  return `${$$result.head += `${$$result.title = `<title>Ionic Companion - Platform</title>`, ""}`, ""}

${validate_component(IonPage, "IonPage").$$render($$result, {}, {}, {
    default: () => {
      return `<ion-header translucent="${"true"}"><ion-toolbar><ion-buttons slot="${"start"}"><ion-menu-button></ion-menu-button></ion-buttons>
			<ion-buttons slot="${"end"}">${validate_component(SourceButton, "SourceButton").$$render($$result, { name: "Platform" }, {}, {})}</ion-buttons>
			<ion-title>Platform</ion-title></ion-toolbar></ion-header>

	<ion-content fullscreen class="${"ion-padding"}"><h1>Your platforms</h1>
		${each(platforms, (platform) => {
        return `<ion-item>Platform : ${escape(platform)}
			</ion-item>`;
      })}

		<h1>Platform methods</h1>
		${each(platformItemKeys, (platformItemKey) => {
        return `<ion-item><ion-avatar slot="${"start"}"><img alt="${"avatar"}"${add_attribute("src", getRandomAvatar(), 0)}></ion-avatar>
				<ion-label><h2>${escape(platformItemKey)}</h2>
					<p>${escape(platformItems[platformItemKey])}</p></ion-label>
			</ion-item>`;
      })}

		<ion-item><ion-avatar slot="${"start"}"><img alt="${"avatar"}"${add_attribute("src", getRandomAvatar(), 0)}></ion-avatar>
			<ion-label><h2>Want to test query parameters?</h2>
				<p>Add</p>
				<pre>&amp;stuff=whatever</pre>
				<p>to the url and then see the result!.</p></ion-label></ion-item>

		<ion-item><ion-avatar slot="${"start"}"><img alt="${"avatar"}"${add_attribute("src", getRandomAvatar(), 0)}></ion-avatar>
			<ion-label><h2>Event handler: keydown</h2>
				<p>Press some keys and see result:${escape($keydown)}</p></ion-label></ion-item>

		<ion-item><ion-avatar slot="${"start"}"><img alt="${"avatar"}"${add_attribute("src", getRandomAvatar(), 0)}></ion-avatar>
			<ion-label><h2>Event handler: reisze</h2>
				<p>Resize the window - timestamp: ${escape($resize)}</p></ion-label></ion-item>

		<ion-item><ion-avatar slot="${"start"}"><img alt="${"avatar"}"${add_attribute("src", getRandomAvatar(), 0)}></ion-avatar>
			<ion-label class="${"ion-text-wrap"}"><h2>Please check platform.ts for other methods and stuff in there. There are readable stores
					for some key events on document and window (resize, pause, resume etc).
				</h2></ion-label></ion-item></ion-content>`;
    }
  })}`;
});
export {
  Page as default
};
