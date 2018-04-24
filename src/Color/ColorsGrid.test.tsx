import { mount } from 'enzyme'
import React from 'react'
import { ColorsGrid } from './'
import { brandColoursArray } from './Color'
import 'jest-styled-components'

describe('<ColoursGrid />', () => {
  it(`should render a colour component`, () => {
    const wrapper = mount(
      <ColorsGrid colours={brandColoursArray} />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
