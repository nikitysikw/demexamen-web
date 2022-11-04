<script setup>
import { useStore } from "vuex";
import axios from "axios";

let store = useStore();

let statuses = store.state.videoStatus;
let videos = store.state.videos;

async function changeStatus (video_id, new_status_id, options) {
	for (let option of options) {
		option.disabled = false
	}

	options[new_status_id - 1].disabled = true

	await axios.post("http://api.demexamen.loc:8000/api/users/change/status", {
        video: video_id,
        new_status: new_status_id
      }, {
          headers: {
            'Authorization': "Bearer " + store.state.user.data.token
          }
        }
      )
}

</script>

<template>
	<b-container class="mt-5">
		<b-card v-for="video in videos" :key="video.id">
			<b-card-title>
				Название: {{ video.title }}
			</b-card-title>
			<b-card-body>
				<span>Описание: {{ video.name_file }}</span>
				<p>Дата и время загрузки ролика: {{ video.time_create }}</p>
				<b-form-select @change.capture="changeStatus(video.id, Number($event.target.value), $event.target)">
					<b-form-select-option v-for="status in statuses" :key="status.id" :value="status.id" :disabled="status.id === video.video_status_id">
						{{ status.name }}
					</b-form-select-option>
				</b-form-select>
			</b-card-body>
		</b-card>
	</b-container>
</template>

<style scoped>

</style>