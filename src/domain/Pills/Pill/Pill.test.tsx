import { shallow } from 'enzyme'
import React from 'react'

import { Pill } from './Pill'

describe('<Pill />', () => {
  it('should render a pill with default values', () => {
    const wrapper = shallow(
      <Pill
        text='Test'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a pill', () => {
    const wrapper = shallow(
      <Pill
        text='Test'
        color='alert'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
