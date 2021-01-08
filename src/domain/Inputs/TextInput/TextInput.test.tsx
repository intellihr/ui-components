import { shallow } from 'enzyme'
import React from 'react'

import { Icon } from '../../Icons'
import { TextInput } from './TextInput'

const dummyFunction = () => console.log('hey')

describe('<TextInput />', () => {
  it(`should render an text input`, () => {
    const wrapper = shallow(
      <TextInput
        value='test'
        name='test'
        onChange={dummyFunction}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render an disabled text input`, () => {
    const wrapper = shallow(
      <TextInput
        isDisabled
        value='test'
        name='test'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render an invalid text input`, () => {
    const wrapper = shallow(
      <TextInput
        isInvalid
        value='test'
        name='test'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render an text input with an icon`, () => {
    const wrapper = shallow(
      <TextInput
        value='test'
        name='test'
        icon={
          <Icon
            icon='fa-check'
          />
        }
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render with an onBlur function if handleBlur is passed in`, () => {
    const mockHandleBlur = jest.fn()

    const wrapper = shallow(
      <TextInput
        name='test'
        value='test'
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
      <TextInput
        name='test'
        value='test'
        highlightOnFocus
      />
    )

    wrapper.simulate('focus', mockedEvent)

    expect(mockedEvent.target.select.mock.calls.length).toBe(1)
    expect(wrapper).toMatchSnapshot()
  })

  it(`should not highlight all text when focused and highlightOnFocus is false`, () => {
    const mockedEvent = {
      target: {
        select: jest.fn()
      }
    }

    const wrapper = shallow(
      <TextInput
        name='test'
        value='test'
        highlightOnFocus={false}
      />
    )

    wrapper.simulate('focus', mockedEvent)

    expect(mockedEvent.target.select.mock.calls.length).toBe(0)
    expect(wrapper).toMatchSnapshot()
  })

  it(`should render an text input with a disable prefix text`, () => {
    const wrapper = shallow(
      <TextInput
        name='test'
        value='test'
        disabledPrefix='test'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render an text input with a clear button`, () => {
    const wrapper = shallow(
      <TextInput
        name='test'
        value='test'
        handleClear={dummyFunction}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render an text input with custom width`, () => {
    const wrapper = shallow(
      <TextInput
        name='test'
        value='test'
        width='100'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render an password input`, () => {
    const wrapper = shallow(
      <TextInput
        type='password'
        value='test'
        name='test'
        onChange={dummyFunction}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
