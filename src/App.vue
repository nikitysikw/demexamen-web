<script setup>
import { useStore } from "vuex";

const store = useStore()

</script>

<template>
	<ul class="nav nav-tabs nav-justified">
		<li class="nav-item">
			<router-link :to="{name: 'home'}" class="nav-link">Домой</router-link>
		</li>
		<li v-if="!store.getters.isLogin" class="nav-item">
			<router-link :to="{name: 'login'}" class="nav-link">Вход</router-link>
		</li>
		<li v-if="!store.getters.isLogin" class="nav-item">
			<router-link :to="{name: 'registration'}" class="nav-link">Регистрация</router-link>
		</li>
		<li v-if="store.getters.isAdmin" class="nav-item">
			<router-link :to="{name: 'admin'}" class="nav-link">Кабинет администратора</router-link>
		</li>
		<li v-if="store.getters.isLogin" class="nav-item d-flex">
			<router-link :to="{name: 'profile'}" class="nav-link">Мои видео</router-link>
			<router-link :to="{name: 'upload'}" class="nav-link">+</router-link>
			<b-button class="me-2" type="button" variant="outline-primary" @click="store.dispatch('logout', store.state.user.data.token)">Выйти</b-button>
		</li>
	</ul>
	<router-view>

	</router-view>
</template>

<style scoped>

</style>
