import { shallow } from 'enzyme'
import React from 'react'

import { VerticalForm } from './VerticalForm'
import { Input } from '../../Inputs'

describe('<VerticalForm />', () => {
  it(`should render a form`, () => {
    const wrapper = shallow(
      <VerticalForm>
        <Input
          name='testInput'
          type='text'
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
        <Input
          name='testInput'
          type='text'
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
})
