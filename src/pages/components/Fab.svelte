<script lang="ts">
  import { add, logoFacebook, logoTwitter, logoVimeo, logoGoogle } from "ionicons/icons";
</script>

<svelte:head>
  <title>Ionic Companion - Fabs</title>
</svelte:head>

<ion-header translucent="true">
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button />
    </ion-buttons>
    <ion-title>Fab</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content fullscreen class="ion-padding">
  Icons worden niet getoond.
  <ion-icon name="add" />

  <ion-icon icon={logoVimeo} />
  ssfd
  <ion-fab horizontal="end" vertical="top" slot="fixed" edge>
    <ion-fab-button>
      <ion-icon name="add" />
    </ion-fab-button>
    <ion-fab-list>
      <ion-fab-button color="light">
        <ion-icon icon={logoFacebook} />
      </ion-fab-button>
      <ion-fab-button color="light">
        <ion-icon icon={logoTwitter} />
      </ion-fab-button>
      <ion-fab-button color="light">
        <ion-icon icon={logoVimeo} />
      </ion-fab-button>
    </ion-fab-list>
  </ion-fab>

  <ion-fab horizontal="end" vertical="center" slot="fixed">
    <ion-fab-button color="danger">
      <ion-icon name="add" />
    </ion-fab-button>
  </ion-fab>

  <ion-fab horizontal="end" vertical="bottom" slot="fixed">
    <ion-fab-button color="light">
      <ion-icon md="caret-back" ios="chevron-back-circle-outline" />
    </ion-fab-button>
    <ion-fab-list side="start">
      <ion-fab-button color="light">
        <ion-icon icon={logoFacebook} />
      </ion-fab-button>
      <ion-fab-button color="light">
        <ion-icon icon={logoTwitter} />
      </ion-fab-button>
      <ion-fab-button color="light">
        <ion-icon icon={logoVimeo} />
      </ion-fab-button>
    </ion-fab-list>
  </ion-fab>

  <ion-fab horizontal="start" vertical="bottom" slot="fixed">
    <ion-fab-button color="dark">
      <ion-icon md="caret-up" ios="chevron-up-circle-outline" />
    </ion-fab-button>
    <ion-fab-list side="top">
      <ion-fab-button color="light">
        <ion-icon icon={logoFacebook} />
      </ion-fab-button>
      <ion-fab-button color="light">
        <ion-icon icon={logoTwitter} />
      </ion-fab-button>
      <ion-fab-button color="light">
        <ion-icon icon={logoVimeo} />
      </ion-fab-button>
    </ion-fab-list>
  </ion-fab>

  <ion-fab horizontal="start" vertical="top" slot="fixed">
    <ion-fab-button color="secondary">
      <ion-icon md="caret-forward" ios="chevron-forward-circle-outline" />
    </ion-fab-button>
    <ion-fab-list side="end">
      <ion-fab-button color="light">
        <ion-icon icon={logoFacebook} />
      </ion-fab-button>
      <ion-fab-button color="light">
        <ion-icon icon={logoTwitter} />
      </ion-fab-button>
      <ion-fab-button color="light">
        <ion-icon icon={logoVimeo} />
      </ion-fab-button>
    </ion-fab-list>
  </ion-fab>

  <ion-fab horizontal="center" vertical="center" slot="fixed">
    <ion-fab-button color="light">
      <ion-icon name="share" />
    </ion-fab-button>
    <ion-fab-list side="top">
      <ion-fab-button color="light">
        <ion-icon icon={logoVimeo} />
      </ion-fab-button>
    </ion-fab-list>
    <ion-fab-list side="end">
      <ion-fab-button color="light">
        <ion-icon icon={logoTwitter} />
      </ion-fab-button>
    </ion-fab-list>
    <ion-fab-list side="bottom">
      <ion-fab-button color="light">
        <ion-icon icon={logoFacebook} />
      </ion-fab-button>
    </ion-fab-list>
    <ion-fab-list side="start">
      <ion-fab-button color="light">
        <ion-icon icon={logoGoogle} />
      </ion-fab-button>
    </ion-fab-list>
  </ion-fab>
</ion-content>
