import { shallow } from 'enzyme'
import React from 'react'

import { Variables } from '../../../common'
import { ShowForSizes } from './ShowForSizes'

describe('<ShowForSizes />', () => {
  describe('Standard ShowForSizes', () => {
    const wrapper = shallow(
      <ShowForSizes
        lower={Variables.Breakpoint.breakpointTablet}
        upper={Variables.Breakpoint.breakpointDesktop}
      >
        <div>Display size is tablet</div>
      </ShowForSizes>
    )

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})
