import { shallow } from 'enzyme'
import React from 'react'

import { Form } from './Form'
import { Input } from '@Domain/Inputs'

describe('<Form />', () => {
  it(`should render a form`, () => {
    const wrapper = shallow(
      <Form>
        <Input
          name='testInput'
          type='text'
        />
      </Form>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render with an onChange and onSubmit attributes if handleChange are handleSubmit are passed in`, () => {
    const mockHandleChange = jest.fn()
    const mockHandleSubmit = jest.fn()

    const wrapper = shallow(
      <Form
        handleChange={mockHandleChange}
        handleSubmit={mockHandleSubmit}
      >
        <Input
          name='testInput'
          type='text'
        />
      </Form>
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
