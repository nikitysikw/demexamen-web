<script setup>
import axios from "axios";
import { ref } from "vue";
import { useStore } from "vuex";

let name_file = ref();
let video_category_id = ref();
let title = ref("");
let body = ref("");

const store = useStore();

let categories = store.state.categories;

function uploadVideo () {
	axios.post("http://api.demexamen.loc:8000/api/videos",
		{
			"file": name_file.value,
			"video_category_id": video_category_id.value,
			"title": title.value,
			"body": body.value,
		},
		{
			headers: {
				"Authorization": "Bearer " + store.state.user.data.token,
			},
		});
}


</script>

<template>
	<b-container class="mt-5">
		<b-form>
			<b-form-input v-model="title" class="mb-2" placeholder="Название видеоролика" type="text"></b-form-input>
			<b-form-input v-model="body" class="mb-2" placeholder="Описание видеоролика" type="text"></b-form-input>
			<b-form-select v-model="video_category_id" class="mb-2">
				<b-form-select-option v-for="category in categories" :value="category.id">
					{{ category.name }}
				</b-form-select-option>
			</b-form-select>
			<b-form-input v-model="name_file" class="mb-2" placeholder="видеофайл" type="text"></b-form-input>
			<b-button type="submit" @click="uploadVideo">Загрузить видеофайл</b-button>
		</b-form>
	</b-container>
</template>

<style scoped>

</style>