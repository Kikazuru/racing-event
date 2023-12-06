<template>
  <v-app>
    <header-app></header-app>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import HeaderApp from './components/HeaderApp.vue'
</script>

<style scoped></style>
