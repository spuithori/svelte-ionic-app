import { c as create_ssr_component, d as add_attribute, e as each, v as validate_component, m as missing_component, f as escape } from "../../../../../chunks/index.js";
import * as allIonicIcons from "ionicons/icons";
import Page$1 from "../../Controllers/_page.svelte.js";
import { M as Music } from "../../../../../chunks/Music.js";
import { S as SourceButton } from "../../../../../chunks/SourceButton.js";
const IonTabs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ionTabBarElement;
  let { tabs } = $$props;
  let { selected = void 0 } = $$props;
  let { ionTabsDidChange = (event) => {
  } } = $$props;
  let { ionNavWillLoad = (event) => {
  } } = $$props;
  let { ionTabsWillChange = (event) => {
  } } = $$props;
  let { slot = "bottom" } = $$props;
  if ($$props.tabs === void 0 && $$bindings.tabs && tabs !== void 0)
    $$bindings.tabs(tabs);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.ionTabsDidChange === void 0 && $$bindings.ionTabsDidChange && ionTabsDidChange !== void 0)
    $$bindings.ionTabsDidChange(ionTabsDidChange);
  if ($$props.ionNavWillLoad === void 0 && $$bindings.ionNavWillLoad && ionNavWillLoad !== void 0)
    $$bindings.ionNavWillLoad(ionNavWillLoad);
  if ($$props.ionTabsWillChange === void 0 && $$bindings.ionTabsWillChange && ionTabsWillChange !== void 0)
    $$bindings.ionTabsWillChange(ionTabsWillChange);
  if ($$props.slot === void 0 && $$bindings.slot && slot !== void 0)
    $$bindings.slot(slot);
  return `<ion-tabs${add_attribute("this", ionTabBarElement, 0)}>${each(tabs, (tab) => {
    return `<ion-tab${add_attribute("tab", tab.tab, 0)}>${validate_component(tab.component || missing_component, "svelte:component").$$render($$result, {}, {}, {})}
    </ion-tab>`;
  })}

  ${slot === "bottom" || slot === "" ? `<ion-tab-bar slot="${"bottom"}"${add_attribute("selected-tab", selected, 0)}>${each(tabs, (tab) => {
    return `<ion-tab-button${add_attribute("tab", tab.tab, 0)}><ion-label>${escape(tab.label)}</ion-label>
          <ion-icon${add_attribute("icon", allIonicIcons[tab.icon], 0)}></ion-icon>
        </ion-tab-button>`;
  })}</ion-tab-bar>` : ``}

  ${slot === "top" ? `<ion-tab-bar slot="${"top"}"${add_attribute("selected-tab", selected, 0)}>${each(tabs, (tab) => {
    return `<ion-tab-button${add_attribute("tab", tab.tab, 0)}><ion-label>${escape(tab.label)}</ion-label>
          <ion-icon${add_attribute("icon", allIonicIcons[tab.icon], 0)}></ion-icon>
        </ion-tab-button>`;
  })}</ion-tab-bar>` : ``}</ion-tabs>`;
});
const TabsExplain = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Ionic Companion - Tabs Explain</title>`, ""}`, ""}

<ion-header translucent="${"true"}"><ion-toolbar><ion-buttons slot="${"start"}"><ion-menu-button></ion-menu-button></ion-buttons>
    <ion-title>Explanation</ion-title>
    <ion-buttons slot="${"end"}">${validate_component(SourceButton, "SourceButton").$$render($$result, { name: "tabs" }, {}, {})}</ion-buttons></ion-toolbar></ion-header>

<ion-content fullscreen class="${"ion-padding"}"><h1>Explanation of TABS</h1>
  <p>So, ionic tabs are working pretty ok.</p>
  <p>There are now two non-blocking issues: you have to use IonTabs component to render tab
    interface. This seems doable, but not according to Ionic docs.
  </p>
  <p>Second issue is that the selected-tab property does not work out-of-the box. A workaround is
    implemented which requires an Ionic update. So out of control for me.
  </p></ion-content>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log("Receiving slug data in [tab]", data);
  const tab = data.tab;
  const myTabs = [
    {
      label: "Explain",
      icon: "pin",
      tab: "explain",
      component: TabsExplain
    },
    {
      label: "Controllers",
      icon: "videocam",
      tab: "controllers",
      component: Page$1
    },
    {
      label: "Blabla",
      icon: "musicalNote",
      tab: "blabla",
      component: Music
    }
  ];
  console.log("Tabs", tab, myTabs);
  const logStuff = (event) => {
    var _a;
    console.log(">", (_a = event == null ? void 0 : event.detail) == null ? void 0 : _a.tab, event == null ? void 0 : event.type);
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(IonTabs, "IonTab").$$render(
    $$result,
    {
      slot: "bottom",
      tabs: myTabs,
      selected: tab,
      ionTabsWillChange: logStuff,
      ionNavWillLoad: logStuff,
      ionTabsDidChange: logStuff
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
