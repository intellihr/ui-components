import { shallow } from 'enzyme'
import React from 'react'

import { TextInput } from '../../Inputs'
import { VerticalForm } from './VerticalForm'

describe('<VerticalForm />', () => {
  it(`should render a form`, () => {
    const wrapper = shallow(
      <VerticalForm>
        <TextInput
          name='testInput'
        />
      </VerticalForm>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render with an onChange and onSubmit attributes if handleChange are handleSubmit are passed in`, () => {
    const mockHandleChange = jest.fn()
    const mockHandleSubmit = jest.fn()

    const wrapper = shallow(
      <VerticalForm
        onChange={mockHandleChange}
        onSubmit={mockHandleSubmit}
      >
        <TextInput
          name='testInput'
        />
      </VerticalForm>
    )

    expect(mockHandleChange.mock.calls.length).toBe(0)
    expect(mockHandleSubmit.mock.calls.length).toBe(0)

    wrapper.simulate('change')

    expect(mockHandleChange.mock.calls.length).toBe(1)
    expect(mockHandleSubmit.mock.calls.length).toBe(0)

    wrapper.simulate('submit')

    expect(mockHandleChange.mock.calls.length).toBe(1)
    expect(mockHandleSubmit.mock.calls.length).toBe(1)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render with autoComplete when it is passed in', () => {
    const wrapper = shallow(
      <VerticalForm autoComplete='off'>
        <TextInput name='testInput' />
      </VerticalForm>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
