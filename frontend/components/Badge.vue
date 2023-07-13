<script setup lang="ts">
defineProps<{state: string}>()
</script>

<template>
  <span class="badge" :class="`badge-${state}`"><slot /></span>
</template>

<style lang="postcss">
.badge {
  @apply py-1 px-2 rounded-md inline-flex items-center;
  @apply ring-1 ring-inset;

  &-good {
    @apply ring-pink-600 text-pink-600 bg-pink-200/50;
  }

  &-bad {
    @apply ring-sky-600 text-sky-600 bg-sky-200/50;
  }
}
</style>
