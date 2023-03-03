<script lang="ts">
	import SourceButton from '$lib/components/SourceButton.svelte';
	import { alertController, IonPage } from 'ionic-svelte';

	import { accountSchema as schema } from './account.interface';
	import { enhance, getFormWritable, validateField } from './spa-enhance';

	const form = getFormWritable();

	// $: console.log('Form received', $form);

	function submit() {
		if ($form?.success) {
			const controller = alertController
				.create({
					header: 'Account Created',
					message: `Created account for: <b>${$form.data.firstName} ${$form.data.lastName}</b>`,
					buttons: [
						{
							text: 'OK'
						}
					]
				})
				.then((alert) => alert.present());
		}

		if ($form !== null && !$form?.success) {
			const controller = alertController
				.create({
					header: 'Account Not Created',
					message: `There were some errors - see console.log`,
					buttons: [
						{
							text: 'OK'
						}
					]
				})
				.then((alert) => alert.present());
		}
	}
</script>

<svelte:head>
	<title>Ionic Companion - Inputs - with Form Actions and zod</title>
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
		<form use:enhance={{ form, schema }} id="accountform" on:submit={submit}>
			<ion-list lines="full" class="ion-no-margin ion-no-padding">
				<ion-item class:ion-invalid={$form?.errors?.firstName}>
					<ion-label position="stacked">
						First Name
						<ion-text color="danger">*</ion-text>
					</ion-label>
					<ion-input
						name="firstName"
						type="text"
						value={$form?.data.firstName ?? ''}
						on:ionChange={validateField} />
					<ion-note slot="helper">Here you may enter your first name - or something else</ion-note>
					<ion-note slot="error">Please type more characters...</ion-note>
				</ion-item>

				<ion-item class:ion-invalid={$form?.errors?.lastName}>
					<ion-label position="stacked">
						Last Name
						<ion-text color="danger">*</ion-text>
					</ion-label>
					<ion-input name="lastName" required type="text" on:ionChange={validateField} />
					<ion-note slot="helper">This place is to enter your last name</ion-note>
					<ion-note slot="error">Nag nag.....too short</ion-note>
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
