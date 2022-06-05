<script>
  import { defineComponent } from "../services/IonicSvelte";

  const isRegistered = function (name) {
    return document.createElement(name).constructor !== HTMLElement;
  };

  const registerWebComponentOnce = (selector, component) => {
    if (!isRegistered(selector)) {
      defineComponent(selector, component);
    }
  };

  export let component;
  export let animated = undefined;
  export let animation = undefined;
  export let root;
  export let rootParams = undefined;
  export let swipeGesture = undefined;

  registerWebComponentOnce(root, component);
</script>

<ion-nav
  on:ionNavDidChange
  on:ionNavWillChange
  {root}
  {animated}
  {animation}
  {rootParams}
  {swipeGesture}
/>
