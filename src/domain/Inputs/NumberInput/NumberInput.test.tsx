import { shallow } from 'enzyme'
import React from 'react'

import { Icon } from '../../Icons'
import { NumberInput } from './NumberInput'

const dummyFunction = () => console.log('hey')

describe('<NumberInput />', () => {
  it(`should render an number input`, () => {
    const wrapper = shallow(
      <NumberInput
        value={100}
        name='test'
        onChange={dummyFunction}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render an disabled number input`, () => {
    const wrapper = shallow(
      <NumberInput
        isDisabled
        value={100}
        name='test'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render an invalid number input`, () => {
    const wrapper = shallow(
      <NumberInput
        isInvalid
        value={100}
        name='test'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render an number input with an icon`, () => {
    const wrapper = shallow(
      <NumberInput
        value={100}
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
      <NumberInput
        name='test'
        value={100}
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
      <NumberInput
        name='test'
        value={100}
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
      <NumberInput
        name='test'
        value={100}
        highlightOnFocus={false}
      />
    )

    wrapper.simulate('focus', mockedEvent)

    expect(mockedEvent.target.select.mock.calls.length).toBe(0)
    expect(wrapper).toMatchSnapshot()
  })

  it(`should render an number input with a disable prefix text`, () => {
    const wrapper = shallow(
      <NumberInput
        name='test'
        value={100}
        disabledPrefix='test'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render an number input with a custom setting`, () => {
    const wrapper = shallow(
      <NumberInput
        name='test'
        value={1}
        min={0}
        max={5}
        step={0.5}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render an number input with custom width`, () => {
    const wrapper = shallow(
      <NumberInput
        name='test'
        value={100}
        width='100'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
