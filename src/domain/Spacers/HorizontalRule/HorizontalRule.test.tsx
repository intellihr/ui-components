import { shallow } from 'enzyme'
import React from 'react'

import { HorizontalRule } from './HorizontalRule'

describe('<HorizontalRule />', () => {
  it('should render a horizontal rule', () => {
    const wrapper = shallow(
      <HorizontalRule
        margins={{
          top: 20,
          left: 20,
          right: 20,
          bottom: 20
        }}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
