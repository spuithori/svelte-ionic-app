import { c as create_ssr_component, o as onDestroy } from "./index.js";
const SourceViewer_svelte_svelte_type_style_lang = "";
const SourceButton_svelte_svelte_type_style_lang = "";
const IonPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ionViewWillEnter = () => {
  } } = $$props;
  let { ionViewDidEnter = () => {
  } } = $$props;
  let { ionViewWillLeave = () => {
  } } = $$props;
  let { ionViewDidLeave = () => {
  } } = $$props;
  ionViewWillEnter();
  onDestroy(() => {
    ionViewDidLeave();
  });
  if ($$props.ionViewWillEnter === void 0 && $$bindings.ionViewWillEnter && ionViewWillEnter !== void 0)
    $$bindings.ionViewWillEnter(ionViewWillEnter);
  if ($$props.ionViewDidEnter === void 0 && $$bindings.ionViewDidEnter && ionViewDidEnter !== void 0)
    $$bindings.ionViewDidEnter(ionViewDidEnter);
  if ($$props.ionViewWillLeave === void 0 && $$bindings.ionViewWillLeave && ionViewWillLeave !== void 0)
    $$bindings.ionViewWillLeave(ionViewWillLeave);
  if ($$props.ionViewDidLeave === void 0 && $$bindings.ionViewDidLeave && ionViewDidLeave !== void 0)
    $$bindings.ionViewDidLeave(ionViewDidLeave);
  return `<div class="${"ion-page"}">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  IonPage as I
};
