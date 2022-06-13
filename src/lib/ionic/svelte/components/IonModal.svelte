<script lang="ts">
  export let component;
  export let name;

  console.log("name", name, component);
</script>

<ion-modal>
  <svelte:component this={component} />
</ion-modal>
