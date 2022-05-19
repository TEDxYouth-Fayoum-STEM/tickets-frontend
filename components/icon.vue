<template>
  <fa :icon="icon" :size="s" />
</template>

<script lang="ts" setup>
const props = defineProps({
  i: {
    type: String,
    required: true
  },
  s: {
    type: String,
    default: null,
    required: false
  }
});

const icon = computed(() => {
  const data = props.i.split(" ");
  return [`fa${data[0]}`, data[1]];
});
</script>
