import { mount } from 'enzyme'
import React from 'react'

import { FieldLabel } from './FieldLabel'

describe('<FieldLabel />', () => {
  it(`should render a label`, () => {
    const wrapper = mount(
      <FieldLabel>
        Hello boys.
      </FieldLabel>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a label with a 'for' attribute`, () => {
    const wrapper = mount(
      <FieldLabel
      htmlFor='input-id'
      >
        Hello ladies.
      </FieldLabel>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a red label if isInvalid is true`, () => {
    const wrapper = mount(
      <FieldLabel
        isInvalid
      >
        Hello ladies.
      </FieldLabel>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
