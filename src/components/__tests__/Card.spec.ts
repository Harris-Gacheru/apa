import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CardComponent from '../CardComponent.vue'

describe('card component', () => {
  it('renders properly', () => {
    const wrapper = mount(CardComponent, {
      props: {
        item: {
          categories: ['food'],
          created_at: '',
          icon_url: '',
          id: '',
          updated_at: '',
          url: '',
          value: '',
        },
      },
    })

    expect(wrapper.exists()).toBe(true)
    const category = wrapper.find('p.tw-font-semibold')
    expect(category.text()).toBe('food')
  })
})
