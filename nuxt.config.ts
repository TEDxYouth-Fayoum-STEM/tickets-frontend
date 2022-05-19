import { defineNuxtConfig } from "nuxt";
import eslintPlugin from "vite-plugin-eslint";
import css from "./config/css.json";
import transpiled from "./config/transpiled.json";

const IS_PROD = process.env.NODE_ENV === "production";

export default defineNuxtConfig({
  typescript: {
    strict: true
  },
  vite: {
    plugins: [eslintPlugin()]
  },
  css,
  build: {
    analyze: true,
    extractCSS: IS_PROD,
    optimizeCSS: IS_PROD,
    transpile: transpiled,
    postcss: {
      postcssOptions: require("./postcss.config")
    }
  }
});
