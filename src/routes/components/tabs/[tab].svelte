<script lang="ts">
  import IonTab from "../../../components/IonTab.svelte";

  import Controllers from "../Controllers.svelte";
  import Music from "../../../components/Music.svelte";
  import Games from "../../../components/Games.svelte";

  export let tab = "music";

  // too much?
  if (tab == ":tab") {
    tab = "music";
  }

  const myTabs = [
    { label: "Contollers", icon: "videocam", tab: "movies", component: Controllers },
    { label: "Music", icon: "musicalNote", tab: "music", component: Music },
    {
      label: "Nothing",
      icon: "pin",
      tab: "games",
      component: Games,
    },
  ];

  console.log("Tabs", tab, myTabs);

  // <IonTab tabs={myTabs} selected={tab} />
</script>

<IonTab tabs={myTabs} selected={tab} />
