
import {
    modalController as modalControllerOrg,
    ModalOptions,
    popoverController as popoverControllerOrg,
    PopoverOptions
} from "@ionic/core";

import type { SvelteComponent } from "svelte";

export const modalController = {
    create: (modalOptions: any): Promise<HTMLIonModalElement> => { // needs to be typed to ModalOptions (Partial or so?)
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

        /* assign properties - maybe use hasOwnProperties or so? */
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
            divWrapper.remove();
            svelteComponent.$destroy();
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

export const presentPopover = async (
    selector: string,
    component: new (...args: any) => SvelteComponent,
    componentPropsReceived: any
) => {
    const popover = await popoverController.create({
        component: selector,
        componentProps: componentPropsReceived,
    });
    await popover.present();
    let elem = document.getElementsByTagName(selector)[0];
    let svelteComponent = new component({ target: elem, props: componentPropsReceived });

    let res = await popover.onWillDismiss();
    svelteComponent.$destroy();
    elem.remove();

    return res;
};

export const popoverController = {
    create: (popoverOptions: any): Promise<HTMLIonPopoverElement> => { // needs to be typed to ModalOptions (Partial or so?)
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
        let modalContent = document.createElement("div");

        /* assign properties - maybe use hasOwnProperties or so? */
        Object.keys(popoverOptions)
            .filter(key => !['component', 'componentProps'].includes(key))
            .forEach(key => {
                popoverWrapper[key] = popoverOptions[key]
            })

        divWrapper.appendChild(popoverWrapper);
        popoverWrapper.appendChild(modalContent);
        document.body.appendChild(divWrapper);

        const svelteComponent = new component({ target: modalContent, props: popoverOptions.componentProps });

        popoverWrapper.onDidDismiss().then(() => {
            divWrapper.remove();
            svelteComponent.$destroy();
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