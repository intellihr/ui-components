import { shallow } from 'enzyme'
import React from 'react'

import { Field } from './Field'

describe('<Field />', () => {
  it(`should render a vertical form field with nothing`, () => {
    const wrapper = shallow(
      <Field />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a vertical form field with regular props`, () => {
    const wrapper = shallow(
      <Field
        inputName='testInput'
        label='This is a test input'
        isRequired
      >
        Children
      </Field>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a vertical form field with error messages`, () => {
    const wrapper = shallow(
      <Field
        label='This is a test input'
        errorMessages={[
          'Error 1',
          'Error 2'
        ]}
      >
        Children
      </Field>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a vertical form field with a single error message`, () => {
    const wrapper = shallow(
      <Field
        label='This is a test input'
        errorMessages='Just one error'
      >
        Children
      </Field>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a vertical form field with a description`, () => {
    const wrapper = shallow(
      <Field
        label='This is a test input'
        description='This is a test description'
      >
        Children
      </Field>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a vertical form field with a hint`, () => {
    const wrapper = shallow(
      <Field
        label='This is a test input'
        hintOptions={{
          hint: <div> This is a test hint in hint popover style </div>,
          label: 'This is a test hint label',
          hintWrapperProps: { width: 200 }
        }}
      >
        Children
      </Field>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a vertical form field with a action message`, () => {
    const wrapper = shallow(
      <Field
        label='This is a test input'
        actionMessage={<div>This is a test action message</div>}
      >
        Children
      </Field>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a vertical form field with a action message`, () => {
    const wrapper = shallow(
      <Field
        label='This is a test input'
        tooltipMessage='I am a test tooltip'
        tooltipProps={{width: 100}}
      >
        Children
      </Field>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a vertical form field without bottom margin`, () => {
    const wrapper = shallow(
      <Field
        inputName='testInput'
        label='This is a test input'
        showBottomMargin={false}
      >
        Children
      </Field>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a vertical form field without label`, () => {
    const wrapper = shallow(
      <Field
        inputName='testInput'
      >
        Children
      </Field>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
