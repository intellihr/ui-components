import { mount } from 'enzyme'
import React from 'react'

import { Colour } from './'

describe('<Colour />', () => {
  it(`should render a colour component`, () => {
    const wrapper = mount(
      <Colour hex='#432DF3' description='intelli-royal-blue' />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
