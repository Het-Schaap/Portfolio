<template>
  <div id="home-page">
    <!-- <v-btn :prepend-icon="theme.currentTheme.dark === false ? 'mdi-weather-sunny' : 'mdi-weather-night'" @click="theme.toggleTheme()"
      >Toggle Theme</v-btn
    > -->
    <v-btn @click="theme.setTheme('customDark')">weird theme</v-btn>
    <div class="text-surface">surface text &#9646</div>
    <div class="text-surface-variant">surface variant text &#9646</div>
    <div class="text-primary-lighten-1">lighten 1 &#9646</div>
    <div class="text-primary-darken-1">darken 1 &#9646</div>

    <div class="text-primary-darken-2">darken 2 &#9646</div>
    <div class="text-primary">primary &#9646</div>
    <div class="text-secondary">seconday &#9646</div>
    <div class="text-secondary-lighten-1">lighten 1 &#9646</div>
    <div class="text-secondary-darken-1">darken 1 &#9646</div>
    <div class="text-secondary-darken-2">darken 2 &#9646</div>
    <div class="text-info">info &#9646</div>
    <div class="text-success">success &#9646</div>
    <div class="text-error">error &#9646</div>
    <div class="text-warning">warning &#9646</div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
</script>

<style scoped lang="scss"></style>
