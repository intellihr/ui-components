import { shallow } from 'enzyme'
import React from 'react'

import { SubMenu } from './SubMenu'

describe('<SubMenu />', () => {
  it(`should render a menu with the nested class`, () => {
    const wrapper = shallow(
      <SubMenu
        triggerComponent={<li>Click me!</li>}
      >
        <li>Hello I am the child!</li>
      </SubMenu>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a menu that is open on render`, () => {
    const wrapper = shallow(
      <SubMenu
        triggerComponent={<li>Click me!</li>}
        isOpen
      >
        <li>Hello I am the child!</li>
      </SubMenu>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
