import { shallow } from 'enzyme'
import React from 'react'

import { IntelliIcon } from '../../../Icons'
import { MenuItem } from './MenuItem'

describe('<MenuItem />', () => {
  it('should render a simple menu item', () => {
    const wrapper = shallow(
      <MenuItem
        label='Test menu item'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a a menu item with a link', () => {
    const wrapper = shallow(
      <MenuItem
        href='www.google.com'
        label='Test menu item'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a menu item with active state', () => {
    const wrapper = shallow(
      <MenuItem
        href='www.google.com'
        label='Test menu item'
        isActive
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a menu item with Icon', () => {
    const wrapper = shallow(
      <MenuItem
        href='www.google.com'
        label='Test menu item'
        icon={<IntelliIcon icon='clock' />}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a menu item with loading state', () => {
    const wrapper = shallow(
      <MenuItem
        href='www.google.com'
        label='Test menu item'
        icon={<IntelliIcon icon='clock' />}
        isLoading
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a menu item as a submenu if it has children', () => {
    const wrapper = shallow(
      <MenuItem
        href='www.google.com'
        label='Father'
        icon={<IntelliIcon icon='clock' />}
      >
        <MenuItem
          href='www.google.com'
          label='Son'
          icon={<IntelliIcon icon='clock' />}
        />
        <MenuItem
          href='www.google.com'
          label='Devil'
          icon={<IntelliIcon icon='clock' />}
        />
      </MenuItem>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
