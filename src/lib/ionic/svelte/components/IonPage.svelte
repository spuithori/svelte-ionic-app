<script lang="ts">
  import { fly } from "svelte/transition";

  import { onDestroy, onMount } from "svelte";
  import { beforeUrlChange } from "@roxi/routify";

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

  export let route;

  $: if (route) onIonViewWillEnterStore.set(route);

  $beforeUrlChange(() => {
    // console.log("beforeUrlChange", route);
    if (route) onIonViewWillLeaveStore.set(route);
    return true;
  });

  onMount(() => {
    //  console.log("onMount", route);
    if (route) onIonViewDidEnterStore.set(route);
  });

  onDestroy(() => {
    // console.log("onDestroy", route);
    if (route) onIonViewDidLeaveStore.set(route);
    unsubscribeA();
    unsubscribeB();
    unsubscribeC();
    unsubscribeD();
  });

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
</script>

<main in:fly={{ x: 100, duration: 250 }}>
  <slot />
</main>
