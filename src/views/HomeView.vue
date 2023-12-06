<template>
  <v-container>
    <v-row>
      <v-col>
        <banner-carousel></banner-carousel>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card variant="flat">
          <v-card-item>
            <v-card-title class="font-weight-bold"> Event Lari Terdekat </v-card-title>
          </v-card-item>

          <v-card-text>
            <event-group></event-group>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import BannerCarousel from './BannerCarousel.vue'
import EventGroup from './EventGroup.vue'
</script>

<style scoped></style>
