import { createApp } from "vue";
import App from "@/App.vue";
import BootstrapVue3 from "bootstrap-vue-3";
import router from "@/router";
import store from "./store/index.js";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import "./style.css";

createApp(App).use(BootstrapVue3).use(router).use(store).mount("#app");
