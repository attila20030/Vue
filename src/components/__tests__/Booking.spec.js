import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Booking from '../Booking.vue'

describe('Booking', () => {
  
  it('komponens betöltődik', () => {
    const wrapper = mount(Booking)
    expect(wrapper.exists()).toBe(true)
  })

  it('tartalmazza az alapértelmezett szöveget', () => {
    const wrapper = mount(Booking, {
      props: { msg: 'Foglalás' }
    })
    expect(wrapper.text()).toContain('Foglalás')
  })

  it('rendesen megjelenik egy gomb', () => {
    const wrapper = mount(Booking)
    const button = wrapper.find('button')
    expect(button.exists()).toBe(true)
  })

})


