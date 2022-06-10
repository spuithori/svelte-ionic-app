<script lang="ts">
  /* routing - just for fun calling it IonRouter - but it actually does not matter :) */
  import IonRouter from "./lib/ionic/svelte/ion-router/runtime/Router.svelte";
  import { routes } from "../.routify/routes";
</script>

<IonRouter {routes} />
