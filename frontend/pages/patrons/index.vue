<script setup lang="ts">
import patrons from '@data/patrons'
</script>

<!--------------------------------------------------------------- TEMPLATE ---->

<template>
  <section>
    <Table>

      <TableThead>
        <tr>
          <TableTh>Name</TableTh>
          <TableTh>Status</TableTh>
          <TableTh>Checked Out</TableTh>
          <TableTh>Fines</TableTh>
          <TableTh actions>
            <PrimaryButton>Add New</PrimaryButton>
          </TableTh>
        </tr>
      </TableThead>

      <TableTbody>

        <tr v-for="(patron, index) in patrons" :key="index">
          <TableTd>
            <div>{{ patron.name }}</div>
            <SecondaryInfo>{{ patron.email }}</SecondaryInfo>
          </TableTd>

          <TableTd>
            <Badge :state="patron.status === 'Active' ? 'good' : 'bad'">
              {{ patron.status }}
            </Badge>
          </TableTd>

          <TableTd>
            <div>{{ patron.checkedOut }} books</div>
            <SecondaryInfo>{{ patron.overdue }} overdue</SecondaryInfo>
          </TableTd>

          <TableTd>
            <div>${{ patron.fines }}</div>
          </TableTd>

          <TableTd actions>
            <a href="#">Check Out</a>
            <a href="#">View</a>
            <a href="#">Edit</a>
          </TableTd>
        </tr>

      </TableTbody>

    </Table>
  </section>
</template>

<!------------------------------------------------------------------ STYLE ---->

<style scoped lang="postcss">
section {
  @apply w-full px-10;
}
</style>
