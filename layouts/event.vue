<template>
  <div :class="[flex, width, spacing]">
    <slot />
  </div>
</template>

<script lang="ts" setup>
const flex = ref("flex flex-col lg:flex-row justify-items-center");
const width = ref("w-auto sm:w-sm md:w-md lg:w-lg xl:w-xl");
const spacing = ref("mt-6 md:mt-4 lg:mt-10 mx-5 sm:mx-auto lg:gap-x-12");
</script>
