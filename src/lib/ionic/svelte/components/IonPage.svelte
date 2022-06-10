<script lang="ts">
  import { fly } from "svelte/transition";

  import { onDestroy } from "svelte";

  import {
    onIonViewWillEnterStore,
    onIonViewDidEnterStore,
    onIonViewWillLeaveStore,
    onIonViewDidLeaveStore,
  } from "$lib/ionic/svelte/router-runtime/ion-router-store";

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

  //out:fly={{ x: 200, duration: 250 }}
</script>

<main in:fly={{ x: 200, duration: 250 }}>
  <slot />
</main>
