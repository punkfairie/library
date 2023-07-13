<script setup lang="ts">
const patrons = [
  {name: 'Bob Harrison', email: 'bob.harrison@gmail.com', status: 'Active', checkedOut: 5, overdue: 0, fines: 0},
  {name: 'Rachel Levington', email: 'rachel97@hotmail.com', status: 'Active', checkedOut: 8, overdue: 0, fines: 0},
  {name: 'Jackson Smith', email: 'j.smith@gmail.com', status: 'Overdue', checkedOut: 3, overdue: 3, fines: 9},
  {name: 'Thomas Fletcher', email: 'fletchieT@gmail.com', status: 'Active', checkedOut: 7, overdue: 0, fines: 0},
  {name: 'Steve Terry', email: 'sterry@outlook.com', status: 'Overdue', checkedOut: 1, overdue: 1, fines: 5},
  {name: 'Carrie Pine', email: 'carrie1994@hotmail.com', status: 'Active', checkedOut: 8, overdue: 0, fines: 0},
  {name: 'Delilah Lowry', email: 'heytheredelilah@yahoo.com', status: 'Active', checkedOut: 8, overdue: 0, fines: 0},
  {name: 'George Jefferson', email: 'mrpresidential@protonmail.com', status: 'Active', checkedOut: 3, overdue: 0, fines: 0},
  {name: 'Sharon Mattison', email: 'sharon.mattison@gmail.com', status: 'Overdue', checkedOut: 4, overdue: 4, fines: 7},
]
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
          <TableTh></TableTh>
        </tr>
      </TableThead>

      <TableTbody>

        <tr v-for="(patron, index) in patrons" :key="index">
          <TableTd>
            <div>{{ patron.name }}</div>
            <div class="secondary-info">{{ patron.email }}</div>
          </TableTd>

          <TableTd>
            <Badge :state="patron.status === 'Active' ? 'good' : 'bad'">
              {{ patron.status }}
            </Badge>
          </TableTd>

          <TableTd>
            <div>{{ patron.checkedOut }} books</div>
            <div class="secondary-info">{{ patron.overdue }} overdue</div>
          </TableTd>

          <TableTd>
            <div>${{ patron.fines }}</div>
          </TableTd>

          <TableTd class="actions">
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

.secondary-info {
  @apply text-black/50;
}

.actions a {
  @apply me-3;

  @apply last-of-type:me-0;
}
</style>
