<script setup lang="ts">
defineProps<{actions?: boolean}>()
</script>

<template>
  <th :class="{actions: actions}"><slot /></th>
</template>

<style lang="postcss">
th {
  @apply py-3.5 px-3;
  @apply font-bold text-left;

  @apply first-of-type:ps-0;
  @apply last-of-type:ps-3.5 last-of-type:pe-0 last-of-type:relative;
}

.actions a {
  @apply me-3;

  @apply last-of-type:me-0;
}
</style>
