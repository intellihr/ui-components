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

  it(`should render an element with heavy text`, () => {
    const wrapper = mount(
      <Text weight='heavy'>Hello, world!</Text>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render an element with subtle text`, () => {
    const wrapper = mount(
      <Text color='subtle'>Hello, world!</Text>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render an element with small text`, () => {
    const wrapper = mount(
      <Text size='small'>Hello, world!</Text>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render an element with large text`, () => {
    const wrapper = mount(
      <Text size='large'>Hello, world!</Text>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render an element with the text converted to uppercase`, () => {
    const wrapper = mount(
      <Text isUpper>Hello, world!</Text>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a non-inline text element`, () => {
    const wrapper = mount(
      <Text isInline={false}>Hello, world!</Text>
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
