import type { Categories, CategoryItem } from '@/@models/types'
import { apiGetCategories, apiGetCategoryItems } from '@/api/api'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCategoryStore = defineStore('category', () => {
  const categories = ref<Categories>([])
  const categoryItems = ref<CategoryItem[]>([])
  const loading = ref<boolean>(false)

  const getCategories = async () => {
    loading.value = true

    try {
      categories.value = await apiGetCategories()
    } catch (error) {
      categories.value = []
      console.log(error)
    } finally {
      loading.value = false
    }
  }

  const getCategoryItems = async (category: string) => {
    loading.value = true

    try {
      categoryItems.value = (await apiGetCategoryItems(category)).result
    } catch (error) {
      categoryItems.value = []
      console.log(error)
    } finally {
      loading.value = false
    }
  }

  return {
    categories,
    categoryItems,
    loading,
    getCategories,
    getCategoryItems,
  }
})
