<script setup lang="ts">
import medias from '@data/medias'

const category = ref('Books')

const mediaList = computed(() => {
  return medias.filter((m) => {
    return m.type === category.value.toLowerCase().slice(0, -1)
  })
})
</script>

<template>
  <section>
    <Table>
      <TableThead>
        <tr>
          <TableTh>Title</TableTh>
          <TableTh>Copies</TableTh>
          <TableTh>Checked Out</TableTh>
          <TableTh actions>
            <Dropdown :options="['Books', 'Films', 'Albums']"
                      @select="(i) => (category = (i as string))">
              {{ category }}
            </Dropdown>
            <PrimaryButton>Add New</PrimaryButton>
          </TableTh>
        </tr>
      </TableThead>

      <TableTbody>
        <tr v-for="(media, index) in mediaList" :key="index">
          <TableTd>
            <div>{{ media.title }}</div>
            <SecondaryInfo>{{ media.name }}</SecondaryInfo>
          </TableTd>

          <TableTd>{{ media.copies }}</TableTd>

          <TableTd>
            <div>{{ media.checkedOut }}</div>
            <SecondaryInfo v-if="media.holds.length > 0">
              {{ media.holds.length }} on hold
            </SecondaryInfo>
          </TableTd>

          <TableTd actions>
            <NuxtLink :to="`/medias/${media.id}/checkout`">Check Out</NuxtLink>
            <NuxtLink :to="`/medias/${media.id}`">View</NuxtLink>
            <NuxtLink :to="`/medias/${media.id}/edit`">Edit</NuxtLink>
          </TableTd>
        </tr>
      </TableTbody>
    </Table>
  </section>
</template>

<style scoped lang="postcss">
section {
  @apply w-full;
}
</style>
