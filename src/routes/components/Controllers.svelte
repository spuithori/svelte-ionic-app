<script lang="ts">
  import ModalExtra from "$components/ModalExtra.svelte";
  import PopoverExtra from "$components/PopoverExtra.svelte";
  import {
    alertController,
    loadingController,
    toastController,
    pickerController,
    actionSheetController,
    presentModal,
    presentPopover,
  } from "$ionic/svelte";

  import Music from "$components/Music.svelte";

  let inlineModalOpen = false;
  let breakpoints = [0, 0.5, 1];

  const inlineModalDismissed = () => {
    inlineModalOpen = false;
  };

  const showModal = async () => {
    const s = await presentModal("modal-extra", ModalExtra, {
      firstName: "Douglas",
      lastName: "Adams",
      middleInitial: "N",
    });

    console.log("Resulting value", s);
  };

  const showPopover = async (event) => {
    await presentPopover("popover-extra", PopoverExtra, {
      firstName: "Douglas",
      lastName: "Adams",
      middleInitial: "N",
    });
  };

  const showLoading = async () => {
    const options = {
      message: "Please wait......",
      duration: 30000,
    };

    const loading = await loadingController.create(options);
    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  };

  const showToast = async () => {
    const toast = await toastController.create({
      color: "danger",
      duration: 4000,
      message: "Here a random toast",
      // showCloseButton: true,
    });

    toast.present();
  };

  const showPicker = async () => {
    const defaultColumnOptions = [["Dog", "Cat", "Bird", "Lizard", "Chinchilla"]];
    const multiColumnOptions = [
      ["Minified", "Responsive", "Full Stack", "Mobile First", "Serverless"],
      ["Tomato", "Avocado", "Onion", "Potato", "Artichoke"],
    ];

    const numColumns = 1,
      numOptions = 5,
      columnOptions = defaultColumnOptions;

    function getColumns(numColumns, numOptions, columnOptions) {
      let columns = [];
      for (let i = 0; i < numColumns; i++) {
        columns.push({
          name: `col-${i}`,
          options: getColumnOptions(i, numOptions, columnOptions),
        });
      }

      return columns;
    }

    function getColumnOptions(columnIndex, numOptions, columnOptions) {
      let options = [];
      for (let i = 0; i < numOptions; i++) {
        options.push({
          text: columnOptions[columnIndex][i % numOptions],
          value: i,
        });
      }

      return options;
    }

    const options = {
      columns: getColumns(numColumns, numOptions, columnOptions),
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
        },
        {
          text: "Confirm",
          handler: (value) => {
            console.log(`Got Value ${value}`);
          },
        },
      ],
    };

    const picker = await pickerController.create(options);
    picker.present();
  };

  const showAlert = async (options) => {
    const alert = await alertController.create(options);
    alert.present();
  };

  const showInputAlert = async () => {
    const options = {
      cssClass: "my-custom-class",
      header: "Prompt!",
      inputs: [
        {
          name: "name1",
          type: "text",
          placeholder: "Placeholder 1",
        },
        {
          name: "name2",
          type: "text",
          id: "name2-id",
          value: "hello",
          placeholder: "Placeholder 2",
        },
        // multiline input.
        {
          name: "paragraph",
          id: "paragraph",
          type: "textarea",
          placeholder: "Placeholder 3",
        },
        {
          name: "name3",
          value: "http://ionicframework.com",
          type: "url",
          placeholder: "Favorite site ever",
        },
        // input date with min & max
        {
          name: "name4",
          type: "date",
          min: "2017-03-01",
          max: "2018-01-12",
        },
        // input date without min nor max
        {
          name: "name5",
          type: "date",
        },
        {
          name: "name6",
          type: "number",
          min: -5,
          max: 10,
        },
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {
            console.log("Confirm Cancel");
          },
        },
        {
          text: "Ok",
          handler: () => {
            console.log("Confirm Ok");
          },
        },
      ],
    };

    return showAlert(options);
  };

  const showSimpleAlert = async () => {
    const options = {
      header: "Prompt!",
      subHeader: "Subtitle",
      message: "This is an alert message.",
      buttons: ["OK"],
    };

    return showAlert(options);
  };

  const showRadioAlert = async () => {
    const options = {
      header: "Radio",
      subHeader: "Subtitle",
      message: "This is an alert message.",
      inputs: [
        {
          type: "radio",
          label: "Radio 1",
          value: "value1",
          checked: true,
        },
        {
          type: "radio",
          label: "Radio 2",
          value: "value2",
        },
        {
          type: "radio",
          label: "Radio 3",
          value: "value3",
        },
        {
          type: "radio",
          label: "Radio 4",
          value: "value4",
        },
        {
          type: "radio",
          label: "Radio 5",
          value: "value5",
        },
        {
          type: "radio",
          label: "Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 ",
          value: "value6",
        },
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {
            console.log("Confirm Cancel");
          },
        },
        {
          text: "Ok",
          handler: (data) => {
            console.log("Confirm Ok", data);
          },
        },
      ],
    };

    return showAlert(options);
  };

  const showCheckboxAlert = async () => {
    const options = {
      header: "Radio",
      subHeader: "Subtitle",
      message: "This is an alert message.",
      inputs: [
        {
          type: "checkbox",
          label: "Checkbox 1",
          value: "value1",
          checked: true,
        },
        {
          type: "checkbox",
          label: "Checkbox 2",
          value: "value2",
        },
        {
          type: "checkbox",
          label: "Checkbox 3",
          value: "value3",
        },
        {
          type: "checkbox",
          label: "Checkbox 4",
          value: "value4",
        },
        {
          type: "checkbox",
          label: "Checkbox 5",
          value: "value5",
        },
        {
          type: "checkbox",
          label: "Checkbox 6",
          value: "value6",
        },
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {
            console.log("Confirm Cancel");
          },
        },
        {
          text: "Ok",
          handler: (data) => {
            console.log("Confirm Ok", data);
          },
        },
      ],
    };

    return showAlert(options);
  };

  const showActionSheet = async () => {
    const options = {
      header: "Albums",
      buttons: [
        {
          text: "Delete",
          role: "destructive",
          handler: () => {
            console.log("Delete clicked");
          },
        },
        {
          text: "Share",
          handler: () => {
            console.log("Share clicked");
          },
        },
        {
          text: "Play",
          handler: () => {
            console.log("Play clicked");
          },
        },
        {
          text: "Favorite",
          handler: () => {
            console.log("Favorite clicked");
          },
        },
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          },
        },
      ],
    };
    const actionsheet = await actionSheetController.create(options);

    actionsheet.present();
  };
</script>

<svelte:head>
  <title>Ionic Companion - Controllers</title>
</svelte:head>
<ion-header translucent="true">
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button />
    </ion-buttons>
    <ion-title>Controllers</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content fullscreen class="ion-padding">
  <ion-button expand="block" on:click={showActionSheet}> Action Sheet </ion-button>
  <ion-button expand="block" on:click={showSimpleAlert}> Show Simple Alert </ion-button>
  <ion-button expand="block" on:click={showRadioAlert}> Show Radio Alert </ion-button>
  <ion-button expand="block" on:click={showCheckboxAlert}> Show Checkbox Alert </ion-button>
  <ion-button expand="block" on:click={showInputAlert}> Show Input Alert </ion-button>
  <ion-button expand="block" on:click={showModal}>Show Modal</ion-button>
  <ion-button
    expand="block"
    on:click={() => {
      inlineModalOpen = true;
    }}>Show Inline Modal with Breakpoints</ion-button
  >
  <ion-button expand="block" on:click={showPopover}>Show Popover</ion-button>
  <ion-button expand="block" on:click={showLoading}>Show Loading</ion-button>
  <ion-button expand="block" on:click={showPicker}>Show Picker</ion-button>
  <ion-button expand="block" on:click={showToast}>Show Toast</ion-button>
  <ion-modal
    is-open={inlineModalOpen}
    initial-breakpoint="0.5"
    {breakpoints}
    on:ionModalDidDismiss={inlineModalDismissed}
  >
    <ion-content>
      <br /><br /><br />
      <ion-button
        expand="block"
        on:click={() => {
          inlineModalOpen = false;
        }}
      >
        Close modal
      </ion-button>
      <Music />
    </ion-content>
  </ion-modal>
</ion-content>
