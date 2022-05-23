<template>
  <div :class="[flex, width, spacing]">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data: () => ({
    flex: "flex flex-col justify-center justify-items-center",
    width: "w-auto sm:w-sm md:w-md",
    spacing: "mt-6 md:mt-4 lg:mt-10 mx-5 sm:mx-auto"
  })
});
</script>
