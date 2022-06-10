import { writable } from 'svelte/store';

// todo - maybe place somewhere else

export const onIonViewWillEnterStore = writable('');
export const onIonViewDidEnterStore = writable('');
export const onIonViewWillLeaveStore = writable('');
export const onIonViewDidLeaveStore = writable('');

export const pageHooks_onIonViewWillEnter = {}
export const pageHooks_onIonViewDidEnter = {}
export const pageHooks_onIonViewWillLeave = {}
export const pageHooks_onIonViewDidLeave = {}

export const onIonViewWillEnter = (path, hookFn) => {
    pageHooks_onIonViewWillEnter[path] = hookFn;
}

export const onIonViewDidEnter = (path, hookFn) => {
    pageHooks_onIonViewDidEnter[path] = hookFn;
}

export const onIonViewWillLeave = (path, hookFn) => {
    pageHooks_onIonViewWillLeave[path] = hookFn;
}

export const onIonViewDidLeave = (path, hookFn) => {
    pageHooks_onIonViewDidLeave[path] = hookFn;
}

