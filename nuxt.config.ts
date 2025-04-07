import path from "path";
import { defineNuxtConfig } from "nuxt/config";
import i18n from "@nuxtjs/i18n";

export default defineNuxtConfig({
  devtools: { enabled: true },

  typescript: {
    strict: false,
  },

  modules: [i18n],

  i18n: {
    vueI18n: "./i18n.config.ts",
  },

  compatibilityDate: "2025-01-03",

  app: {
    head: {
      script: [{ src: "https://getlaunchlist.com/js/widget.js", defer: true }],
    },
  },
});
