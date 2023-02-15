<script lang="ts">
	import { menu, code } from 'ionicons/icons';
	import SourceButton from '$lib/components/SourceButton.svelte';
	import { menuController } from 'ionic-svelte';
	import { IonPage } from 'ionic-svelte';

	let menuIconClicked = false;

	const flipMenuOnOff = () => {
		setTimeout(() => {
			menuController.open('mainmenu');
			if (!menuIconClicked) {
				setTimeout(() => {
					menuController.close('mainmenu');
				}, 2000);
			}
		}, 2000);
	};

	const flipMenuOn = () => {
		menuIconClicked = true;
		menuController.open('mainmenu');
	};
</script>

<svelte:head>
	<title>Ionic Companion - Slides</title>
</svelte:head>

<IonPage>
	<ion-header translucent={true}>
		<ion-toolbar>
			<ion-buttons slot="start">
				<ion-menu-button />
			</ion-buttons>
			<ion-buttons slot="end">
				<SourceButton name="Slides" />
			</ion-buttons>
			<ion-title>Slides</ion-title>
		</ion-toolbar>
	</ion-header>

	<ion-content fullscreen class="ion-padding" scroll-y={false}>
		<ion-slides on:ionSlideReachEnd={flipMenuOnOff} pager={true}>
			<ion-slide>
				<img src="/logo.svg" alt="pict" />
				<h2>Welcome!</h2>

				<b> Ionic UI App</b> is a demo of the ionic framework made with Svelte<br />
				<br /><br />

				Easy start your own Ionic SvelteKit app?
				<pre>npm create ionic-svelte-app@latest </pre>

				<br />
				<br />
			</ion-slide>
			<ion-slide>
				<img src="../assets/img/slides/svelte.png" alt="pict" />
				<h2>Handy tool!</h2>
				View the source code of the element you are viewing - copy/paste code, and directly link to the
				API docs!<br />Just click&nbsp;<ion-icon icon={code} /><br /><br />
				Also in Angular, Vue, React, VanillaJS and Stencil
				<br />
				<h2>Ready to Play?</h2>
				Check out
				<ion-icon icon={menu} on:click={flipMenuOn} on:keypress={flipMenuOn} />
				to look at Ionic UI examples. <br />
			</ion-slide>
		</ion-slides>
	</ion-content>
</IonPage>

<style>
	:root {
		--ion-safe-area-top: 20px;
		--ion-safe-area-bottom: 22px;
	}
	ion-slide {
		display: block;
	}
	ion-slide > h2 {
		margin-top: 2.8rem;
	}
	ion-slide > img {
		max-height: 50%;
		max-width: 60%;
		margin: 36px 0;
	}

	pre {
		font-size: 80%;
	}
</style>
