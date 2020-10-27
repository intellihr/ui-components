import { shallow } from 'enzyme'
import React from 'react'

import { Attribute } from './Attribute'

describe('<Attribute />', () => {
  it(`should render a Attribute component`, () => {
    const wrapper = shallow(
      <Attribute
        iconType='solid'
        variant={Attribute.Variant.True}
        icon='check-circle'
        primaryLabel='Everything is updated'
        secondaryLabel='Notify 10 days before expiry'
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a isCollapsed Attribute component`, () => {
    const wrapper = shallow(
      <Attribute
        isCollapsed
        iconType='solid'
        variant={Attribute.Variant.Optional}
        icon='check-circle'
        primaryLabel='Everything is ok'
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a false Attribute component as null`, () => {
    const wrapper = shallow(
      <Attribute
        iconType='solid'
        variant={Attribute.Variant.False}
        icon='check-circle'
        primaryLabel='Everything is ok'
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
