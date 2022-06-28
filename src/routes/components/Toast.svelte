<script lang="ts">
  import { toastController } from "$ionic/svelte";

  import SourceButton from "$components/SourceButton.svelte";

  const showToast = async () => {
    const toast = await toastController.create({
      color: "danger",
      duration: 4000,
      message: "Here a random toast",
      // showCloseButton: true,
    });

    toast.present();
  };
</script>

<svelte:head>
  <title>Ionic Companion - Toast</title>
</svelte:head>
<ion-header translucent="true">
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button />
    </ion-buttons>
    <ion-buttons slot="end">
      <SourceButton name="Toast" />
    </ion-buttons>
    <ion-title>Toast</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content fullscreen class="ion-padding">
  <ion-button expand="block" on:click={showToast}>Show Toast</ion-button>
</ion-content>
