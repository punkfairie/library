<script setup lang="ts">
import patrons from '@data/patrons'

const route = useRoute()

const patron = patrons.find((p) => p.id == route.params.id)

if (!patron) {
  await navigateTo('/patrons')
}

const viewing = ref('Borrowed')
</script>

<template>
  <section v-if="patron">
    <h2>{{ patron.name }}</h2>
    <SecondaryInfo>{{ patron.email }}</SecondaryInfo>

    <hr>

    <p>
      <Badge :state="patron.status === 'Active' ? 'good' : 'bad'">
        {{ patron.status }}
        <span v-if="patron.fines > 0">
          &nbsp;/&nbsp;${{ patron.fines }} in fines
        </span>
      </Badge>
    </p>

    <p>
      {{ patron.checkedOut }}
      <span v-if="patron.checkedOut === 1">item</span>
      <span v-else>items</span>
      checked out
      <span v-if="patron.overdue > 0">/ {{ patron.overdue }} overdue</span>
    </p>
  </section>

  <section class="w-full">
    <Table>
      <TableThead>
        <tr>
          <TableTh>Item</TableTh>
          <TableTh>Checked Out</TableTh>
          <TableTh>Returned</TableTh>
          <TableTh></TableTh>
          <TableTh actions>
            <Dropdown :options="['Borrowed', 'Holds']"
                      @select="(i) => (viewing = (i as string))">
              {{ viewing }}
            </Dropdown>

            <PrimaryButton>Check Out</PrimaryButton>
          </TableTh>
        </tr>
      </TableThead>

      <TableTbody>
        <tr>
          <TableTd></TableTd>
        </tr>
      </TableTbody>
    </Table>
  </section>
</template>

<style scoped lang="postcss">

</style>
