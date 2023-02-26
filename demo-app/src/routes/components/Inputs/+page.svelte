<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import SourceButton from '$lib/components/SourceButton.svelte';
	import { alertController, IonPage } from 'ionic-svelte';
	import type { ActionData } from './$types';

	export let form: ActionData;

	$: console.log('Form received', form);
	$: console.log('Page form', $page.form);

	// $: if (form?.success) {
	// 	console.log('Processing form', form);
	// 	// event.preventDefault();
	// 	const controller = alertController
	// 		.create({
	// 			header: 'Account Created',
	// 			message: `Created account for: <b>${form.formData.firstName} ${form.formData.lastName}</b>`,
	// 			buttons: [
	// 				{
	// 					text: 'OK'
	// 				}
	// 			]
	// 		})
	// 		.then((alert) => alert.present());
	// }
</script>

<svelte:head>
	<title>Ionic Companion - Inputs</title>
</svelte:head>

<IonPage>
	<ion-header translucent={true}>
		<ion-toolbar>
			<ion-buttons slot="start">
				<ion-menu-button />
			</ion-buttons>
			<ion-buttons slot="end">
				<SourceButton name="Inputs" />
			</ion-buttons>
			<ion-title>Create Account</ion-title>
		</ion-toolbar>
	</ion-header>

	<ion-content fullscreen class="ion-padding">
		<form method="POST" use:enhance>
			<ion-list lines="full" class="ion-no-margin ion-no-padding">
				<ion-item>
					<ion-label position="stacked">
						First Name
						<ion-text color="danger">*</ion-text>
					</ion-label>
					<ion-input name="firstName" type="text" value={form?.formData.firstName ?? ''} />
				</ion-item>

				<ion-item>
					<ion-label position="stacked">
						Last Name
						<ion-text color="danger">*</ion-text>
					</ion-label>
					<ion-input name="lastName" required type="text" />
				</ion-item>

				<ion-item>
					<ion-label position="floating">Title</ion-label>
					<ion-input name="title" />
				</ion-item>

				<ion-item>
					<ion-label position="stacked">Address</ion-label>
					<ion-input placeholder="Address Line 1" name="addressLine1" />
					<ion-input placeholder="Address Line 2" name="addressLine2" />
					<ion-input placeholder="City" name="city" />
					<ion-input placeholder="State" name="state" />
					<ion-input placeholder="Zip Code" name="zip" />
				</ion-item>

				<ion-item>
					<ion-label position="stacked">Notes</ion-label>
					<ion-textarea name="notes" />
				</ion-item>
			</ion-list>

			<div class="ion-padding">
				<ion-button expand="block" type="submit" class="ion-no-margin"> Create account </ion-button>
			</div>
		</form>
	</ion-content>
</IonPage>

<style>
	input {
		color: red;
	}
</style>
