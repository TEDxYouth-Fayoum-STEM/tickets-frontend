<template>
  <swiper
    :modules="[Navigation, Pagination, Autoplay]"
    navigation
    :pagination="pagination"
    :autoplay="autoplay"
    :speed="speed"
    :loop="loop"
    class="m-0 rounded border-4"
  >
    <swiper-slide v-for="slide in slides" :key="slide"
      ><img :src="getSlideImage(slide)"
    /></swiper-slide>
  </swiper>
</template>

<script lang="ts" setup>
import { Navigation, Pagination, Autoplay } from "swiper";

const slides = ["slide 1.jpg", "slide 2.jpg", "slide 3.jpg"];
const pagination = { clickable: true };
const autoplay = { delay: 4000 };
const speed = 1000;
const loop = true;

function getSlideImage(slide: string): string {
  return `/slider/${slide}`;
}
</script>
