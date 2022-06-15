<script lang="ts">
  import SourceButton from "$components/SourceButton.svelte";

  import {
    getPlatforms,
    isPlatform,
    height,
    width,
    isRTL,
    is,
    url,
    isPortrait,
    isLandscape,
    getQueryParam,
    toggleDarkTheme,
    prefersDark,
  } from "$ionic/svelte";

  let platforms: string[] = getPlatforms();

  const platformItems = {
    height: height(),
    width: width(),
    url: url(),
    isRTL: isRTL(),
    isPortrait: isPortrait(),
    isLandscape: isLandscape(),
    is_ios: is("ios"),
    isPlatform_ios: isPlatform("ios"),
    getQueryParam_stuff: getQueryParam("stuff"),
    prefersDark: $prefersDark,
  };

  $: platformItems.prefersDark = $prefersDark;

  const platformItemKeys = Object.keys(platformItems);

  const getRandomAvatar = () => {
    const ran = Date.now();
    return `https://www.gravatar.com/avatar/${ran}?d=monsterid&f=y`;
  };

  // not working  <ion-button on:click={toggleDark}>asdsads</ion-button>
  function toggleDark() {
    toggleDarkTheme(true);
  }
</script>

<svelte:head>
  <title>Ionic Companion - Platform</title>
</svelte:head>
<ion-header translucent="true">
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button />
    </ion-buttons>
    <ion-buttons slot="end">
      <SourceButton name="Platform" />
    </ion-buttons>
    <ion-title>Platform</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content fullscreen>
  <h1>Your platforms</h1>
  {#each platforms as platform}
    <ion-item>
      Platform : {platform}
    </ion-item>
  {/each}

  <h1>Platform methods</h1>
  {#each platformItemKeys as platformItemKey}
    <ion-item>
      <ion-avatar slot="start">
        <img alt="avatar" src={getRandomAvatar()} />
      </ion-avatar>
      <ion-label>
        <h2>{platformItemKey}</h2>
        <p>{platformItems[platformItemKey]}</p>
      </ion-label>
    </ion-item>
  {/each}

  Want to test query parameters?<br /><br /> Add
  <pre>&stuff=whatever</pre>
  to the url and then see the result!
</ion-content>
