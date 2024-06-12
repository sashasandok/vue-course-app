import { fileURLToPath } from "url";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/styles/main.scss"],
  modules: ["@pinia/nuxt", '@nuxt/image'],
  pinia: {
    storesDirs: ["./stores/**"],
  },
  alias: {
    "@components": fileURLToPath(new URL("./components", import.meta.url)),
    "@stores": fileURLToPath(new URL("./stores", import.meta.url)),
    "@mocks": fileURLToPath(new URL("./mocks", import.meta.url)),
    "@interfaces": fileURLToPath(new URL("./interfaces", import.meta.url)),
    "@api": fileURLToPath(new URL("./api", import.meta.url)),
    "@services": fileURLToPath(new URL("./services", import.meta.url)),
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ["Button"].includes(tag),
    },
  },
});
