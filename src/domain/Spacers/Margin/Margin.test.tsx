import { shallow } from 'enzyme'
import React from 'react'

import { Variables } from '../../../common'
import { Margin } from './Margin'

describe('<Margin />', () => {
  describe('Standard Margin', () => {
    const wrapper = shallow(
      <Margin
        margins={{
          top: {
            min: Variables.Spacing.sLarge,
            tablet: 'none',
            desktop: Variables.Spacing.sSmall
          },
          bottom: Variables.Spacing.sLarge,
          left: Variables.Spacing.sSmall,
          right: Variables.Spacing.sLarge
        }}
      >
        <div>Margin</div>
      </Margin>
    )

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})
