import React from 'react'
import { mount } from 'enzyme'
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
