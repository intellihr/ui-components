import { mount } from 'enzyme'
import React from 'react'
import { ColorsGrid } from './'
import { brandColorsArray } from './Color'
import 'jest-styled-components'

describe('<ColorsGrid />', () => {
  it(`should render a color component`, () => {
    const wrapper = mount(
      <ColorsGrid colors={brandColorsArray} />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
