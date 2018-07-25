import { shallow } from 'enzyme'
import React from 'react'

import { Navigation } from './Navigation'
import { Menu } from '../Menu'
import { MenuItem } from '../Menu/MenuItem'
import { IntelliIcon } from '@Domain/Icons'

describe('<Navigation />', () => {
  it(`should render a simple navigation Menu`, () => {
    const wrapper = shallow(
      <Navigation>
        <Menu>
          <MenuItem
            url='/#'
            label='Dashboard'
            icon={<IntelliIcon type={'clock'} />}
          />
        </Menu>
      </Navigation>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
