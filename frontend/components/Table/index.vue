<script setup lang="ts">

</script>

<template>
  <table><slot /></table>
</template>

<style lang="postcss">
table {
  @apply w-full;
}

.actions {
  @apply text-end;

  a {
    @apply me-3;

    @apply last-of-type:me-0;
  }
}
</style>
