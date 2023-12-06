<template>
  <v-row>
    <template v-for="n in 15" :key="n">
      <v-col cols="12" :xxl="3" :xl="3" :lg="3" :md="4" :sm="4">
        <event-card></event-card>
      </v-col>
    </template>
    <v-responsive width="100%"></v-responsive>
  </v-row>
</template>

<script setup lang="ts">
import EventCard from '@/views/EventCard.vue'
</script>

<style scoped></style>
