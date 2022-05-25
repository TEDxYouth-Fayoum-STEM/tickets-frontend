<template>
  <div class="mb-4" :class="{ 'lg:col-span-2': props.full }">
    <label :for="id" class="label">
      {{ props.l }}
      <Marked v-if="req" t=" *" priority="high" />
    </label>
    <input
      :id="id"
      :name="props.id"
      :type="props.t"
      class="input"
      :placeholder="props.ph"
      :value="props.modelValue"
      :required="req"
      @input="updateValue"
      @change="change"
    />
    <p v-if="props.e" class="mt-2 text-sm text-red-600 dark:text-red-500">
      <span class="font-medium">Error!</span> {{ props.e }}
    </p>
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
  t: {
    type: String,
    default: "text",
    required: false
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
  modelValue: {
    type: [File, String],
    default: "",
    requried: false
  },
  req: {
    type: Boolean,
    default: false,
    required: false
  },
  e: {
    type: String,
    default: "",
    required: false
  }
});

const id = computed(() => {
  return `form-control-${props.id}`;
});

const emit = defineEmits(["update:modelValue", "change"]);

function getValue(target: HTMLInputElement): unknown {
  switch (props.t) {
    case "file":
      return (<FileList>target.files)[0];
    default:
      return target.value;
  }
}

function updateValue(event: Event): void {
  emit("update:modelValue", getValue(<HTMLInputElement>event.target));
}

function change(event: Event): void {
  emit("change", getValue(<HTMLInputElement>event.target));
}
</script>
