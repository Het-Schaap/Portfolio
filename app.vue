<template>
  <div id="app">
    <v-app :theme="theme.currentTheme.name">
      <v-app-bar v-if="mobile" density="compact">
        <template v-slot:prepend>
          <v-app-bar-nav-icon @click="drawer.visible = !drawer.visible"></v-app-bar-nav-icon>
        </template>
        <v-btn :icon="theme.currentTheme.dark === false ? 'mdi-weather-sunny' : 'mdi-weather-night'" @click="theme.toggleTheme()"></v-btn>
      </v-app-bar>
      <v-navigation-drawer expand-on-hover rail v-model="drawer.visible" :location="drawer.location" :temporary="drawer.temporary">
        <v-list>
          <v-list-item
            :prepend-avatar="activeUser.userAvatar ? activeUser.userAvatar : ''"
            :prepend-icon="activeUser.userAvatar ? '' : 'mdi-account-circle'"
            :title="activeUser.userName"
            :subtitle="activeUser.userEmail"
            value="user"
            class="drawer-item darker"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list>
          <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles" color="primary" class="drawer-item"></v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared" color="primary" class="drawer-item"></v-list-item>
          <v-list-item prepend-icon="mdi-star" title="Starred" value="starred" color="primary" class="drawer-item"></v-list-item>

          <v-divider></v-divider>

          <v-list-item prepend-icon="mdi-home" title="Home" value="home" @click="navigateTo('/')" color="primary" class="drawer-item"></v-list-item>
          <v-list-item prepend-icon="mdi-email" title="Contact" value="contact" @click="navigateTo('/contact')" color="primary" class="drawer-item">
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item
            :prepend-icon="theme.currentTheme.dark === false ? 'mdi-weather-sunny' : 'mdi-weather-night'"
            title="Theme"
            @click="theme.toggleTheme()"
            color="primary"
            class="drawer-item"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <!--  Markup shared across all pages, ex: NavBar -->
        <NuxtPage />
      </v-main>
    </v-app>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'
import { useDisplay } from 'vuetify'
const { width, mobile } = useDisplay()

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

//* Variables
type DrawerLocation = 'bottom' | 'start' | 'end' | 'left' | 'right' | undefined
const drawer: Ref<{ visible: boolean; location: DrawerLocation; temporary: boolean }> = ref({
  visible: true,
  location: 'start' as DrawerLocation,
  temporary: false,
})
const test: Ref<string> = ref('test')
//* Mount
onMounted(() => {
  setDrawerLocation()
})
//* Watch
watch(mobile, async (newValue, oldValue) => {
  setDrawerLocation()
})

//* Functions
function setDrawerLocation() {
  if (mobile.value === true) {
    drawer.value.location = 'bottom'
    drawer.value.temporary = false
  } else {
    drawer.value.location = 'start'
  }
}
</script>

<style src="@/assets/css/main.scss" lang="scss" />
