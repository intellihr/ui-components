import { mount } from 'enzyme'
import React from 'react'

import { Variables } from '../../../common'
import { Badge } from '../../Badges'
import { Icon } from './Icon'

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
        size='medium'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a large icon', () => {
    const wrapper = mount(
      <Icon
        type='fa-circle'
        size='large'
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

  it('should render icon with a custom size', () => {
    const wrapper = mount(
      <Icon
        type='fa-check'
        customSize={2.6}
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
        size='xlarge'
        badge={
          <Badge
            label={6}
            backgroundColor={Variables.Color.b200}
            color={Variables.Color.b200}
          />
        }
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
