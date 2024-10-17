<script setup lang="ts">
import { defineProps, toRefs } from 'vue'
import type { CategoryItem } from '@/@models/types'

const props = defineProps<{ item: CategoryItem }>()
const { item } = toRefs(props)
</script>

<template>
  <v-card class="!tw-p-2 tw-w-fit">
    <div class="tw-flex tw-items-center tw-justify-between">
      <img :src="item.icon_url" alt="icon" class="tw-w-32 tw-h-full" />

      <div class="tw-relative tw-flex tw-flex-col tw-gap-2 tw-text-sm tw-pr-8">
        <p class="tw-text-red-400 tw-font-semibold">{{ item.categories[0] }}</p>
        <p>{{ item.created_at }}</p>

        <div class="tw-flex tw-flex-col tw-gap-1">
          <div
            class="tw-flex tw-gap-1 tw-items-center tw-bg-gray-200 tw-rounded tw-px-1 tw-w-20 tw-text-xs tw-text-gray-600"
          >
            <v-icon icon="mdi-label"></v-icon>
            <span class="tw-truncate">ID: {{ item.id }}</span>
          </div>

          <div
            class="tw-flex tw-gap-1 tw-items-center tw-bg-gray-200 tw-rounded tw-px-1 tw-w-60 tw-text-xs tw-text-gray-600"
          >
            <v-icon icon="mdi-label"></v-icon>
            <span class="tw-truncate">Updated: {{ item.updated_at }}</span>
          </div>

          <div
            class="tw-flex tw-gap-1 tw-items-center tw-bg-gray-200 tw-rounded tw-px-1 tw-w-64 tw-text-xs tw-text-gray-600"
          >
            <v-icon icon="mdi-label"></v-icon>
            <span class="tw-truncate">{{ item.value }}</span>
          </div>
        </div>

        <div class="tw-absolute tw-bottom-0 tw-right-0">
          <v-icon
            icon="mdi-check"
            class="tw-text-orange-600"
            size="large"
          ></v-icon>
        </div>
      </div>
    </div>
  </v-card>
</template>
