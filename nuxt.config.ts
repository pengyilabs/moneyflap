// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    strict: false,
  },
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(otf)$/,
        use: "file-loader",
      });
    },
  },
  fonts: [
    "Sofia-Pro-Black.otf",
    "Sofia-Pro-Black-Italic.otf",
    "Sofia-Pro-Bold.otf",
    "Sofia-Pro-Bold-Italic.otf",
    "Sofia-Pro-ExtraLight.otf",
    "Sofia-Pro-ExtraLight-Italic.otf",
    "Sofia-Pro-Light.otf",
    "Sofia-Pro-Light-Italic.otf",
    "Sofia-Pro-Medium.otf",
    "Sofia-Pro-Medium-Italic.otf",
    "Sofia-Pro-Regular.otf",
    "Sofia-Pro-Regular-Italic.otf",
    "Sofia-Pro-Semi-Bold.otf",
    "Sofia-Pro-Semi-Bold-Italic.otf",
    "Sofia-Pro-UltraLight.otf",
    "Sofia-Pro-UltraLight-Italic.otf",
  ],
  head: {
    link: [
      {
        rel: "stylesheet",
        href: "./fonts.css",
      },
    ],
  },
});
