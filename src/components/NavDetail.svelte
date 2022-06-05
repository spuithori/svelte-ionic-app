<script>
  import IonBackButton from "./IonBackButton.svelte";

  const nav = document.querySelector("ion-nav");
  const tech = document.querySelector("nav-detail")["tech"];

  const popWindow = () => {
    nav.pop();
  };
</script>

<svelte:head>
  <title>Ionic Companion - NavDetail</title>
</svelte:head>
<ion-header translucent="true">
  <ion-toolbar>
    <ion-buttons slot="start">
      <ionBackButton />
    </ion-buttons>
    <ion-title>{tech.title}</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content fullscreen class="ion-padding">
  <in-icon name={"logo-" + tech.icon} style="color: {tech.color}" size="large" />
  <p>{tech.description}</p>
</ion-content>
