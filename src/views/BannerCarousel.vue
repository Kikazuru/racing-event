<template>
  <v-carousel class="rounded-lg" cycle hide-delimiter-background>
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" cover></v-carousel-item>
  </v-carousel>
</template>

<script setup lang="ts">
const items = [
  {
    src: 'https://dyuarqvpljnfesefojys.supabase.co/storage/v1/object/public/baim/UGMTR%202023%20-%20BANNER%20PENDAFTARAN%20(1).jpg'
  },
  {
    src: 'https://dyuarqvpljnfesefojys.supabase.co/storage/v1/object/public/baim/STR%202023.jpg'
  },
  {
    src: 'https://dyuarqvpljnfesefojys.supabase.co/storage/v1/object/public/baim/Banner%201.jpg'
  }
]
</script>

<style scoped></style>
