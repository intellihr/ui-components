import { shallow } from 'enzyme'
import React from 'react'

import { Status } from './Status'

describe('<Status />', () => {
  it('should render a status', () => {
    const wrapper = shallow(
      <Status variant={Status.Variant.Critical} label='Status'/>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a status with size', () => {
    const wrapper = shallow(
      <Status variant={Status.Variant.Neutral} size={Status.Size.Small} label='Status'/>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
