<template>
  <div class="page">

    <header>
      <h1><NuxtLink to="/">Bibliothecary</NuxtLink></h1>

      <nav>
        <NuxtLink to="/patrons">Patrons</NuxtLink>
        <NuxtLink to="/catalog">Catalog</NuxtLink>
        <NuxtLink to="/account">Account</NuxtLink>
      </nav>
    </header>

    <main>
      <NuxtPage />
    </main>

    <footer>&copy; 2023</footer>

  </div>
</template>

<!------------------------------------------------------------------ STYLE ---->

<style lang="postcss">
:root {
  --gradient: linear-gradient(to bottom right, #f472b6, #f0abfc, #22d3ee);
}

.page {
  @apply min-h-screen w-screen p-5 flex flex-col gap-y-5;
  @apply bg-gradient-to-br from-pink-400 via-fuchsia-300 to-cyan-400;
}

header,
section {
  @apply bg-white bg-opacity-30;
  @apply rounded-lg;
}

header {
  @apply h-12 flex justify-between items-center px-3;
}

main {
  @apply grow flex justify-center;
}

section {
  @apply p-4;
}

footer {
  @apply h-6;
  @apply text-center italic opacity-50;
}

header h1,
nav a {
  @apply opacity-70;
}

h1,
h2 {
  @apply text-2xl uppercase italic font-bold;
}

header h1 {
  @apply tracking-wide;
  @apply transition-[letter-spacing] hover:tracking-widest;
}

nav a {
  @apply mx-2;
  @apply transition-all hover:opacity-100 hover:border-b-pink-400 hover:border-b-2;
}

main a {
  @apply transition-all border-b border-b-pink-400;
  @apply hover:border-b-cyan-400;
}

p {
  @apply mb-2;
}
</style>
