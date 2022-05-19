<template>
  <div class="mb-3 select-none text-3xl font-bold text-primary-300">
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
</script>
