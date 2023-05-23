// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', 'nuxt-typed-router'],
  devServer: {
    host: 'bibliothecary.test',
  },
  telemetry: false,
  googleFonts: {
    preconnect: true,
    families: {
      Imprima: true,
    }
  }
});
