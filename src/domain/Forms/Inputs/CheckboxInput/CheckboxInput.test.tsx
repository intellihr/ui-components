import { shallow } from 'enzyme'
import React from 'react'

import { CheckboxInput } from './CheckboxInput'
import { FontAwesomeIcon } from '../../Icon'

describe('<CheckboxInput />', () => {
  it(`should render a checkbox input`, () => {
    const wrapper = shallow(
      <CheckboxInput
        name='test-input'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a checkbox input with a string label`, () => {
    const wrapper = shallow(
      <CheckboxInput
        name='test-input'
        label='Hey I am a test string'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a checkbox input with a component as the label`, () => {
    const wrapper = shallow(
      <CheckboxInput
        name='test-input'
        label={<FontAwesomeIcon type='star' />}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
