<template>
  <div class="navbar-link inline-block text-lg transition-all">
    <NuxtLinkX :to="props.to">
      <slot />
    </NuxtLinkX>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  to: {
    type: String,
    required: true
  }
});
</script>
