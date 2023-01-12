<template>
  <div id="home-page">
    <!-- <v-btn :prepend-icon="theme.currentTheme.dark === false ? 'mdi-weather-sunny' : 'mdi-weather-night'" @click="theme.toggleTheme()"
      >Toggle Theme</v-btn
    > -->
    <v-btn @click="theme.setTheme('customDark')">weird theme</v-btn>
    <div class="text-surface">surface text</div>
    <div class="text-primary-lighten-1">lighten 1</div>
    <div class="text-primary-darken-1">darken 1</div>

    <div class="text-primary-darken-2">darken 2</div>
    <div class="text-primary">primary</div>
    <div class="text-secondary">seconday</div>
    <div class="text-secondary-darken-2">darken 2</div>
    <div class="text-info">info</div>
    <div class="text-success">success</div>
    <div class="text-error">error</div>
    <div class="text-warning">warning</div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
</script>

<style scoped lang="scss"></style>
