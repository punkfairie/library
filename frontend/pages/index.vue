<script setup lang="ts">

</script>

<!----------------------------------------------------------------------------------- TEMPLATE ---->

<template>
  <section>
    <h2>Login</h2>

    <form>

      <div>
        <label for="email">Email</label>
        <input id="email" type="email" required name="email">
      </div>

      <div>
        <label for="password">Password</label>
        <input id="password" type="password" required name="password">
      </div>

      <div class="form-btns">
        <button type="submit">Go</button>
      </div>

    </form>
  </section>
</template>

<!-------------------------------------------------------------------------------------- STYLE ---->

<style scoped lang="postcss">
h2 {
  @apply text-center mb-3;
}

section {
  @apply min-w-max min-h-max self-center;
}

div {
  @apply mb-4 last:mb-0;
}

label {
  @apply block;
}

input {
  @apply bg-white bg-opacity-30;
  @apply border-gradient;
}

.form-btns {
  @apply block text-right me-4;
}

button {
  @apply px-5 py-1.5 rounded-xl;
  @apply text-pink-500;
  @apply border-pink-400 border-2;
  @apply transition-colors duration-200 hover:bg-pink-400 hover:text-white;
}
</style>
