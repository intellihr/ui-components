import { mount } from 'enzyme'
import React from 'react'

import { Header } from './Header'

describe('<Header />', () => {
  it('should render modal header', () => {
    const wrapper = mount(
      <Header>
        Header Text
      </Header>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
