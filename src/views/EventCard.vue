<template>
  <v-card :to="{ name: 'detail', params: { id: props.id } }">
    <v-img
      src="https://dyuarqvpljnfesefojys.supabase.co/storage/v1/object/public/baim/UGMTR%202023%20-%20BANNER%20PENDAFTARAN%20(1).jpg"
      cover
    >
    </v-img>

    <v-card-item>
      <v-card-title> Title </v-card-title>
    </v-card-item>

    <v-card-text>
      <div class="d-flex align-end mb-3">
        <v-icon class="me-1">{{ mdiCalendarBlank }}</v-icon>
        02 January 2024
      </div>

      <div class="d-flex align-end">
        <v-icon class="me-1">{{ mdiMapMarker }}</v-icon>
        Yogyakarta
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-text>
      <div>
        <div class="text-caption">Mulai dari</div>
      </div>

      <div class="text-h6 font-weight-medium">Rp250.000</div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { mdiCalendarBlank, mdiMapMarker } from '@mdi/js'

const props = defineProps<{
  id: string
}>()
</script>

<style scoped></style>
