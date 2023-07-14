<script setup lang="ts">
defineProps<{
  options: { id: number, name: string }[] | string[]
}>()

const emit = defineEmits<{
  select: [item: string | number]
}>()

const open = ref(false)

const select = function (item) {
  emit('select', typeof item === 'object' ? item.id : item)
}
</script>

<template>
  <div>
    <PrimaryButton @click="open = !open">
      <slot /> &downarrow;
    </PrimaryButton>

    <ul v-show="open" v-bind="$attrs">
      <li v-for="(item, index) in options" :key="index" @click="select(item)">
        <template v-if="typeof item === 'object'">
          {{ item.name }}
        </template>

        <template v-else>
          {{ item }}
        </template>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="postcss">
div {
  @apply w-max inline-block relative;
}

ul {
  @apply absolute z-10 mt-3;
  @apply rounded-xl;
  @apply border-pink-400 border-2;
  @apply bg-gradient-to-br from-pink-400 via-fuchsia-300 to-cyan-400 bg-fixed;

  li {
    @apply bg-white bg-opacity-30;
    @apply w-full px-5 py-1.5;
    @apply first:rounded-t-xl last:rounded-b-xl;
    @apply transition-colors duration-200 hover:text-pink-500;
    @apply cursor-pointer;
  }
}
</style>
