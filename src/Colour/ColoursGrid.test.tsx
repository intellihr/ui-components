import { mount } from 'enzyme'
import React from 'react'
import { ColoursGrid } from './'
import { brandColoursArray } from './Colour'
import 'jest-styled-components'

describe('<ColoursGrid />', () => {
  it(`should render a colour component`, () => {
    const wrapper = mount(
      <ColoursGrid colours={brandColoursArray} />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
