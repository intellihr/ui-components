import React from 'react'
import { mount } from 'enzyme'
import { CircleSkeleton } from './CircleSkeleton'
import { Props } from '../../../common'

describe('<CircleSkeleton />', () => {
  it('should render a circle skeleton', () => {
    const wrapper = mount(
      <CircleSkeleton
        showSkeleton
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a circle skeleton with set size', () => {
    const wrapper = mount(
      <CircleSkeleton
        showSkeleton
        size={Props.AvatarSize.Small}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
