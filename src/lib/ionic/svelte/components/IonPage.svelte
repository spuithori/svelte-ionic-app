<script lang="ts">
  import { fly } from "svelte/transition";

  import { onDestroy } from "svelte";

  import {
    onIonViewWillEnterStore,
    onIonViewDidEnterStore,
    onIonViewWillLeaveStore,
    onIonViewDidLeaveStore,
  } from "$ionic/svelte";

  export let onIonViewWillEnter = () => {};
  export let onIonViewDidEnter = () => {};
  export let onIonViewWillLeave = () => {};
  export let onIonViewDidLeave = () => {};

  export let route = undefined;

  const unsubscribeA = onIonViewWillEnterStore.subscribe((value) => {
    if (route && value === route) onIonViewWillEnter();
  });
  const unsubscribeB = onIonViewDidEnterStore.subscribe((value) => {
    if (route && value === route) onIonViewDidEnter();
  });

  const unsubscribeC = onIonViewWillLeaveStore.subscribe((value) => {
    if (route && value === route) onIonViewWillLeave();
  });

  const unsubscribeD = onIonViewDidLeaveStore.subscribe((value) => {
    if (route && value === route) onIonViewDidLeave();
  });

  onDestroy(() => {
    unsubscribeA();
    unsubscribeB();
    unsubscribeC();
    unsubscribeD();
  });
</script>

<main in:fly={{ x: 100, duration: 250 }}>
  <slot />
</main>
