import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
	appType: "spa",
	server: {
		host: "demexamen.loc"
	},
	build: {
		emptyOutDir: false,
		sourcemap: true,
	},
});
