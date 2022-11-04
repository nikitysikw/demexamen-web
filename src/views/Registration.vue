<script setup>
import { useStore } from "vuex";
import { ref } from "vue";

const store = useStore();

let email = ref("");
let username = ref("");
let password = ref("");
let repeatPassword = ref("");

function registration () {
	store.dispatch(
		"registration",
		{
			email: email.value,
			password: password.value,
			username: username.value,
			repeatPassword: repeatPassword.value,
		},
	);
}

</script>

<template>
	<b-form class="h-100 container mt-5 d-flex flex-column">
		<b-form-input v-model="email" class="mb-4" placeholder="email" type="email"></b-form-input>
		<b-alert :show="store.state.registrationError.email.length > 0" variant="danger">
			<div v-for="emailError in store.state.registrationError.email">
				<span>{{ emailError }}</span>
				<hr class="my-1">
			</div>
		</b-alert>
		<b-form-input v-model="username" class="mb-4" placeholder="username" type="text"></b-form-input>
		<b-alert :show="store.state.registrationError.username.length > 0" variant="danger">
			<div v-for="usernameError in store.state.registrationError.username">
				<span>{{ usernameError }}</span>
				<hr class="my-1">
			</div>
		</b-alert>
		<b-form-input v-model="password" class="mb-4" placeholder="password" type="password"></b-form-input>
		<b-alert :show="store.state.registrationError.password.length > 0" variant="danger">
			<div v-for="passwordError in store.state.registrationError.password">
				<span>{{ passwordError }}</span>
				<hr class="my-1">
			</div>
		</b-alert>
		<b-form-input v-model="repeatPassword" class="mb-4" placeholder="password" type="password"></b-form-input>
		<b-alert :show="store.state.registrationError.repeatPassword.length > 0" variant="danger">
			<div v-for="repeatPassword in store.state.registrationError.repeatPassword">
				<span>{{ repeatPassword }}</span>
				<hr class="my-1">
			</div>
		</b-alert>
		<b-button class="align-self-center" type="submit" @click="registration">Зарегистрироваться</b-button>
	</b-form>
</template>

<style scoped>

</style>