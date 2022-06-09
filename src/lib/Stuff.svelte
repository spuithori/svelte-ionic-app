<svelte:options tag="ion-stuff" />

<script lang="ts">
  // import { fly } from "svelte/transition";
  import { fly } from "@auroratide/svelte-custom-element-transitions";
  import { onDestroy, onMount } from "svelte";

  import { onIonViewWillEnterStore } from "../services/ion-route-store";
  import { onIonViewDidEnterStore } from "../services/ion-route-store";
  import { onIonViewWillLeaveStore } from "../services/ion-route-store";
  import { onIonViewDidLeaveStore } from "../services/ion-route-store";

  export let onIonViewWillEnter = () => {};
  export let onIonViewDidEnter = () => {};
  export let onIonViewWillLeave = () => {};
  export let onIonViewDidLeave = () => {};

  export let route;

  const unsubscribeA = onIonViewWillEnterStore.subscribe((value) => {
    if (value === route) onIonViewWillEnter();
  });
  const unsubscribeB = onIonViewDidEnterStore.subscribe((value) => {
    if (value === route) onIonViewDidEnter();
  });

  const unsubscribeC = onIonViewWillLeaveStore.subscribe((value) => {
    if (value === route) onIonViewWillLeave();
  });

  const unsubscribeD = onIonViewDidLeaveStore.subscribe((value) => {
    if (value === route) onIonViewDidLeave();
  });

  onDestroy(() => {
    unsubscribeA();
    unsubscribeB();
    unsubscribeC();
    unsubscribeD();
  });

  onMount(() => {
    console.log("Route", route);
  });
</script>

<main in:fly={{ x: 200, duration: 250000 }} out:fly={{ x: 200, duration: 250 }}>
  <slot />
</main>
