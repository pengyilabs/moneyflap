import path from "path";
import { defineNuxtConfig } from "nuxt/config";
import i18n from "@nuxtjs/i18n";

export default defineNuxtConfig({
  devtools: { enabled: true },

  typescript: {
    strict: false,
  },

  modules: [i18n],

  // alias: {
  //   "@": path.resolve(__dirname, "src"),
  // },
  i18n: {
    vueI18n: "./i18n.config.ts",
  },

  compatibilityDate: "2025-01-03",
});