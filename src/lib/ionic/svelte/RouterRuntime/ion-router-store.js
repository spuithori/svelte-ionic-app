import { writable } from 'svelte/store';

// export const ionPageEvent = writable({ ev: '', comp: '' });

export const onIonViewWillEnterStore = writable('');
export const onIonViewDidEnterStore = writable('');
export const onIonViewWillLeaveStore = writable('');
export const onIonViewDidLeaveStore = writable('');

const pageHooks = {}

const onIonViewWillEnter = (hookFn, path) => {
    pageHooks[path] = hookFn;
}


