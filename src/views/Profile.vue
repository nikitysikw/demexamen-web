<script setup>
import { useStore } from "vuex";

let store = useStore();

let videos = store.state.user.videos;
</script>

<template>
	<b-container class="mt-5">
		<b-card v-for="video of videos" :key="video.id" class="mb-2">
			<b-card-title>
				Название: {{ video.title }}
			</b-card-title>
			<b-card-body>
				<span>Описание: {{ video.body }}</span>
				<p>Дата и время загрузки ролика: {{ video.time_create }}</p>
				<p>Категория: {{ video.video_category }}</p>
				<p>Статус: {{ video.video_status }}</p>
				<span>Кол-во лайков: {{ video.likes }}</span>
				<p>Кол-во дизлайков: {{ video.dislikes }}</p>
			</b-card-body>

		</b-card>
	</b-container>
</template>

<style scoped>

</style>