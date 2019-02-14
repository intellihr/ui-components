import { shallow } from 'enzyme'
import React from 'react'

import { Tooltip } from './Tooltip'

describe('<Tooltip />', () => {
  it('should render a tooltip with the child element', () => {
    const wrapper = shallow(
      <Tooltip
        message='Tooltip message'
        id='test-tooltip'
      >
        <div>This div should have a tooltip</div>
      </Tooltip>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a tooltip with a custom class name', () => {
    const wrapper = shallow(
      <Tooltip
        message='Tooltip message'
        id='test-tooltip'
        className='test-classname'
      >
        <div>This div should have a tooltip</div>
      </Tooltip>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a tooltip with a set width', () => {
    const wrapper = shallow(
      <Tooltip
        message='Tooltip message'
        id='test-tooltip'
        width={250}
      >
        <div>This div should have a tooltip</div>
      </Tooltip>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
