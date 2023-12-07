<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn variant="outlined" @click="router.go(-1)"> Kembali </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="text-h5 font-weight-bold">{{ event?.name }}</div>
        <div class="d-flex mt-2">
          <v-icon class="me-1">{{ mdiCalendarBlank }}</v-icon>
          <div>{{ event?.date }}</div>
          <v-icon>{{ mdiCircleSmall }}</v-icon>
          <v-icon class="me-1">{{ mdiMapMarker }}</v-icon>
          <div>{{ event?.location }}</div>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-img :src="event?.imageUrl" cover class="rounded-lg"> </v-img>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <div class="text-h6 font-weight-bold">Deskripsi</div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia veniam voluptatem maiores
          assumenda, eum aspernatur impedit autem ratione vero libero accusamus, unde asperiores
          doloremque! Numquam similique, laudantium deleniti aperiam illo, sunt voluptates, nihil
          dignissimos odio sit ea quidem aut! Nostrum cumque neque aspernatur quisquam fugit, dicta
          repellendus? Dignissimos aperiam rerum, maiores repellat blanditiis quas. Possimus quis
          nemo impedit porro, nulla error cupiditate quas eligendi mollitia sunt temporibus ducimus
          odio in magnam deleniti facere corrupti natus illum iure? Autem nemo accusamus architecto
          maxime, sequi, nulla recusandae perferendis velit quam numquam animi. Perferendis soluta
          labore quibusdam hic nihil cum placeat laborum necessitatibus.
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <iframe
          id="iframe-widget-etix"
          width="100%"
          scrolling="no"
          :src="url"
          frameborder="0"
        ></iframe>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { mdiCalendarBlank, mdiCircleSmall, mdiMapMarker } from '@mdi/js'
import { useRoute, useRouter } from 'vue-router'
import { detailEvent } from '@/dummy/event'

const route = useRoute()
const router = useRouter()

const id = route.params.id as string

const event = detailEvent(id)
const url = `http://etix-widget-dev.s3-website.ap-southeast-3.amazonaws.com/?color=2C3C3C&lan=id&product=${id}&store=Monkey Forest`
</script>

<style scoped></style>
