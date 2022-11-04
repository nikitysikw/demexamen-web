<script setup>
import { useStore } from "vuex";
import { ref } from "vue";

const store = useStore();

let email = ref("");
let password = ref("");

function login () {
	store.dispatch("login", { email: email.value, password: password.value });
}

</script>

<template>
	<b-form class="h-100 container mt-5 d-flex flex-column">
		<b-form-input v-model="email" class="mb-4" placeholder="email" type="email"></b-form-input>
		<b-alert :show="store.state.loginError.email.length > 0" variant="danger">
			<div v-for="emailError in store.state.loginError.email">
				<span>{{ emailError }}</span>
				<hr class="my-1">
			</div>
		</b-alert>
		<b-form-input v-model="password" class="mb-4" placeholder="password" type="password"></b-form-input>
		<b-alert :show="store.state.loginError.password.length > 0" variant="danger">
			<div v-for="passwordError in store.state.loginError.password">
				<span>{{ passwordError }}</span>
				<hr class="my-1">
			</div>
		</b-alert>
		<b-button class="align-self-center" type="submit" @click="login">Войти</b-button>
	</b-form>
</template>

<style scoped>

</style>