<script setup lang="ts">

</script>

<!--------------------------------------------------------------- TEMPLATE ---->

<template>
  <section>
    <h2>Log In</h2>

    <form>

      <FormInput name="email" type="email" required label="Email" />

      <FormInput name="password" type="password" required label="Password" />

      <div class="form-btns">
        <PrimaryButton type="submit">Go</PrimaryButton>
      </div>

    </form>
  </section>
</template>

<!------------------------------------------------------------------ STYLE ---->

<style scoped lang="postcss">
h2 {
  @apply text-center mb-3;
}

section {
  @apply min-w-max min-h-max self-center;
}

.form-btns {
  @apply block text-right me-4;
}
</style>
