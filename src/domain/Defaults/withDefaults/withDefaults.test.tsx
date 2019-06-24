import { mount } from 'enzyme'
import React from 'react'

import { DefaultsProvider } from '../Defaults'
import { withDefaults } from './withDefaults'

describe('withDefaults', () => {
  it('should provide default values', () => {
    const mockFn = jest.fn()

    const Consumer = withDefaults((props) => {
      mockFn(props)

      return <div/>
    }) as any

    const wrapper = mount(
      <DefaultsProvider>
        <Consumer/>
      </DefaultsProvider>
    )

    expect(mockFn.mock.calls).toMatchSnapshot()
  })

  it('should still provide default values without Provider', () => {
    const mockFn = jest.fn()

    const Consumer = withDefaults((props) => {
      mockFn(props)

      return <div/>
    }) as any

    const wrapper = mount(
      <Consumer
        mockFn={mockFn}
      />
    )

    expect(mockFn.mock.calls).toMatchSnapshot()
  })
})
