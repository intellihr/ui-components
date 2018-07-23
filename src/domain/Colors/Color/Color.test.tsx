import { mount } from 'enzyme'
import React from 'react'
import { brandColors } from '../services/style'
import { Color } from './'

describe('<Color />', () => {
  it(`should render a color component`, () => {
    const wrapper = mount(
      <Color hex={brandColors.intelliRoyalBlue} description='intelli-royal-blue' />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
