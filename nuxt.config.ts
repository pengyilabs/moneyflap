import path from "path";
// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    strict: false,
  },
  modules: ["@nuxtjs/i18n"],
  i18n: {
    vueI18n: "./i18n.config.ts", // if you are using custom path, default
  },
  // alias: {
  //   "@": path.resolve(__dirname, "src"),
  // },
});
