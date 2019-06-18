import { mount } from 'enzyme'
import React from 'react'

import { Badge } from './Badge'
import { Variables } from '../../../common'

describe('<Badge />', () => {
  it('should render a small badge', () => {
    const wrapper = mount(
      <Badge
        label={6}
        backgroundColor={Variables.Color.b100}
        color={Variables.Color.b600}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a large badge', () => {
    const wrapper = mount(
      <Badge
        label={6}
        backgroundColor={Variables.Color.b100}
        color={Variables.Color.b600}
        size='large'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a spinning badge', () => {
    const wrapper = mount(
      <Badge
        label={6}
        backgroundColor={Variables.Color.b100}
        color={Variables.Color.b600}
        pending
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
