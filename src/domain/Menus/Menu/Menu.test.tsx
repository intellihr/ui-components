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
})
