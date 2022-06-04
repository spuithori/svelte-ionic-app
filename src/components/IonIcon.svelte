<script lang="ts">
  import * as icons from "ionicons/icons";

  export let name: string;
  /*
  export let color?: string;
  export let flipRtl?: boolean;
  export let ios?: string;
  export let lazy?: string;
  export let md?: string;
  export let mode?: string;
  export let size?: string;
  export let src?: string;

  {color} {flipRtl} {ios} {lazy} {md} {mode} {size}
 */
  export let icon = icons[name];
</script>

<ion-icon {icon} />
