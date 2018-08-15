import { shallow } from 'enzyme'
import React from 'react'

import { StatusIndicator } from './StatusIndicator'

describe('<StatusIndicator />', () => {
  it('should render a dot status label with default values', () => {
    const wrapper = shallow(
      <StatusIndicator
        text='Test'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a dot status label', () => {
    const wrapper = shallow(
      <StatusIndicator
        text='Test'
        color='rgb(192, 48, 0)'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a hollow dot status label', () => {
    const wrapper = shallow(
      <StatusIndicator
        text='Test'
        isHollow={true}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
