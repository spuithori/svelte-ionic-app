<script lang="ts">
  import { fly } from "svelte/transition";

  import { onDestroy, onMount } from "svelte";
  import { beforeUrlChange } from "@roxi/routify";

  export let ionViewWillEnter = () => {};
  export let ionViewDidEnter = () => {};
  export let ionViewWillLeave = () => {};
  export let ionViewDidLeave = () => {};

  ionViewWillEnter();

  $beforeUrlChange(() => {
    ionViewWillLeave();
    return true;
  });

  onMount(() => {
    ionViewDidEnter();
  });

  onDestroy(() => {
    ionViewDidLeave();
  });

  /*
  <main in:fly={{ x: 100, duration: 250 }}>
 <slot />
</main>

This clips the content - found when migrating Conference starter.
  */
</script>

<main in:fly={{ x: 100, duration: 250 }}>
  <slot />
</main>
