<script setup lang="ts">
import ChipsComponent from '@/components/ChipsComponent.vue'
import CardComponent from '@/components/CardComponent.vue'

import { useCategoryStore } from '@/stores/categories'

const store = useCategoryStore()
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <chips-component></chips-component>
      </v-col>
    </v-row>

    <v-row v-if="store.categoryItems.length > 0">
      <v-col
        cols="12"
        md="6"
        lg="4"
        v-for="(item, index) in store.categoryItems"
        :key="index"
      >
        <card-component :item="item"></card-component>
      </v-col>
    </v-row>
  </v-container>
</template>
