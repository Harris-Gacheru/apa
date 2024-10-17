import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'

import ChipsComponent from '../ChipsComponent.vue'

import { useCategoryStore } from '@/stores/categories'

vi.mock('@/store/categories', () => ({
  useCategoryStore: vi.fn(),
}))

describe('Chips component', () => {
  const mockStore = {
    categories: [],
    categoryItems: [],
    loading: false,
    getCategories: vi.fn(),
    getCategoryItems: vi.fn(),
  }

  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(useCategoryStore as any).mockReturnValue(mockStore)
  })

  it('renders chips component', () => {
    mount(ChipsComponent)

    expect(mockStore.getCategories).toHaveBeenCalled()
  })
})
