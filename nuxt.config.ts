import { defineNuxtConfig } from "nuxt";
import eslintPlugin from "vite-plugin-eslint";
import css from "./config/css.json";
import transpiled from "./config/transpiled.json";

const IS_PROD = process.env.NODE_ENV === "production";

export default defineNuxtConfig({
  runtimeConfig: {
    log: process.env.LOG,
    logPwd: process.env.LOG_PWD,
    public: {
      api: process.env.API
    }
  },
  typescript: {
    strict: true
  },
  vite: {
    plugins: [eslintPlugin()]
  },
  css,
  head: {
    script: [{ src: "https://unpkg.com/flowbite@1.4.5/dist/flowbite.js" }]
  },
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
