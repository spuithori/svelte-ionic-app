<script lang="ts">
  import IonTab from "$ionic/svelte/components/IonTab.svelte";

  import Controllers from "../Controllers.svelte";
  import Music from "$components/Music.svelte";
  import Splash from "$components/SomeOtherTab.svelte";

  export let tab = "music";

  // too much? - maybe change into a redirect/navigate to tabs/music
  if (tab == ":tab") {
    tab = "music";
  }

  const myTabs = [
    { label: "Contollers", icon: "videocam", tab: "movies", component: Controllers },
    { label: "Music", icon: "musicalNote", tab: "music", component: Music },
    {
      label: "Splash",
      icon: "pin",
      tab: "games",
      component: Splash,
    },
  ];

  console.log("Tabs", tab, myTabs);

  // <IonTab tabs={myTabs} selected={tab} />
</script>

<IonTab tabs={myTabs} selected={tab} />
