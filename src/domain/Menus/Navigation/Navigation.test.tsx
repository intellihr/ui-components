import { shallow } from 'enzyme'
import React from 'react'

import { Navigation } from './Navigation'
import { MenuItem } from '../Menu'
import { IntelliIcon } from '@Domain/Icons'

describe('<Navigation />', () => {
  it(`should render a simple navigation Menu`, () => {
    const wrapper = shallow(
      <Navigation>
        <MenuItem
          url='/#'
          label='Dashboard'
          icon={<IntelliIcon type={'clock'} />}
        />
      </Navigation>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
