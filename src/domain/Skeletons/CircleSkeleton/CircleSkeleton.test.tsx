import { mount } from 'enzyme'
import React from 'react'

import { Props } from '../../../common'
import { CircleSkeleton } from './CircleSkeleton'

describe('<CircleSkeleton />', () => {
  it('should render a circle skeleton', () => {
    const wrapper = mount(
      <CircleSkeleton/>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a circle skeleton with set size', () => {
    const wrapper = mount(
      <CircleSkeleton
        size={Props.AvatarSize.Small}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
