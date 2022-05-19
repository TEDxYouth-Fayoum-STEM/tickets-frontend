<template>
  <span class="font-bold" :class="color">
    {{ t }}
  </span>
</template>

<script lang="ts" setup>
const props = defineProps({
  t: {
    type: String,
    required: true
  },
  priority: {
    type: String,
    default: "low",
    required: false
  }
});

const color = computed(() => {
  switch (props.priority) {
    case "high":
      return "text-primary-300";
    case "med":
      return "text-primary-300";
    default:
      return null;
  }
});
</script>
