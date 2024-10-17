export type Categories = string[]

export type CategoryItem = {
  categories: Categories
  created_at: string
  icon_url: string
  id: string
  updated_at: string
  url: string
  value: string
}

export type GetCategoryItemsRes = {
  total: number
  result: CategoryItem[]
}
