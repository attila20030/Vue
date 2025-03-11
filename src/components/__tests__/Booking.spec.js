import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Booking from '../Booking.vue'

describe('Booking', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Üdvözlöm!' } })
    expect(wrapper.text()).toContain('Üdvözlöm!')
  })
})
