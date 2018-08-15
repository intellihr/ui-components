import { shallow } from 'enzyme'
import React from 'react'

import { Input } from './Input'
import { Icon } from '@Domain/Icons'

describe('<Input />', () => {
  it(`should render an input`, () => {
    const wrapper = shallow(
      <Input
        name='test-input'
        type='text'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render an input with an icon`, () => {
    const wrapper = shallow(
      <Input
        name='test-input'
        type='text'
        icon={
          <Icon
            type='fa-check'
          />
        }
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render with an onBlur function if handleBlur is passed in`, () => {
    const mockHandleBlur = jest.fn()

    const wrapper = shallow(
      <Input
        name='test-input'
        type='text'
        handleBlur={mockHandleBlur}
      />
    )

    wrapper.simulate('blur')

    expect(mockHandleBlur.mock.calls.length).toBe(1)
    expect(wrapper).toMatchSnapshot()
  })

  it(`should highlight all text when focused and highlightOnFocus is true`, () => {
    const mockedEvent = {
      target: {
        select: jest.fn()
      }
    }

    const wrapper = shallow(
      <Input
        name='test-input'
        type='text'
        highlightOnFocus={true}
      />
    )

    wrapper.simulate('focus', mockedEvent)

    expect(mockedEvent.target.select.mock.calls.length).toBe(1)
    expect(wrapper).toMatchSnapshot()
  })

  it(`should not highlight all text when focused and highlightOnFocus is false\``, () => {
    const mockedEvent = {
      target: {
        select: jest.fn()
      }
    }

    const wrapper = shallow(
      <Input
        name='test-input'
        type='text'
        highlightOnFocus={false}
      />
    )

    wrapper.simulate('focus', mockedEvent)

    expect(mockedEvent.target.select.mock.calls.length).toBe(0)
    expect(wrapper).toMatchSnapshot()
  })
})
