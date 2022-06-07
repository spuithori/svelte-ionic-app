import { writable } from 'svelte/store';

// export const ionPageEvent = writable({ ev: '', comp: '' });

export const onionViewWillEnterStore = writable('');
export const onionViewDidEnterStore = writable('');
export const onionViewWillLeaveStore = writable('');
export const onionViewDidLeaveStore = writable('');



/*
count.subscribe(value => {
    console.log(value);
}); // logs '0'

count.set(1); // logs '1'

count.update(n => n + 1); // logs '2'

*/