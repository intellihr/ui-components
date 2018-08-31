import React from 'react'
import { mount } from 'enzyme'
import { TextSkeleton } from './TextSkeleton'

describe('<TextSkeleton />', () => {
  it('should render a text skeleton', () => {
    const wrapper = mount(
      <TextSkeleton
        skeletonOptions={{
          showSkeleton: true
        }}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a text skeleton with set width', () => {
    const wrapper = mount(
      <TextSkeleton
        skeletonOptions={{
          showSkeleton: true,
          width: 250
        }}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a text skeleton with set type', () => {
    const wrapper = mount(
      <TextSkeleton
        skeletonOptions={{
          showSkeleton: true,
          type: 'display'
        }}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
