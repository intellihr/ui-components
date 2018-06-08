import { shallow } from 'enzyme'
import React from 'react'

import { Menu } from './Menu'

describe('<Menu />', () => {
  it(`should render a simple menu`, () => {
    const wrapper = shallow(
      <Menu>
        <li>Hello I am the child!</li>
      </Menu>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render an accordion menu`, () => {
    const wrapper = shallow(
      <Menu
        id='test-menu'
        isAccordion
      >
        <li>Hello I am the child!</li>
      </Menu>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
