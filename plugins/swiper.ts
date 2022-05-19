import { defineNuxtPlugin } from "nuxt/app";
import { Swiper, SwiperSlide } from "swiper/vue";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("swiper", Swiper);
  nuxtApp.vueApp.component("swiper-slide", SwiperSlide);
});
