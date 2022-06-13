<script lang="ts">
  import { IonItemSliding } from "@ionic/core/components/ion-item-sliding";
  import type {
    // TYPES
    MenuI,
    ModalOptions,
  } from "@ionic/core";

  // DEBUGGING IonSlidingItem - not working....

  import { onMount } from "svelte";

  let slidingElement;

  onMount(() => {
    const p = document.getElementById("slider") as HTMLIonItemSlidingElement;
    console.log("aasdsa", IonItemSliding, slidingElement, slidingElement.open, p);
    console.log("asdasd", p, p.open("start"), p.ionDrag);
    p.open("start").then((x) => {
      console.log("sssss", x);
    });
  });
</script>

<ion-list>
  <ion-item-sliding bind:this={slidingElement} id="slider">
    <ion-item>
      <ion-label>New Message - THIS IS NOT SLIDING!!!</ion-label>
    </ion-item>

    <ion-item-options side="start">
      <ion-item-option color="primary">Mark Unread</ion-item-option>
    </ion-item-options>

    <ion-item-options side="end">
      <ion-item-option color="danger">Delete</ion-item-option>
    </ion-item-options>
  </ion-item-sliding>
</ion-list>
