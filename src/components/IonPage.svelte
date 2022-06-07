<script lang="ts">
  import { fly } from "svelte/transition";

  import { onDestroy } from "svelte";

  import { onionViewWillEnterStore } from "../services/ion-route-store";
  import { onionViewDidEnterStore } from "../services/ion-route-store";
  import { onionViewWillLeaveStore } from "../services/ion-route-store";
  import { onionViewDidLeaveStore } from "../services/ion-route-store";

  export let onionViewWillEnter = () => {};
  export let onionViewDidEnter = () => {};
  export let onionViewWillLeave = () => {};
  export let onionViewDidLeave = () => {};

  export let route;

  const unsubscribeA = onionViewWillEnterStore.subscribe((value) => {
    if (value === route) onionViewWillEnter();
  });
  const unsubscribeB = onionViewDidEnterStore.subscribe((value) => {
    if (value === route) onionViewDidEnter();
  });

  const unsubscribeC = onionViewWillLeaveStore.subscribe((value) => {
    if (value === route) onionViewWillLeave();
  });

  const unsubscribeD = onionViewDidLeaveStore.subscribe((value) => {
    if (value === route) onionViewDidLeave();
  });

  onDestroy(() => {
    unsubscribeA();
    unsubscribeB();
    unsubscribeC();
    unsubscribeD();
  });
</script>

<main in:fly={{ x: 200, duration: 250 }} out:fly={{ x: 200, duration: 250 }}>
  <slot />
</main>
