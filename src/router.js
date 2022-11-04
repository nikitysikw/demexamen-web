import { createRouter, createWebHashHistory } from "vue-router";
import store from "./store/index.js";

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: "/",
			component: () => import("@/views/Home.vue"),
			name: "home",
			beforeEnter: async () => {
				await store.dispatch("getTenVideos");
			},
		},
		{
			path: "/login",
			component: () => import("@/views/Login.vue"),
			name: "login",
			beforeEnter: () => {
				return !store.getters.isLogin
			}
		},
		{
			path: "/registration",
			component: () => import("@/views/Registration.vue"),
			name: "registration",
			beforeEnter: () => {
				return !store.getters.isLogin
			}
		},
		{
			path: "/profile",
			component: () => import("@/views/Profile.vue"),
			name: "profile",
			beforeEnter: async () => {
				await store.dispatch("getMyVideos", store.state.user.data.token);
				return store.getters.isLogin
			}
		},
		{
			path: "/admin",
			component: () => import("@/views/Admin.vue"),
			name: "admin",
			beforeEnter: async () => {
				await store.dispatch("getVideos");
				await store.dispatch("getStatus");
				return store.getters.isAdmin;
			},
		},
		{
			path: "/upload",
			component: () => import("@/views/Upload.vue"),
			name: "upload",
			beforeEnter: async () => {
				await store.dispatch("getCategories")
				return store.getters.isLogin
			}
		},
		{
			path: "/video/:id",
			component: () => import("@/views/Video.vue"),
			name: "video",
			beforeEnter: async (to) => {
				await store.dispatch("getVideo", to.params.id);
			},
			props: true,
		},
	],
});

export default router;