import { shallow } from 'enzyme'
import React from 'react'

import { Comparison } from './Comparison'

describe('<Comparison />', () => {
  describe('Standard Comparison', () => {
    const wrapper = shallow(
      <Comparison
        beforeComponent='test before'
        afterComponent='test after'
      />
    )

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})
