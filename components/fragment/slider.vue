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

const slides = [
  "slide 1.png",
  "slide 2.png",
  "slide 3.jpg",
  "slide 4.jpg",
  "slide 5.jpg"
];
const pagination = { clickable: true };
const autoplay = { delay: 4000 };
const speed = 1000;
const loop = true;

function getSlideImage(slide: string): string {
  return `/slider/${slide}`;
}
</script>
