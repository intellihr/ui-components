import React from 'react'
import { mount } from 'enzyme'
import { CircleSkeleton } from './CircleSkeleton'

describe('<CircleSkeleton />', () => {
  it('should render a circle skeleton', () => {
    const wrapper = mount(
      <CircleSkeleton
        skeletonOptions={{
          showSkeleton: true
        }}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a circle skeleton with set size', () => {
    const wrapper = mount(
      <CircleSkeleton
        skeletonOptions={{
          showSkeleton: true,
          size: 'small'
        }}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
