<script lang="ts">
  import { getPlatforms, isPlatform } from "@ionic/core";

  let platforms: string[] = getPlatforms();
  let isOnIOS = isPlatform("ios");
  //  console.log("asdas", getPlatforms(), isPlatform("ios"));
</script>

<svelte:head>
  <title>Ionic Companion - Platform</title>
</svelte:head>
<ion-header translucent="true">
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button />
    </ion-buttons>
    <ion-title>Platform</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content fullscreen>
  <h1>Your platforms</h1>
  {#each platforms as xxx}
    <ion-item>
      Platform : {xxx}
    </ion-item>
  {/each}

  <h1>You are on iOS?</h1>
  <ion-item>
    {isOnIOS ? "yes" : "no"}
  </ion-item>
</ion-content>
