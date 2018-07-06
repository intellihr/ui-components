import { mount } from 'enzyme'
import React from 'react'

import { Icon } from './Icon'
import {Badge} from '../Badge'

describe('<Icon />', () => {
  it('should render icon with no size or colour', () => {
    const wrapper = mount(
      <Icon
        type='fa-check'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render icon with size', () => {
    const wrapper = mount(
      <Icon
        type='fa-check'
        size={3}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render icon with stack and size', () => {
    const wrapper = mount(
      <Icon
        type='fa-check'
        size={2}
        isStacked
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render icon with no stack or size if only isStacked is given', () => {
    const wrapper = mount(
      <Icon
        type='fa-check'
        isStacked
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a large icon', () => {
    const wrapper = mount(
      <Icon
        type='circle'
        isLarge
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render icon with colour', () => {
    const wrapper = mount(
      <Icon
        type='fa-check'
        color='#1A2B3C'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a non-FontAwesome icon', () => {
    const wrapper = mount(
      <Icon
        type='intelli-icon-avatar'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render an icon with a badge', () => {
    const wrapper = mount(
      <Icon
        type='fa-check'
        size={3}
        badge={
          <Badge
            label={6}
            backgroundColor='#1A2B3C'
            color='#1A293C'
          />
        }
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
