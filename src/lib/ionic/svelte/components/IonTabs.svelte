<script lang="ts">
  import { onMount } from "svelte";

  import * as ionIcons from "ionicons/icons";

  let ionTabBarElement;

  export let tabs;
  export let selected = undefined;
  export let ionTabsDidChange = (event) => {};
  export let ionNavWillLoad = (event) => {};
  export let ionTabsWillChange = (event) => {};

  console.log("Init IonTabs", tabs, selected);

  // ugly implmentation - to avoid present method not present
  // selected-tab does not seem to work
  // and select also does not
  const selectTab = async () => {
    // const controller = document.querySelector("ion-tabs") as HTMLIonTabsElement;
    let tries = 0;
    const controller = ionTabBarElement;
    if (controller && controller.select) {
      controller.select(selected);
      controller.setActive(selected);
    } else if (tries < 300) {
      setTimeout(() => {
        tries++;
        selectTab();
      }, 10);
    }
  };

  onMount(() => {
    if (selected) {
      setTimeout(() => {
        // console.log("asdasdsa", selected);
        selectTab();
      }, 4000);
    }
  });
</script>

<ion-tabs
  on:ionTabsDidChange={ionTabsDidChange}
  on:ionNavWillLoad={ionNavWillLoad}
  on:ionTabsWillChange={ionTabsWillChange}
>
  {#each tabs as tab}
    <ion-tab tab={tab.tab}>
      <svelte:component this={tab.component} />
    </ion-tab>
  {/each}

  <ion-tab-bar slot="bottom" selected-tab={selected} bind:this={ionTabBarElement}>
    {#each tabs as tab}
      <ion-tab-button tab={tab.tab}>
        <ion-label>{tab.label}</ion-label>
        <ion-icon icon={ionIcons[tab.icon]} />
      </ion-tab-button>
    {/each}
  </ion-tab-bar>
</ion-tabs>
