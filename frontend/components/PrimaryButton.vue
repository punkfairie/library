<script setup lang="ts">
defineProps<{type?: string}>()
</script>

<!----------------------------------------------------------------------------------- TEMPLATE ---->

<template>
  <button :type="type ?? 'button'"><slot /></button>
</template>

<!-------------------------------------------------------------------------------------- STYLE ---->

<style scoped lang="postcss">
button {
  @apply px-5 py-1.5 rounded-xl;
  @apply text-pink-500;
  @apply border-pink-400 border-2;
  @apply transition-colors duration-200 hover:bg-pink-400 hover:text-white;
}
</style>
