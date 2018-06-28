import { shallow } from 'enzyme'
import React from 'react'

import { Pill } from './Pill'

describe('<Pill />', () => {
  it('should render an attribute label with default values', () => {
    const wrapper = shallow(
      <Pill
        text='Test'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render an attribute label', () => {
    const wrapper = shallow(
      <Pill
        text='Test'
        color='alert'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a large hollow attribute label', () => {
    const wrapper = shallow(
      <Pill
        text='Test'
        color='alert'
        isHollow
        size='large'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
