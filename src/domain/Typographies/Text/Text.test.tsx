import React from 'react'
import { mount } from 'enzyme'

import { Text } from './Text'
import { Variables, Props } from '../../../common'
import { HintWrapperType } from '../../Formats/HintWrapper'

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
      <Text type={Props.TypographyType.Small}>Hello, world!</Text>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render an element with heading text`, () => {
    const wrapper = mount(
      <Text type={Props.TypographyType.Heading}>Hello, world!</Text>
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

  it(`should render a text with data attributes`, () => {
    const wrapper = mount(
      <Text
        dataAttributes={{
          role: 'myRole',
          otherKey: 'myOtherKey'
        }}
      >
        Hello! I am text with data attributes
      </Text>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a text with a popover hint`, () => {
    const wrapper = mount(
      <Text
        hint='Test'
        hintType={HintWrapperType.Popover}
      >
        Hello! I am text with a hint
      </Text>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a text with a tooltip hint`, () => {
    const wrapper = mount(
      <Text
        hint='Test'
        hintType={HintWrapperType.Tooltip}
      >
        Hello! I am text with a hint
      </Text>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
