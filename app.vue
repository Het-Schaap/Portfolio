<template>
  <div id="app">
    <v-app>
      <v-main>
        <!--  Markup shared across all pages, ex: NavBar -->
        <NuxtPage />
      </v-main>
    </v-app>
  </div>
</template>

<script setup lang="ts">
//* Page Meta
useHead({
  title: 'Nuxt app',
  meta: [{ name: 'Nuxt app', content: 'Nuxt app' }],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  bodyAttrs: {
    class: 'body',
  },
  script: [{ children: "console.log('Nuxt app')" }],
})

//* Stores
const store = useNuxtStore()

//* Created
if (store.env === '') {
  const env = await $fetch('/api/env')
  store.env = env
}
if (process.client) {
  console.log('Nuxt 3 app listening on ' + window.location.protocol + '//' + window.location.host + ' in ' + store.env + ' environment.')
}
</script>

<style src="@/assets/css/main.scss" lang="scss" />
