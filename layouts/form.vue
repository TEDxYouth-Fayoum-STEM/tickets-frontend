<template>
  <div :class="[flex, width, spacing]">
    <slot />
  </div>
</template>

<script lang="ts" setup>
const flex = ref("flex flex-col justify-center justify-items-center");
const width = ref("w-auto sm:w-sm md:w-md lg:w-lg-f");
const spacing = ref("mt-6 md:mt-4 lg:mt-10 mx-5 sm:mx-auto");
</script>
