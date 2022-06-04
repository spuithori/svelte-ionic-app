<script>
  import ModalExtra from "./ModalExtra.svelte";
  import PopoverExtra from "./PopoverExtra.svelte";
  import {
    modalController,
    popoverController,
    alertController,
    loadingController,
    toastController,
    pickerController,
    actionSheetController,
  } from "./../../services/IonicSvelte";

  const showModal = async () => {
    const modal = await modalController.create({
      component: ModalExtra,
      cssClass: "my-custom-class",
      componentProps: {
        firstName: "Douglas",
        lastName: "Adams",
        middleInitial: "N",
      },
    });
    return await modal.present();
  };

  const showPopover = async (event) => {
    const popover = await popoverController.create({
      component: PopoverExtra,
      event,
      componentProps: {
        firstName: "Douglas",
        lastName: "Adams",
        middleInitial: "N",
      },
    });

    popover.present();
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
      header: "Alert",
      subHeader: "Subtitle",
      message: "This is an alert message. - INCORRECT - SHOULD SHOW INPUTS",
      buttons: ["Cancel", "Open Modal", "Delete"],
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
  Modal and popover not working - needs frameworkdelegate and all sorts of other stuff Picker also
  not ok.
  <ion-button expand="block" on:click={showActionSheet}> Action Sheet </ion-button>
  <ion-button expand="block" on:click={showSimpleAlert}> Show Simple Alert </ion-button>
  <ion-button expand="block" on:click={showRadioAlert}> Show Radio Alert </ion-button>
  <ion-button expand="block" on:click={showCheckboxAlert}> Show Checkbox Alert </ion-button>
  <ion-button expand="block" on:click={showInputAlert}> Show Input Alert </ion-button>
  <ion-button expand="block" on:click={showModal}>Show Modal</ion-button>
  <ion-button expand="block" on:click={showPopover}>Show Popover</ion-button>
  <ion-button expand="block" on:click={showLoading}>Show Loading</ion-button>
  <ion-button expand="block" on:click={showPicker}>Show Picker</ion-button>
  <ion-button expand="block" on:click={showToast}>Show Toast</ion-button>

  Todo: Card Modal Sheet Modal Inline modal
</ion-content>
