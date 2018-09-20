import { mount } from 'enzyme'
import React from 'react'

import { InputLabel } from './InputLabel'

describe('<InputLabel />', () => {
  it(`should render a label`, () => {
    const wrapper = mount(
      <InputLabel>
        Test input label
      </InputLabel>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a label with a 'for' attribute`, () => {
    const wrapper = mount(
      <InputLabel
        htmlFor='input-id'
      >
        Test input label
      </InputLabel>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a label with a required marker`, () => {
    const wrapper = mount(
      <InputLabel
        isRequired
      >
        Test input label
      </InputLabel>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
