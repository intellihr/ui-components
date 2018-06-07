import React from 'react'
import { shallow } from 'enzyme'
import { Tooltip } from './Tooltip'

describe('<Tooltip />', () => {
  it('should render a tooltip with the child element', () => {
    const wrapper = shallow(
      <Tooltip />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
