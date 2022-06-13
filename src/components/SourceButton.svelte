<script lang="ts">
  import {
    add,
    logoFacebook,
    logoTwitter,
    code,
    logoVimeo,
    logoGoogle,
    share,
  } from "ionicons/icons";
  import { modalController } from "$ionic/svelte";
  import SourceViewer from "$components/SourceViewer.svelte";

  export let name;
  const showSource = async () => {
    const modal = await modalController.create({
      component: SourceViewer,
      componentProps: { name },
    });
    await modal.present();
  };
</script>

<div on:click={showSource}>
  <ion-icon icon={code} />
</div>

<style>
  ion-icon {
    font-size: 200%;
  }
</style>
