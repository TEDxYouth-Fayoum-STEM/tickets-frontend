<template>
  <button
    :type="type"
    class="rounded-lg bg-primary-200 px-5 py-2.5 text-center font-medium text-white hover:bg-primary-300 disabled:hover:bg-primary-200"
  >
    {{ props.l }}
  </button>
</template>

<script lang="ts" setup>
const props = defineProps({
  l: {
    type: String,
    required: true
  },
  submit: {
    type: Boolean,
    default: false,
    required: false
  }
});

const type = computed(() => (props.submit ? "submit" : "button"));
</script>
