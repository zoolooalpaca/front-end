import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  console.log(mode)
  return {
    server: {
      port: 3000,
      watch: { usePolling: true },
    },
    plugins: [vue()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    base: mode === 'production' ? "/order-in/" : './',
  };
});
