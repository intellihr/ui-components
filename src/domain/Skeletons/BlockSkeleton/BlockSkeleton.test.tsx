import React from 'react'
import { mount } from 'enzyme'
import { BlockSkeleton } from './BlockSkeleton'

describe('<BlockSkeleton />', () => {
  it('should render a block skeleton', () => {
    const wrapper = mount(
      <BlockSkeleton
        showSkeleton
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a block skeleton with set width and height', () => {
    const wrapper = mount(
      <BlockSkeleton
        showSkeleton
        width={400}
        height={200}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
