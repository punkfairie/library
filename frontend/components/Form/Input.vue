<script setup lang="ts">
defineProps<{label?: string, name:string, type?: string, modelValue: any}>()
defineEmits(['update:modelValue'])
</script>

<!----------------------------------------------------------------------------------- TEMPLATE ---->

<template>
  <div>
    <label v-if="label" :for="name">{{ label }}</label>

    <!--suppress RequiredAttributes -->
    <input
      :id="name"
      :type="type ?? 'text'"
      :value="modelValue"
      :name="name"
      v-bind="$attrs"
      @input="$emit('update:modelValue', $event.target.value)"
    >
  </div>
</template>

<!-------------------------------------------------------------------------------------- STYLE ---->

<style scoped lang="postcss">
div {
  @apply mb-4 last:mb-0;
}

label {
  @apply block;
}

input {
  @apply bg-white bg-opacity-30;
  @apply border-gradient;
}
</style>
