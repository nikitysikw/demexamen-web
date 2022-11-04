<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const videos = computed(() => store.state.mainVideos)
</script>

<template>
	<b-container class="mt-5">
		<router-link v-for="video of videos" :key="video.id"
		             :to="{name: 'video', params: {id: video.id}}"
		             class="text-decoration-none nav-link mb-2">
			<b-card>
				<b-card-title>
					Название: {{ video.title }}
				</b-card-title>
				<b-card-body>
					<span>Описание: {{ video.name_file }}</span>
					<p>Дата и время загрузки ролика: {{ video.time_create }}</p>
				</b-card-body>
			</b-card>
		</router-link>
	</b-container>
</template>

<style scoped>

</style>