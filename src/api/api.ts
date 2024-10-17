import type { Categories, GetCategoryItemsRes } from '@/@models/types'
import { api } from './axios'

export const apiGetCategories = () =>
  api.get<Categories>('/categories').then(response => response.data)

export const apiGetCategoryItems = (category: string) =>
  api
    .get<GetCategoryItemsRes>('/search', { params: { query: category } })
    .then(response => response.data)
