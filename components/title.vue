<template>
  <div
    class="animate__animated mb-3 select-none text-3xl font-bold text-primary-300 transition-all hover:grayscale hover:motion-safe:animate-pulse lg:mb-0"
    :class="{ animate__flash: animateTitle }"
  >
    {{ props.t }}
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  t: {
    type: String,
    required: true
  }
});

const animateTitle = ref(false);

onMounted(() => {
  animateTitle.value = true;
  setTimeout(() => {
    animateTitle.value = false;
  }, 1000);
});
</script>
