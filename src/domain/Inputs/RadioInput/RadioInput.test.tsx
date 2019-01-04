import { shallow } from 'enzyme'
import React from 'react'

import { RadioInput } from './RadioInput'
import { FontAwesomeIcon } from '@Domain/Icons'

describe('<RadioInput />', () => {
  it(`should render a radio input without button`, () => {
    const wrapper = shallow(
      <RadioInput
        name='test-input'
        label='Hey I am a test string'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a radio input with button`, () => {
    const wrapper = shallow(
      <RadioInput
        name='test-button-input'
        label='Hey I am a test string'
        isButton
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a radio input with a component as the label`, () => {
    const wrapper = shallow(
      <RadioInput
        name='test-jsx-input'
        label={<FontAwesomeIcon type='star' />}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
