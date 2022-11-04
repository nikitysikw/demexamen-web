<script setup>
import { useStore } from "vuex";
import { computed, ref } from "vue";

const props = defineProps({
	id: {
		type: Number,
		required: true,
	},
});
let store = useStore();

let video = store.state.video.data;
let comments = computed(() => {
	return store.state.video.comments;
});

let bodyComment = ref("");

function submitComment () {
	store.dispatch("createComment", { token: store.state.user.data.token, video_id: props.id, body: bodyComment.value });
}

console.log(comments);

</script>

<template>
	<div class="m-5">
		<div class="border p-2 mb-2">
			<p>Название ролика: {{ video.title }}</p>
			<p>Описание ролика: {{ video.body }}</p>
			<p>Кол-во лайков: {{ video.likes }}</p>
			<p>Кол-во дизлайков: {{ video.dislikes }}</p>
			<p>Дата и время загрузки в формате: {{ video.time_create }}</p>
		</div>
		<div v-if="store.getters.isLogin" class="my-5">
			<h2>Написать коментарий</h2>
			<b-form-input v-model="bodyComment" class="mb-2" type="text"></b-form-input>
			<b-button type="button" @click="submitComment">Отправить</b-button>
		</div>
		<div class="border p-2">
			<b-card v-for="comment of comments" :key="comment.time_create" class="mb-1">
				<b-card-title class="d-flex justify-content-between">
					<span>Автор: {{ comment.username }}</span>
					<span>{{ comment.time_create }}</span>
				</b-card-title>
				<b-card-body>
					{{ comment.body }}
				</b-card-body>
			</b-card>
		</div>
	</div>
</template>

<style scoped>

</style>