import { mount } from 'enzyme'
import React from 'react'

import { Anchor } from '../../Internals/Anchor'
import { BackLink } from './BackLink'

describe('<BackLink />', () => {
  it(`should render a back link`, () => {
    const wrapper = mount(
      <BackLink href='/lol'>
        Back To Wonka Component Library
      </BackLink>
    )

    expect(wrapper.find(Anchor)).toBeTruthy()
    expect(wrapper.find(Anchor).contains('Back To Wonka Component Library')).toBeTruthy()
  })
})
