<script setup lang="ts">
import medias from '@data/medias'

const mediaList = computed(() => {
  return medias.filter((m) => m.type === 'book')
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
            <SecondaryInfo>{{ media.holds.length }} on hold</SecondaryInfo>
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

</style>
