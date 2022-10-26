import { c as create_ssr_component, d as add_attribute } from "./index.js";
import { code } from "ionicons/icons";
import "@ionic/core";
import "./platform.js";
import "localforage";
import "./IonPage.js";
const css = {
  code: "ion-icon.svelte-zvu0f6{font-size:200%}@keyframes svelte-zvu0f6-shadow-pulse{0%{box-shadow:0 0 0 0px rgba(0, 0, 0, 0.2)}100%{box-shadow:0 0 0 135px rgba(0, 0, 0, 0)}}.pulseSourceViewer.svelte-zvu0f6{border-radius:50%;animation:svelte-zvu0f6-shadow-pulse 1s infinite}",
  map: null
};
const SourceButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let pulseSourceViewer = false;
  setTimeout(
    () => {
      pulseSourceViewer = true;
      setTimeout(
        () => {
          pulseSourceViewer = false;
        },
        1e4
      );
    },
    2e4
  );
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  $$result.css.add(css);
  return `<div><ion-icon${add_attribute("icon", code, 0)} class="${["svelte-zvu0f6", pulseSourceViewer ? "pulseSourceViewer" : ""].join(" ").trim()}"></ion-icon>
</div>`;
});
export {
  SourceButton as S
};
