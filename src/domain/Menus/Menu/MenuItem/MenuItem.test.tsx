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
        url='www.google.com'
        label='Test menu item'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a menu item with active state', () => {
    const wrapper = shallow(
      <MenuItem
        url='www.google.com'
        label='Test menu item'
        className='active'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a menu item with Icon', () => {
    const wrapper = shallow(
      <MenuItem
        url='www.google.com'
        label='Test menu item'
        icon={<IntelliIcon type={'clock'} />}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a menu item with loading state', () => {
    const wrapper = shallow(
      <MenuItem
        url='www.google.com'
        label='Test menu item'
        icon={<IntelliIcon type={'clock'} />}
        isLoading
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a menu item as a submenu if it has children', () => {
    const wrapper = shallow(
      <MenuItem
        url='www.google.com'
        label='Father'
        icon={<IntelliIcon type={'clock'} />}
      >
        <MenuItem
          url='www.google.com'
          label='Son'
          icon={<IntelliIcon type={'clock'} />}
        />
        <MenuItem
          url='www.google.com'
          label='Devil'
          icon={<IntelliIcon type={'clock'} />}
        />
      </MenuItem>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a menu item which overflowWhenOpen prop is passed to the Collapsible component', () => {
    const wrapper = shallow(
      <MenuItem
        label='Test menu item'
        overflowWhenOpen='visible'
      >
        Something
      </MenuItem>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
