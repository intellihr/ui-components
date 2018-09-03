import React from 'react'
import { mount } from 'enzyme'
import { TextSkeleton } from './TextSkeleton'
import { Props } from '../../../common'

describe('<TextSkeleton />', () => {
  it('should render a text skeleton', () => {
    const wrapper = mount(
      <TextSkeleton
        showSkeleton={true}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a text skeleton with set width', () => {
    const wrapper = mount(
      <TextSkeleton
        showSkeleton={true}
        width={250}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a text skeleton with set type', () => {
    const wrapper = mount(
      <TextSkeleton
        showSkeleton={true}
        type={Props.TypographyType.display}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a multi line text skeleton', () => {
    const wrapper = mount(
      <TextSkeleton
        showSkeleton={true}
        numLines={5}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
