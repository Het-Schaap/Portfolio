// https://v3.nuxtjs.org/api/configuration/nuxt-config/
// https://v3.nuxtjs.org/getting-started/deployment/
// https://v3.nuxtjs.org/guide/concepts/rendering/
// https://next.vuetifyjs.com/en/
// https://nuxt-security.vercel.app/

export default defineNuxtConfig({
  // Rendering type: server side rendering
  ssr: true,
  // Modules
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
    'nuxt-security',
  ],
  // Default CSS Sheets: main.scss and vuetify
  css: ['~/assets/css/main.scss', 'vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css'],
  // Build plugins
  build: {
    transpile: ['vuetify'],
  },
  // Auto imports
  imports: {
    dirs: ['store'],
  },
  // Vite
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  // security
  security: {
    hidePoweredBy: false,
  },
})
