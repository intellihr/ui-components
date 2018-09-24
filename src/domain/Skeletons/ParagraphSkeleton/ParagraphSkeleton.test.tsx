import React from 'react'
import { mount } from 'enzyme'
import { ParagraphSkeleton } from './ParagraphSkeleton'

describe('<ParagraphSkeleton />', () => {
  it('should render a paragraph skeleton', () => {
    const wrapper = mount(
      <ParagraphSkeleton
        showSkeleton
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
