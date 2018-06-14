import React from 'react'
import { mount } from 'enzyme'

import { Text } from './Text'

describe('<Text />', () => {
  it(`should render an element with text`, () => {
    const wrapper = mount(
      <Text>Hello, world!</Text>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a skeleton element if skeletonOptions are passed to the component`, () => {
    const wrapper = mount(
      <Text
        skeletonOptions={{
          showSkeleton: true,
          shape: 'line'
        }}
      >
        Hello, world!
      </Text>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
