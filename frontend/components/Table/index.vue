<script setup lang="ts">

</script>

<template>
  <table>
    <slot />
  </table>
</template>

<style lang="postcss">
table {
  @apply w-full;
}

.actions {
  @apply text-end;

  & > * {
    @apply me-3;

    @apply last:me-0;
  }
}
</style>
