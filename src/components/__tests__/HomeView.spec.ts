import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'

import HomeView from '@/views/HomeView.vue'
import ChipsComponent from '../ChipsComponent.vue'

import { useCategoryStore } from '@/stores/categories'

vi.mock('@/store/categories', () => ({
  useCategoryStore: vi.fn(),
}))

describe('Home view', () => {
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
    const wrapper = mount(HomeView)
    const component = wrapper.findComponent(ChipsComponent)

    expect(component.exists()).toBe(true)
  })
})
