import React from 'react'
import { mount } from 'enzyme'
import { DefaultsProvider } from '../Defaults'
import { withDefaults } from './withDefaults'

describe('withDefaults', () => {
  const Consumer = withDefaults(props => {
    props.mockFn(props.defaults)
    return <div />
  })

  it('should provide default values', () => {
    const mockFn = jest.fn()

    const wrapper = mount(
      <DefaultsProvider>
        <Consumer
          mockFn={mockFn}
        />
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
        <Consumer
          mockFn={mockFn}
        />
      </DefaultsProvider>
    )

    expect(mockFn.mock.calls).toMatchSnapshot()
  })

  it('should overwrite default values', () => {
    const mockFn = jest.fn()

    const wrapper = mount(
      <DefaultsProvider
        value={{
          breakpoints: {
            xsmall: 0,
            medium: 100,
            large: 200,
            xlarge: 300,
            xxlarge: 400
          }
        }}
      >
        <Consumer
          mockFn={mockFn}
        />
      </DefaultsProvider>
    )

    expect(mockFn.mock.calls).toMatchSnapshot()
  })

  it('should still provide default values without Provider', () => {
    const mockFn = jest.fn()

    const wrapper = mount(
      <Consumer
        mockFn={mockFn}
      />
    )

    expect(mockFn.mock.calls).toMatchSnapshot()
  })
})
