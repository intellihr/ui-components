import { shallow } from 'enzyme'
import React from 'react'

import { Variables } from '../../../common'
import { HorizontalRule } from './HorizontalRule'

describe('<HorizontalRule />', () => {
  it('should render a horizontal rule', () => {
    const wrapper = shallow(
      <HorizontalRule
        topBottomSpacing={Variables.Layout.lSmall}
        leftRightSpacing={{left: Variables.Spacing.sLarge, right: 'none'}}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
