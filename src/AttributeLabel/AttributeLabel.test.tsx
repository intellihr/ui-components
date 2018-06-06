import { shallow } from 'enzyme'
import React from 'react'

import { AttributeLabel } from './AttributeLabel'

describe('<AttributeLabel />', () => {
  it('should render an attribute label with default values', () => {
    const wrapper = shallow(
      <AttributeLabel
        text='Test'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render an attribute label', () => {
    const wrapper = shallow(
      <AttributeLabel
        text='Test'
        color='alert'
        textColor='white'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a large hollow attribute label', () => {
    const wrapper = shallow(
      <AttributeLabel
        text='Test'
        color='alert'
        textColor='white'
        isHollow
        size='large'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
