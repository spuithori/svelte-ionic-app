<script lang="ts">
	import IonTabs from './IonTabs.svelte';
	import { videocam, pin } from 'ionicons/icons';

	const myTabs = [
		{
			label: 'Explain',
			icon: pin,
			tab: 'test1'
		},
		{ label: 'Controllers', icon: videocam, tab: 'test2' }
	];

	const logStuff = (event: { detail: { tab: any }; type: any }) => {
		console.log('>', event?.detail?.tab, event?.type);
	};
</script>

<IonTabs
	ionTabsWillChange={logStuff}
	ionNavWillLoad={logStuff}
	ionTabsDidChange={logStuff}
	slot="bottom"
	tabs={myTabs}>
	<slot />
</IonTabs>
