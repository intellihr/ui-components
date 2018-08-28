import React from 'react'
import { mount } from 'enzyme'

import { Text } from './Text'
import { Variables } from '../../../common'

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

  it(`should render an element with colored text`, () => {
    const wrapper = mount(
      <Text color={Variables.Color.r400}>Hello, world!</Text>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render an element with small text`, () => {
    const wrapper = mount(
      <Text type='small'>Hello, world!</Text>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render an element with heading text`, () => {
    const wrapper = mount(
      <Text type='heading'>Hello, world!</Text>
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

  it(`should render a text element as a h1`, () => {
    const wrapper = mount(
      <Text tag='h1'>Hello, world!</Text>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
