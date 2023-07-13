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
    <table>

      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>Checked Out</th>
          <th>Fines</th>
          <th></th>
        </tr>
      </thead>

      <tbody>

        <tr v-for="(patron, index) in patrons" :key="index">
          <td>
            <div>{{ patron.name }}</div>
            <div class="secondary-info">{{ patron.email }}</div>
          </td>

          <td>
            <span class="badge" :class="{
              'badge-good': patron.status === 'Active',
              'badge-bad': patron.status === 'Overdue',
            }">{{ patron.status }}</span>
          </td>

          <td>
            <div>{{ patron.checkedOut }} books</div>
            <div class="secondary-info">{{ patron.overdue }} overdue</div>
          </td>

          <td>
            <div>${{ patron.fines }}</div>
          </td>

          <td class="actions">
            <a href="#">Check Out</a>
            <a href="#">View</a>
            <a href="#">Edit</a>
          </td>
        </tr>

      </tbody>

    </table>
  </section>
</template>

<!------------------------------------------------------------------ STYLE ---->

<style scoped lang="postcss">
section {
  @apply w-full px-10;
}

table {
  @apply w-full;
}

thead {
  @apply border-b border-pink-400/80;
}

th {
  @apply py-3.5 px-3;
  @apply font-bold text-left;

  @apply first-of-type:ps-0;
  @apply last-of-type:ps-3.5 last-of-type:pe-0 last-of-type:relative;
}

tbody {
  @apply divide-y divide-pink-400/40;
}

td {
  @apply py-5 px-3 whitespace-nowrap;

  @apply first-of-type:ps-0;
  @apply last-of-type:pe-0 last-of-type:text-end;

  div {
    @apply mt-1;

    @apply first-of-type:mt-0;
  }
}

.badge {
  @apply py-1 px-2 rounded-md inline-flex items-center;
  @apply ring-1 ring-inset;

  &-good {
    @apply ring-pink-600 text-pink-600 bg-pink-200/50;
  }

  &-bad {
    @apply ring-sky-600 text-sky-600 bg-sky-200/50;
  }
}

.secondary-info {
  @apply text-black/50;
}

.actions a {
  @apply me-3;

  @apply last-of-type:me-0;
}
</style>
