<script>
  import Avatars from "../components/Avatars.svelte";
  import Badges from "../components/Badge.svelte";
  import Buttons from "../components/Button.svelte";
  import Cards from "../components/Card.svelte";
  import Checkbox from "../components/Checkbox.svelte";
  import Chip from "../components/Chip.svelte";
  import Fab from "../components/Fab.svelte";
  import Grid from "../components/Grid.svelte";

  import {
    add,
    caretBack,
    caretUp,
    caretForward,
    logoFacebook,
    logoTwitter,
    logoVimeo,
    logoGoogle,
    share,
  } from "ionicons/icons";
</script>

<ion-header translucent="true">
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button />
    </ion-buttons>
    <ion-title>Badges</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <main>
    <Avatars />
    <Chip />
    <Cards />
    <h1>Not working</h1>
    <Badges />
  

    <Checkbox />

    <Grid />
    <h1>Working</h1>
    <Buttons />
  </main>
</ion-content>
