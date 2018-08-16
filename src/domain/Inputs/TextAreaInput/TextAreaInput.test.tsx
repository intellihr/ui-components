import { shallow } from 'enzyme'
import React from 'react'
import { TextAreaInput } from './TextAreaInput'

describe('<TextAreaInput />', () => {
  it('should render a text area', () => {
    const wrapper = shallow(
      <TextAreaInput
        name='test-textarea'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a disabled text area', () => {
    const wrapper = shallow(
      <TextAreaInput
        isDisabled
        name='test-textarea'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render an invalid text area', () => {
    const wrapper = shallow(
      <TextAreaInput
        isInvalid
        name='test-textarea'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a text area with placeholder text', () => {
    const wrapper = shallow(
      <TextAreaInput
        name='test-textarea'
        placeholder='test placeholder :)'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a text area with a different amount of rows', () => {
    const wrapper = shallow(
      <TextAreaInput
        name='test-textarea'
        rows={20}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
