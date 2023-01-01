<script lang="ts">
	import NavHome from '$lib/components/NavHome.svelte';
	import { IonPage } from 'ionic-svelte';
	import { onMount, SvelteComponent } from 'svelte';

	// moving this to new IonNav element
	let ionNav: HTMLIonNavElement;

	const createHTMLCompFromSvelte = (
		component: new (...args: any) => SvelteComponent,
		componentProps: {}
	) => {
		const divWrapper = document.createElement('div');
		const contentID = 'id' + Date.now();
		divWrapper.id = contentID;

		let navContent = document.createElement('div');

		divWrapper.appendChild(navContent);
		document.body.appendChild(divWrapper);

		const props = {
			...componentProps,
			ionNav
		};

		const svelteComponent = new component({
			target: navContent,
			props
		});

		return divWrapper;
	};

	let root: HTMLElement;

	onMount(() => {
		root = createHTMLCompFromSvelte(NavHome, {});
	});
</script>

<svelte:head>
	<title>Ionic Companion - Nav</title>
</svelte:head>

<IonPage>
	<ion-nav bind:this={ionNav} {root} />
</IonPage>
