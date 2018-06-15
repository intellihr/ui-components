import { mount } from 'enzyme'
import React from 'react'

import { TextLink } from './TextLink'

// Skipping until enzyme properly supports React 16.3
// see https://github.com/airbnb/enzyme/pull/1513
describe('<TextLink />', () => {
  it(`should render a text link`, () => {
    const wrapper = mount(
      <TextLink href='/lol'>
        Text link me
      </TextLink>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
