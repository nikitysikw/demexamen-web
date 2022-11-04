import axios from "axios";
import router from "@/router";

const BASE_URL_API_SITE = "http://api.demexamen.loc:8000/api";

export default {
	async login ({ commit, dispatch }, payload) {
		
		commit("CLEAR_LOGIN_ERROR");
		
		try {
			let data = await axios.post(BASE_URL_API_SITE + "/users/login", payload);
			
			commit("SET_USER", data.data);
			
			await dispatch("getMyVideos", data.data.user.token);
			await router.push({ name: "home" });
		} catch (e) {
			if (e.response.data.errors.email) {
				commit("SET_LOGIN_ERROR_EMAIL",
					e.response.data.errors.email);
			}
			
			if (e.response.data.errors.password) {
				commit("SET_LOGIN_ERROR_PASSWORD",
					e.response.data.errors.password);
			}
		}
	},
	async registration ({ commit }, payload) {
		
		commit("CLEAR_REGISTRATION_ERROR");
		
		try {
			let data = await axios.post(BASE_URL_API_SITE + "/users", payload)
			
			commit("SET_USER", data.data);
			await router.push("/");
		} catch (e) {
			if (e.response.data.errors.email) {
				commit("SET_REGISTRATION_ERROR_EMAIL",
					e.response.data.errors.email);
			}
			
			if (e.response.data.errors.password) {
				commit("SET_REGISTRATION_ERROR_PASSWORD",
					e.response.data.errors.password);
			}
			
			if (e.response.data.errors.username) {
				commit("SET_REGISTRATION_ERROR_USERNAME",
					e.response.data.errors.username);
			}
			
			if (e.response.data.errors.repeatPassword) {
				commit("SET_REGISTRATION_ERROR_REPEAT_PASSWORD",
					e.response.data.errors.repeatPassword);
			}
		}
	},
	async logout ({ commit }, token) {
		
		commit("CLEAR_USER");
		
		await axios.post(BASE_URL_API_SITE + "/users/logout", null, {
			headers: {
				"Authorization": "Bearer " + token,
			},
		});
		
		await router.push({ name: "home" });
	},
	async getTenVideos ({ commit }) {
		commit("CLEAR_MAIN_VIDEOS");
		
		let data = await axios.get(BASE_URL_API_SITE + "/videos/ten");
		
		commit("SET_MAIN_VIDEOS", data.data);
	},
	async getMyVideos ({ commit }, token) {
		commit("CLEAR_USER_VIDEOS");
		
		let data = await axios.get(BASE_URL_API_SITE + "/videos/my", {
			headers: {
				"Authorization": "Bearer " + token,
			},
		});
		
		commit("SET_USER_VIDEOS", data.data);
	},
	async getVideos ({ commit }) {
		commit("CLEAR_VIDEOS");
		
		let data = await axios.get(BASE_URL_API_SITE + "/videos");
		
		commit("SET_VIDEOS", data.data);
	},
	async getVideo ({ commit }, id) {
		let data = await axios.get(BASE_URL_API_SITE + "/videos/" + id);
		
		commit("SET_VIDEO", data.data);
	},
	async createComment ({ dispatch }, { token, video_id, body }) {
		await axios.post(BASE_URL_API_SITE + "/comment", {
			video_id: video_id,
			body: body,
		}, {
			headers: {
				"Authorization": "Bearer " + token,
			},
		});
		
		await dispatch("getVideo", video_id);
	},
	async getStatus ({ commit }) {
		let data = await axios.get(BASE_URL_API_SITE + "/status");
		
		commit("SET_STATUS_VIDEOS", data.data);
	},
	async getCategories({commit}) {
		let data = await axios.get(BASE_URL_API_SITE + '/category');
		
		commit("SET_VIDEO_CATEGORIES", data.data)
	},
};