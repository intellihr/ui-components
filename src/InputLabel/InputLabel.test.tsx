import { mount } from 'enzyme'
import React from 'react'

import { InputLabel } from './InputLabel'

describe('<InputLabel />', () => {
  it(`should render a label`, () => {
    const wrapper = mount(
      <InputLabel>
        Hello boys.
      </InputLabel>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a label with a 'for' attribute`, () => {
    const wrapper = mount(
      <InputLabel
        htmlFor='input-id'
      >
        Hello ladies.
      </InputLabel>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a red label if isInvalid is true`, () => {
    const wrapper = mount(
      <InputLabel
        isInvalid
      >
        Hello ladies.
      </InputLabel>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
