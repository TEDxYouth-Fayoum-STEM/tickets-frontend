import { defineNuxtPlugin } from "nuxt/app";
// eslint-disable-next-line import/default
import Multiselect from "@vueform/multiselect";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("MultiSelect", Multiselect);
});
