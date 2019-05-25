import { mount } from 'enzyme'
import React from 'react'

import { HighlightArea } from './HighlightArea'

describe('<HighLightArea />', () => {
  it(`should render a HighlightArea`, () => {
    const wrapper = mount(
      <HighlightArea
        color='grey'
      >
        Hello
      </HighlightArea>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
