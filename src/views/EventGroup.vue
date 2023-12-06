<template>
  <v-slide-group show-arrows>
    <v-slide-group-item v-for="n in 15" :key="n" v-slot="{ isSelected, toggle, selectedClass }">
      <v-card
        color="grey-lighten-1"
        :class="['ma-4', selectedClass]"
        height="200"
        width="100"
        @click="toggle"
      >
        <div class="d-flex fill-height align-center justify-center">
          <v-scale-transition>
            <v-icon
              v-if="isSelected"
              color="white"
              size="48"
              icon="mdi-close-circle-outline"
            ></v-icon>
          </v-scale-transition>
        </div>
      </v-card>
    </v-slide-group-item>
  </v-slide-group>
</template>

<script setup lang="ts"></script>

<style scoped></style>
