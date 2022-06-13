<script lang="ts">
  // import { Plugins } from "@capacitor/core";
  // import { fromFetch } from "rxjs/fetch";
  //  import { IonicShowToast } from "../services/IonicControllers";

  // import localforage from "localforage";

  //  import firebase from "firebase/app";

  // const { Clipboard } = Plugins;

  import { modalController, toastController } from "$ionic/svelte";
  import { close } from "ionicons/icons";

  // const { componentProps } = document.querySelector("ion-modal");

  let REPLlink;
  let APIlink;
  let codeLanguage = "svelte";
  let sourceCode = "Loading....Lorem Ipsum Dolorem";
  let sources = {};
  let languages = ["svelte"];
  languages.forEach((lang) => {
    sources[lang] = "Loading " + lang + "....";
  });

  /*
  localforage.getItem("source-language").then((value: string) => {
    if (value) {
      codeLanguage = value;
      sourceCode = sources[codeLanguage];
    }
  });

  <ion-segment value={codeLanguage} on:ionChange={segmentChange} scrollable>
    <ion-segment-button value="svelte">
      <ion-label>Svelte</ion-label>
    </ion-segment-button>
    <ion-segment-button value="js">
      <ion-label>Javascript</ion-label>
    </ion-segment-button>
  </ion-segment>

  
I*/
  // we want to measure some stuff

  // probably can be done in easier way, but I am lazy
  export let name = "/";
  //  if (componentProps.name) {
  //   name = componentProps.name;
  // }

  // generate the name to source file
  name = name.replace("ionic/", "");
  name = name.substr(1);
  name = name.charAt(0).toUpperCase() + name.slice(1);
  if (name.length == 0) {
    name = "Splash";
  }
  if (name.toLowerCase().includes("tabs")) {
    name = "tabs";
  }

  console.log("Svelte name to load", name);

  // try to generate the url to the api docs
  // if (apiName.charAt(apiName.length - 1) == "s") {
  //  apiName = apiName.slice(0, -1);
  // }

  let apiName = name.toLowerCase();
  console.log("Raw APINAME", apiName);

  // do a mapping for some exceptions
  apiName = apiName.replace("/", "");
  fetch("/assets/json/api-mappings.json")
    .then((response) => {
      console.log("sss", response);

      if (response.ok) {
        response.json().then((json) => {
          let url = "https://ionicframework.com/docs/api/";
          if (json[apiName]) {
            url += json[apiName];
            // if we found an exception - we replace
            if (json[apiName].toLowerCase().substring(0, 4) == "http") {
              url = json[apiName];
            }
          } else {
            url += apiName;
          }
          APIlink = url;
        });
      }
    })

    .catch((error) => {
      console.error("Error HTTP", error);
    });

  // we use a separate way to load the svelte source
  // hack the name for tabs
  if (name == "tabs") {
    name = "tabs/[tab]";
  }
  fetch("/assets/src/svelte/" + name + ".svelte").then((response) => {
    response
      .text()
      .then((txt) => {
        if (txt.search("<!DOCTYPE html>") > -1) {
          sources["svelte"] = `No svelte file found for ${name}. Please check github repo.`;
        } else {
          sources["svelte"] = txt;
          // sourceCode = sources[codeLanguage];
        }
      })
      .catch((err) => {
        console.log(`Could not resolve source for ${name} due to error`, err);
      });
  });

  /*

   <ion-segment value={codeLanguage} on:ionChange={segmentChange} scrollable>
    <ion-segment-button value="svelte">
      <ion-label>Svelte</ion-label>
    </ion-segment-button>
    <ion-segment-button value="js">
      <ion-label>Javascript</ion-label>
    </ion-segment-button>
  </ion-segment>


  const segmentChange = (value) => {
    codeLanguage = value.detail.value;
    // localforage.setItem("source-language", codeLanguage);
    sourceCode = sources[codeLanguage];
  };
*/
  const closeOverlay = () => {
    modalController.dismiss();
  };

  // somehow does not fly on iOS?
  const copySource = async () => {
    if (navigator && navigator.clipboard) navigator.clipboard.writeText(sourceCode);
    const toast = await toastController.create({
      color: "dark",
      duration: 2000,
      message: "Copied...",
      //  showCloseButton: true,
    });
    await toast.present();

    /*
      .catch((message) => {
        IonicShowToast({
          color: "danger",
          duration: 2000,
          message,
          showCloseButton: true,
        });
      });
*/
    setTimeout(closeOverlay, 1000);
  };
</script>

<svelte:head>
  <title>Sourceviewer {name}</title>
</svelte:head>
<ion-header translucent="true">
  <ion-toolbar>
    <ion-buttons slot="end">
      <ion-button
        on:click={() => {
          window.open(APIlink, "_blank");
        }}
      >
        API
      </ion-button>

      {#if sourceCode.length > 5}
        <ion-button on:click={copySource}>COPY</ion-button>
      {/if}
      <ion-button on:click={closeOverlay}>
        <ion-icon icon={close} />
      </ion-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>

<ion-content scroll-x="true" style="--padding-start: 15px;--padding-end: 15px;">
  <pre
    style="-webkit-user-select: text; /* Chrome 49+ */
  -moz-user-select: text; /* Firefox 43+ */
  -ms-user-select: text; /* No support yet */
  user-select: text; /* Likely future */">{sourceCode}</pre>
</ion-content>

<style>
  pre {
    -webkit-user-select: all; /* Chrome 49+ */
    -moz-user-select: all; /* Firefox 43+ */
    -ms-user-select: all; /* No support yet */
    user-select: all; /* Likely future */
  }
</style>
