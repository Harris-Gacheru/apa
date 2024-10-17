<script setup lang="ts">
import { onMounted } from 'vue'
import { useCategoryStore } from '@/stores/categories'

const store = useCategoryStore()

onMounted(() => {
  store.getCategories()
})

const handleClick = (category: string) => {
  store.getCategoryItems(category)
}
</script>

<template>
  <div
    class="tw-flex tw-justify-center tw-items-center tw-gap-2 tw-flex-wrap"
    v-if="store.categories.length > 0"
  >
    <v-chip
      v-for="(category, index) in store.categories"
      :key="index"
      @click="handleClick(category)"
      >{{ category }}</v-chip
    >
  </div>
</template>
