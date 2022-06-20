
import {
    modalController as modalControllerOrg,
    ModalOptions,
    popoverController as popoverControllerOrg,
    PopoverOptions
} from "@ionic/core";

import type { SvelteComponent } from "svelte";

export const modalController = {
    create: (modalOptions: ModalOptions): Promise<HTMLIonModalElement> => { // needs to be typed to ModalOptions (Partial or so?)
        // @ts-ignore - issue with modalOptions.component not matching
        return Promise.resolve(modalController.__create(modalOptions.component, modalOptions)) as Promise<HTMLIonModalElement>
    },
    __create: (
        component: new (...args: any) => SvelteComponent,
        modalOptions: ModalOptions
    ) => {

        const divWrapper = document.createElement("div");
        const contentID = "id" + Date.now();
        divWrapper.id = contentID;

        const modalWrapper = document.createElement("ion-modal") as HTMLIonModalElement;
        let modalContent = document.createElement("div");

        /* assign properties */
        Object.keys(modalOptions)
            .filter(key => !['component', 'componentProps'].includes(key))
            .forEach(key => {
                modalWrapper[key] = modalOptions[key]
            })

        divWrapper.appendChild(modalWrapper);
        modalWrapper.appendChild(modalContent);
        document.body.appendChild(divWrapper);

        const svelteComponent = new component({ target: modalContent, props: modalOptions.componentProps });

        modalWrapper.onDidDismiss().then(() => {
            svelteComponent.$destroy();
            divWrapper.remove();
        });

        return modalWrapper;
    },

    dismiss: (data?: any, role?: string | undefined, id?: string | undefined) => {
        return modalControllerOrg.dismiss(data, role)
    },

    getTop: () => {
        return modalControllerOrg.getTop();
    }
}

export const popoverController = {
    create: (popoverOptions: PopoverOptions): Promise<HTMLIonPopoverElement> => {
        // @ts-ignore - issue with popoverOptions.component not matching
        return Promise.resolve(popoverController.__create(popoverOptions.component, popoverOptions)) as Promise<HTMLIonPopoverElement>
    },

    __create: (
        component: new (...args: any) => SvelteComponent,
        popoverOptions: PopoverOptions
    ) => {
        const divWrapper = document.createElement("div");
        const contentID = "id" + Date.now();
        divWrapper.id = contentID;

        const popoverWrapper = document.createElement("ion-popover") as HTMLIonPopoverElement;
        let popoverContent = document.createElement("div");

        /* assign properties */
        Object.keys(popoverOptions)
            .filter(key => !['component', 'componentProps'].includes(key))
            .forEach(key => {
                popoverWrapper[key] = popoverOptions[key]
            })

        divWrapper.appendChild(popoverWrapper);
        popoverWrapper.appendChild(popoverContent);
        document.body.appendChild(divWrapper);

        const svelteComponent = new component({ target: popoverContent, props: popoverOptions.componentProps });

        popoverWrapper.onDidDismiss().then(() => {
            svelteComponent.$destroy();
            divWrapper.remove();
        });

        return popoverWrapper;
    },
    dismiss: (data?: any, role?: string | undefined, id?: string | undefined) => {
        return popoverControllerOrg.dismiss(data, role)
    },
    getTop: () => {
        return popoverControllerOrg.getTop();
    }
}