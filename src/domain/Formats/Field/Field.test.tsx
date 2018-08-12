import { mount } from 'enzyme'
import React from 'react'
import { Field } from './Field'

describe('<Field />', () => {
  it(`should render a Field component, creating a Text child with the provided text`, () => {
    const wrapper = mount(
      <Field
        label='Position Title'
      >
        Chief Executive Officer
      </Field>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a Field component, creating a Text child with the provided number`, () => {
    const wrapper = mount(
      <Field
        label='FTE'
      >
        1.000
      </Field>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a Field component, with the provided component child`, () => {
    const wrapper = mount(
      <Field
        label='Position Title'
      >
        <p>Chief Executive Officer</p>
      </Field>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
