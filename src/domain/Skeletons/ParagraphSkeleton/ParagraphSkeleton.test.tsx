import { mount } from 'enzyme'
import React from 'react'

import { ParagraphSkeleton } from './ParagraphSkeleton'

describe('<ParagraphSkeleton />', () => {
  it('should render a paragraph skeleton', () => {
    const wrapper = mount(
      <ParagraphSkeleton/>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
