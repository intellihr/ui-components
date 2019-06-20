import { mount } from 'enzyme'
import React from 'react'

import { DefaultsConsumer, DefaultsProvider } from './Defaults'

describe('<Defaults />', () => {
  it('should provide default values', () => {
    const mockFn = jest.fn()

    const wrapper = mount(
      <DefaultsProvider>
        <DefaultsConsumer>
          {(defaults) => mockFn(defaults)}
        </DefaultsConsumer>
      </DefaultsProvider>
    )

    expect(mockFn.mock.calls).toMatchSnapshot()
  })

  it('should provide values with defaults', () => {
    const mockFn = jest.fn()

    const wrapper = mount(
      <DefaultsProvider
        value={{
          AnchorComponent: () => <div />
        }}
      >
        <DefaultsConsumer>
          {(defaults) => mockFn(defaults)}
        </DefaultsConsumer>
      </DefaultsProvider>
    )

    expect(mockFn.mock.calls).toMatchSnapshot()
  })

  it('should overwrite default values', () => {
    const mockFn = jest.fn()

    const wrapper = mount(
      <DefaultsProvider
        value={{
          AnchorComponent: () => <div/>
        }}
      >
        <DefaultsConsumer>
          {(defaults) => mockFn(defaults)}
        </DefaultsConsumer>
      </DefaultsProvider>
    )

    expect(mockFn.mock.calls).toMatchSnapshot()
  })

  it('should still provide default values without Provider', () => {
    const mockFn = jest.fn()

    const wrapper = mount(
      <DefaultsConsumer>
        {(defaults) => mockFn(defaults)}
      </DefaultsConsumer>
    )

    expect(mockFn.mock.calls).toMatchSnapshot()
  })
})
