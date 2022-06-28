<script lang="ts">
  import { loadingController } from "$ionic/svelte";

  import SourceButton from "$components/SourceButton.svelte";

  const showLoading = async () => {
    const options = {
      message: "Please wait......",
      duration: 30000,
    };

    const loading = await loadingController.create(options);
    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  };
</script>

<svelte:head>
  <title>Ionic Companion - Loading</title>
</svelte:head>
<ion-header translucent="true">
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button />
    </ion-buttons>
    <ion-buttons slot="end">
      <SourceButton name="Loading" />
    </ion-buttons>
    <ion-title>Loading</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content fullscreen class="ion-padding">
  <ion-button expand="block" on:click={showLoading}>Show Loading</ion-button>
</ion-content>
