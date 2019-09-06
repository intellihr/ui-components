import { mount } from 'enzyme'
import React from 'react'

import { Props } from '../../../common'
import { TextSkeleton } from './TextSkeleton'

describe('<TextSkeleton />', () => {
  it('should render a text skeleton', () => {
    const wrapper = mount(
      <TextSkeleton/>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a text skeleton with set width', () => {
    const wrapper = mount(
      <TextSkeleton
        width={250}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a text skeleton with set type', () => {
    const wrapper = mount(
      <TextSkeleton
        type={Props.TypographyType.Display}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
