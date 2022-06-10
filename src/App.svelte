<script lang="ts">
  /* routing */
  import { Router } from "@roxi/routify";
  //  import Router from "./lib/ionic/svelte/routerruntime/Router.svelte";
  import { routes } from "../.routify/routes";
</script>

<Router {routes} />
