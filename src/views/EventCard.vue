<template>
  <v-card :to="{ name: 'detail', params: { id: props.event.id } }">
    <v-img :src="props.event.imageUrl" cover> </v-img>

    <v-card-item>
      <v-card-title> {{ props.event.name }} </v-card-title>
    </v-card-item>

    <v-card-text>
      <div class="d-flex align-end mb-3">
        <v-icon class="me-1">{{ mdiCalendarBlank }}</v-icon>
        {{ props.event.date }}
      </div>

      <div class="d-flex align-end">
        <v-icon class="me-1">{{ mdiMapMarker }}</v-icon>
        {{ props.event.location }}
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-text>
      <div>
        <div class="text-caption">Mulai dari</div>
      </div>

      <div class="text-h6 font-weight-medium">Rp {{ props.event.price }}</div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { mdiCalendarBlank, mdiMapMarker } from '@mdi/js'
import type { Event } from '@/dummy/event'

const props = defineProps<{
  event: Event
}>()
</script>

<style scoped></style>
