import { mount } from 'enzyme'
import React from 'react'
import { brandColours } from './Colour'
import { Colour } from './'
import 'jest-styled-components'

describe('<Colour />', () => {
  it(`should render a colour component`, () => {
    const wrapper = mount(
      <Colour hex={brandColours.intelliRoyalBlue} description='intelli-royal-blue' />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
