<script setup lang="ts">
defineProps<{actions?: boolean}>()
</script>

<template>
  <td :class="{actions: actions}"><slot /></td>
</template>

<style lang="postcss">
td {
  @apply py-5 px-3 whitespace-nowrap;

  @apply first-of-type:ps-0;
  @apply last-of-type:pe-0;

  div {
    @apply mt-1;

    @apply first-of-type:mt-0;
  }
}
</style>
