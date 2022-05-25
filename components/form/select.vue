<template>
  <div class="mb-4" :class="{ 'lg:col-span-2': props.full }">
    <label :for="id" class="label">
      {{ props.l }}
      <Marked v-if="req" t=" *" priority="high" />
    </label>
    <select :id="id" :name="props.id" class="input" :required="req">
      <option v-if="props.ph" value="" selected disabled>{{ props.ph }}</option>
      <slot />
    </select>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  id: {
    type: String,
    required: true
  },
  l: {
    type: String,
    required: true
  },
  ph: {
    type: String,
    default: "",
    required: false
  },
  full: {
    type: Boolean,
    default: false,
    required: false
  },
  req: {
    type: Boolean,
    default: false,
    required: false
  }
});

const id = computed(() => {
  return `form-control-${props.id}`;
});
</script>
