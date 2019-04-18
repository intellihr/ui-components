import { shallow } from 'enzyme'
import React from 'react'

import { ToggleSwitch } from './ToggleSwitch'

describe('<ToggleSwitch />', () => {
  it(`should render a checked ToggleSwitch`, () => {
    const wrapper = shallow(
      <ToggleSwitch
        checked
        name='test-input'
        title='This is a Toggle Switch'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a unchecked ToggleSwitch`, () => {
    const wrapper = shallow(
      <ToggleSwitch
        checked={false}
        name='test-input'
        title='This is a Toggle Switch'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a disabled ToggleSwitch`, () => {
    const wrapper = shallow(
      <ToggleSwitch
        checked={false}
        disabled
        name='test-input'
        title='This is a Toggle Switch'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a disabled and checked ToggleSwitch`, () => {
    const wrapper = shallow(
      <ToggleSwitch
        checked
        disabled
        name='test-input'
        title='This is a Toggle Switch'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
