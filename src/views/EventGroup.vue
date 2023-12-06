<template>
  <v-row>
    <template v-for="(event, n) in events" :key="n">
      <v-col cols="12" :xxl="3" :xl="3" :lg="3" :md="4" :sm="4">
        <event-card :event="event"></event-card>
      </v-col>
    </template>
  </v-row>
</template>

<script setup lang="ts">
import EventCard from '@/views/EventCard.vue'
import events from '@/dummy/event'
</script>

<style scoped></style>
