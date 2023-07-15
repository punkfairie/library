import {fileURLToPath, URL} from 'node:url'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'nuxt-typed-router',
    '@vueuse/nuxt',
  ],
  devServer: {
    host: 'bibliothecary.test',
  },
  telemetry: false,
  alias: {
    '@data': fileURLToPath(new URL('./data', import.meta.url)),
  },
  googleFonts: {
    preconnect: true,
    families: {
      Imprima: true,
    },
  },
})
