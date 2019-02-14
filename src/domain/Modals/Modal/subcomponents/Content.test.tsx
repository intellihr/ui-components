import { mount } from 'enzyme'
import React from 'react'

import { Content } from './Content'

describe('<Content />', () => {
  it('should render modal content', () => {
    const wrapper = mount(
      <Content>
        Content Text
      </Content>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
