import { shallow } from 'enzyme'
import React from 'react'

import { DotStatusLabel } from './DotStatusLabel'

describe('<DotStatusLabel />', () => {
  it('should render a dot status label with default values', () => {
    const wrapper = shallow(
      <DotStatusLabel
        statusText='Test'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a dot status label', () => {
    const wrapper = shallow(
      <DotStatusLabel
        statusText='Test'
        color='rgb(192, 48, 0)'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a hollow dot status label', () => {
    const wrapper = shallow(
      <DotStatusLabel
        statusText='Test'
        isHollow
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
