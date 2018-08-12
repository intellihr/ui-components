import { mount } from 'enzyme'
import React from 'react'

import { UnstyledLink } from './UnstyledLink'

describe('<TextLink />', () => {
  it(`should render a text link`, () => {
    const wrapper = mount(
      <UnstyledLink href='/lol'>
        Text link me
      </UnstyledLink>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
