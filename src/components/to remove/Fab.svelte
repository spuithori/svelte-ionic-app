<script lang="ts">
  import {
    add,
    caretBack,
    caretUp,
    caretForward,
    logoFacebook,
    logoTwitter,
    logoVimeo,
    logoGoogle,
    share,
  } from "ionicons/icons";
</script>

<ion-content>
  <ion-fab horizontal="end" vertical="top" slot="fixed" edge>
    <ion-fab-button>
      <ion-icon icon={add} />
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
      <ion-icon icon={add} />
    </ion-fab-button>
  </ion-fab>

  <ion-fab horizontal="end" vertical="bottom" slot="fixed">
    <ion-fab-button color="light">
      <ion-icon icon={caretBack} />
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
      <ion-icon icon={caretUp} />
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
      <ion-fab-button color="light">
        <ion-icon icon={logoGoogle} />
      </ion-fab-button>
    </ion-fab-list>
  </ion-fab>

  <ion-fab horizontal="start" vertical="top" slot="fixed">
    <ion-fab-button color="secondary">
      <ion-icon icon={caretForward} />
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
      <ion-fab-button color="light">
        <ion-icon icon={logoGoogle} />
      </ion-fab-button>
    </ion-fab-list>
  </ion-fab>

  <ion-fab horizontal="center" vertical="center" slot="fixed">
    <ion-fab-button color="light">
      <ion-icon icon={share} />
    </ion-fab-button>
    <ion-fab-list side="top">
      <ion-fab-button color="primary">
        <ion-icon icon={logoVimeo} />
      </ion-fab-button>
    </ion-fab-list>
    <ion-fab-list side="end">
      <ion-fab-button color="dark">
        <ion-icon icon={logoTwitter} />
      </ion-fab-button>
    </ion-fab-list>
    <ion-fab-list side="bottom">
      <ion-fab-button color="secondary">
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
