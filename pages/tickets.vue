<template>
  <div class="contents">
    <div class="box flex flex-col items-center p-5">
      <Title
        t="TICKETS ARE AVAILABLE!"
        class="animate__animated transition-all hover:grayscale hover:motion-safe:animate-pulse lg:mb-0"
        :class="{ animate__flash: animateTitle }"
      />
      <div class="mt-5">
        <img class="lg:max-h-80" src="/announcement.png" />
      </div>
    </div>
    <div class="box mt-6 flex justify-center p-5">
      <CounterTime :timestamp="1653420600000" />
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "form",
  title: "Tickets"
});

const animateTitle = ref(false);

onMounted(() => {
  animateTitle.value = true;
  setTimeout(() => {
    animateTitle.value = false;
  }, 1000);
});
</script>
