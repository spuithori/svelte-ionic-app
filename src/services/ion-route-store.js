import { writable } from 'svelte/store';

// export const ionPageEvent = writable({ ev: '', comp: '' });

export const onIonViewWillEnterStore = writable('');
export const onIonViewDidEnterStore = writable('');
export const onIonViewWillLeaveStore = writable('');
export const onIonViewDidLeaveStore = writable('');



/*
count.subscribe(value => {
    console.log(value);
}); // logs '0'

count.set(1); // logs '1'

count.update(n => n + 1); // logs '2'

*/