import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'

import HomeView from '@/views/HomeView.vue'
import ChipsComponent from '../ChipsComponent.vue'

import { createPinia } from 'pinia'
import { setActivePinia } from 'pinia'

vi.mock('@/store/categories', () => ({
  useCategoryStore: vi.fn(),
}))

describe('Home view', () => {
  beforeEach(() => {
    const pinia = createPinia()
    setActivePinia(pinia)
  })

  it('renders chips component', () => {
    const wrapper = mount(HomeView, {
      global: {
        plugins: [createPinia()],
      },
    })
    const component = wrapper.findComponent(ChipsComponent)

    expect(component.exists()).toBe(true)
  })
})
