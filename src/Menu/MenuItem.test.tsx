import { shallow } from 'enzyme'
import React from 'react'

import { MenuItem } from './MenuItem'

describe('<MenuItem />', () => {
  it(`should render a simple menu item`, () => {
    const wrapper = shallow(
      <MenuItem
        label='Test menu item'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a a menu item with a link`, () => {
    const wrapper = shallow(
      <MenuItem
        url='www.google.com'
        label='Test menu item'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
