import React from 'react'
import { shallow } from 'enzyme'
import { TooltipText } from './TooltipText'

describe('<TooltipText />', () => {
  it('should render the tooltip text with an icon and tooltip', () => {
    const wrapper = shallow(
      <TooltipText
        id='test-tooltip'
        tooltipMessage='This is my tooltip'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render the tooltip text with a specified text label and tooltip', () => {
    const wrapper = shallow(
      <TooltipText
        id='test-tooltip'
        tooltipMessage='This is my tooltip'
      >
        My label
      </TooltipText>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
