import { shallow } from 'enzyme'
import React from 'react'

import { CheckboxInput } from './CheckboxInput'
import { FontAwesomeIcon } from '@Domain/Icons'

describe('<CheckboxInput />', () => {
  it(`should render a checkbox input without button`, () => {
    const wrapper = shallow(
      <CheckboxInput
        name='test-input'
        label='Hey I am a test string'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a checkbox input with button`, () => {
    const wrapper = shallow(
      <CheckboxInput
        name='test-button-input'
        label='Hey I am a test string'
        isButton
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a checkbox input with a component as the label`, () => {
    const wrapper = shallow(
      <CheckboxInput
        name='test-jsx-input'
        label={<FontAwesomeIcon type='star' />}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
