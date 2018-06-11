import { shallow } from 'enzyme'
import React from 'react'

import { SubMenu } from './SubMenu'

describe('<SubMenu />', () => {
  it(`should render a menu with the nested class`, () => {
    const wrapper = shallow(
      <SubMenu>
        <li>Hello I am the child!</li>
      </SubMenu>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a menu with isNested true even if isNested is false`, () => {
    const wrapper = shallow(
      <SubMenu
        isNested={false}
      >
        <li>Hello I am the child!</li>
      </SubMenu>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
