
import type {
  // TYPES
  MenuI, ModalOptions,
} from "@ionic/core";

/* Ionic initialisation */
import { IonicConfig, initialize } from "@ionic/core/components";

import { defineIonComponents } from "./components/defineComponents.js";

// all exports
export {
  actionSheetController,
  alertController,
  loadingController,
  menuController,
  pickerController,
  toastController,
} from "@ionic/core";


export {
  // UTILS
  createAnimation,
  createGesture,
  iosTransitionAnimation,
  mdTransitionAnimation,
  IonicSwiper,
  IonicSlides,
  getTimeGivenProgression,
} from "@ionic/core/components";

export * from "./ion-router/ion-router-hooks.js";

export * from "./controllers";

// todo - check the ones by Vue and so on
export const initialiseIonicSvelte = async (config?: IonicConfig) => {
  initialize(config);
  defineIonComponents();
  document.documentElement.classList.add("ion-ce");
};

export const getIonicNav = () => {
  return document.querySelector("ion-nav");
};

export const getIonicMenu = (menuId): MenuI => {
  const query = "ion-menu[menu-id='" + menuId + "']";
  return document.querySelector(query) as unknown as MenuI;
};
