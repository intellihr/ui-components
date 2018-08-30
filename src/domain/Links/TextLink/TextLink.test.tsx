import { mount } from 'enzyme'
import React from 'react'

import { TextLink } from './TextLink'

describe('<TextLink />', () => {
  it(`should render a text link`, () => {
    const wrapper = mount(
      <TextLink href='/lol'>
        Text link me
      </TextLink>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a small text link`, () => {
    const wrapper = mount(
      <TextLink href='/lol' small>
        Text link me
      </TextLink>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
