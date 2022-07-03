<script lang="ts">
  import IonPage from "$ionic/svelte/components/IonPage.svelte";
  import SourceButton from "$components/SourceButton.svelte";

  import {
    onIonViewWillEnter as onIonViewWillEnterFn,
    onIonViewDidEnter as onIonViewDidEnterFn,
    onIonViewWillLeave as onIonViewWillLeaveFn,
    onIonViewDidLeave as onIonViewDidLeaveFn,
  } from "$ionic/svelte";

  const onIonViewWillEnter = () => {
    console.log("Page:onIonViewWillEnter");
  };

  const onIonViewDidEnter = () => {
    console.log("Page:onIonViewDidEnter");
  };

  const onIonViewWillLeave = () => {
    console.log("Page:onIonViewWillLeave");
  };

  const onIonViewDidLeave = () => {
    console.log("Page:onIonViewDidLeave");
  };

  const codeSnippet = `import {
    onIonViewWillEnter,
    onIonViewDidEnter,
    onIonViewWillLeave,
    onIonViewDidLeave,
  } from "$ionic/svelte";

  onIonViewWillEnter("/components/Page", () => {
    console.log("Page:the on-function as onIonViewWillEnter hook");
  });

  onIonViewDidEnter("/components/Page", () => {
    console.log("Page:the on-function as onIonViewDidEnter hook");
  });

  onIonViewWillLeave("/components/Page", () => {
    console.log("Page:the on-function as onIonViewWillLeave hook");
  });

  onIonViewDidLeave("/components/Page", () => {
    console.log("Page:the on-function as onIonViewDidLeave hook");
  });
  `;

  const ionPageSyntax = `...
  const ionViewWillEnter=
        ionViewDidEnter=
        ionViewWillLeave=
        ionViewDidLeave=console.log('We got an event!') 
  

  <IonPage route="/components/Page"
    {ionViewWillEnter}
    {ionViewDidEnter}
    {ionViewWillLeave}
    {ionViewDidLeave}>`;

  onIonViewWillEnterFn("/components/Page", () => {
    console.log("Page:the on-function as onIonViewWillEnter hook");
  });

  onIonViewDidEnterFn("/components/Page", () => {
    console.log("Page:the on-function as onIonViewDidEnter hook");
  });

  onIonViewWillLeaveFn("/components/Page", () => {
    console.log("Page:the on-function as onIonViewWillLeave hook");
  });

  onIonViewDidLeaveFn("/components/Page", () => {
    console.log("Page:the on-function as onIonViewDidLeave hook");
  });
</script>

<svelte:head>
  <title>Ionic Companion - Page</title>
</svelte:head>

<IonPage
  route="/components/Page"
  ionViewWillEnter={onIonViewWillEnter}
  ionViewDidEnter={onIonViewDidEnter}
  ionViewWillLeave={onIonViewWillLeave}
  ionViewDidLeave={onIonViewDidLeave}
>
  <ion-header translucent="true">
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-menu-button />
      </ion-buttons>
      <ion-buttons slot="end">
        <SourceButton name="Page" />
      </ion-buttons>
      <ion-title>Page</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content fullscreen>
    <ion-card>
      <ion-card-header><h1>API specs for IonPage</h1></ion-card-header>
      <ion-card-content>
        This intends to show the working of the IonPage component. This components the lifecycle
        hooks and proper animation for a page shown in your app. The following lifecycle hooks are
        provided for:
        <br />
        <pre>
  ionViewWillEnter
  ionViewDidEnter
  ionViewWillLeave
  ionViewDidLeave
</pre>
        The first way is to bind the function to the dom-element. This seems the easiest way to me, as
        you simply give the function the same name as the event and then bind it using brackets. Providing
        a route is optional for this way of binding lifecycle hooks.
        <pre>
  {ionPageSyntax}
</pre>

        The other way is similar to the `onMount()` way of working in svelte:

        <pre>
  {codeSnippet}
</pre>
        In support of this way of working, it is required to provide a route to IonPage. The first argument
        is the route, the second the hook to be called. Only one hook can be attached to one specific
        route.
      </ion-card-content>
    </ion-card>
  </ion-content>
</IonPage>
