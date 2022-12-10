<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	import { pwaBeforeInstallPrompt, canInstall } from '$lib/services/pwa';

	import { menuController, modalController, registerMenu } from '$ionic/svelte';
	import { isPlatform } from '@ionic/core';
	import * as allIonicIcons from 'ionicons/icons';

	import IOSInstall from '$lib/components/IOSInstall.svelte';

	let hideMenu = true; // a hack because the menu shows before the splash (in Chrome on Windows)

	export let side = 'start';

	const getRandomColor = () => {
		const items = [
			'secondary',
			'primary',
			'danger',
			'warning',
			'dark',
			'medium',
			'success',
			'tertiary'
		];
		return items[Math.floor(Math.random() * items.length)];
	};

	// this is unfortunately needed in order to have the menuController API function properly
	onMount(() => {
		registerMenu('mainmenu');
	});

	// and build the menu list from it
	const modules = import.meta.glob('../../**/*.svelte', { as: 'raw' });
	console.log('asdasdsa', modules);
	let menuItems: Array<{ url: string; label: string; icon: any }> = Object.keys(modules)
		.filter((key) => key.includes('/routes/components/') && !key.includes('[tab]'))
		.map((key) =>
			capitalizeFirstLetter(
				key.replace('../../routes/components/', '').replace('/+page.svelte', '')
			)
		)
		.sort()
		.map((componentName) => {
			const url =
				componentName !== 'Tabs' ? `/components/${componentName}` : `/components/tabs/[tab]`;
			return {
				url,
				label: componentName,
				icon: allIonicIcons['home']
			};
		});

	// ChatGPT suggestion
	// let input = '../../routes/components/Card/+page.svelte';
	// let regex = /components\/(.+?)\//;
	// let match = input.match(regex);
	// console.log(match[1]); // outputs "Card"

	// Randomize the icons
	const icons = Object.keys(allIonicIcons);
	menuItems.map((menuItem) => {
		const iconForMenu = icons[Math.floor(Math.random() * icons.length)];
		// @ts-ignore
		menuItem.icon = allIonicIcons[iconForMenu];
	});
	menuItems = [...menuItems];

	const closeAndNavigate = async (url: string) => {
		console.log('Navigate url', url);
		goto(url);

		menuController.close('mainmenu');
	};

	// hack because of visibility of menu in Chrome/Windows
	setTimeout(() => {
		hideMenu = false;
	}, 100);

	let iosInstall = isPlatform('ios') && !isPlatform('pwa');

	const showIOSinstall = async () => {
		const modal = await modalController.create({
			component: IOSInstall,
			componentProps: {},
			showBackdrop: true,
			backdropDismiss: false
		});

		modal.onDidDismiss().then((value) => {
			console.log('Dismissed the modal', value);
			if (value.role === 'backdrop') console.log('Backdrop clicked');
		});

		await modal.present();
	};

	function capitalizeFirstLetter(text: string) {
		return text.charAt(0).toUpperCase() + text.slice(1);
	}
</script>

<ion-menu {side} content-id="main" menu-id="mainmenu" class:menuhide={hideMenu}>
	{#if menuItems.length > 0}
		<ion-header>
			<ion-toolbar translucent={true}>
				<ion-title>Menu</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content>
			<ion-list>
				{#each menuItems as menuItem, i}
					<ion-item
						on:click={() => {
							closeAndNavigate(menuItem.url);
						}}
					>
						<ion-icon icon={menuItem.icon} slot="start" color={getRandomColor()} />
						<ion-label>{menuItem.label}</ion-label>
					</ion-item>
				{/each}

				<ion-item />
				{#if iosInstall}
					<ion-item on:click={showIOSinstall}>
						<ion-icon icon={allIonicIcons['download']} slot="start" />
						<ion-label>Install this app as PWA</ion-label>
					</ion-item>
					<ion-item />
				{/if}
				{#if $canInstall}
					<ion-item
						on:click={() => {
							const prompt = $pwaBeforeInstallPrompt;
							prompt.prompt();
						}}
					>
						<ion-icon icon={allIonicIcons['download']} slot="start" />
						<ion-label>Install this app as PWA</ion-label>
					</ion-item>
					<ion-item />
				{/if}

				<ion-item
					on:click={() => {
						window.open('https://github.com/Tommertom/svelte-ionic-app', '_blank');
					}}
				>
					<ion-icon icon={allIonicIcons['star']} slot="start" />
					<ion-label>Go to GitHub for this app</ion-label>
				</ion-item>
				<ion-item
					on:click={() => {
						window.open(
							'https://forum.ionicframework.com/t/ionicsvelte-all-of-ionics-ui-in-one-svelte-app',
							'_blank'
						);
					}}
				>
					<ion-icon icon={allIonicIcons['star']} slot="start" />
					<ion-label>Go to Ionic Forum</ion-label>
				</ion-item>
			</ion-list>
		</ion-content>
	{/if}
</ion-menu>

<style>
	ion-item {
		cursor: pointer;
	}

	.menuhide {
		display: none;
	}
</style>
