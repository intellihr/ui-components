import { mount } from 'enzyme'
import React from 'react'

import { IndentedElement } from './IndentedElement'

describe('<IndentedElement />', () => {
  it('should render an element with no indent', () => {
    const wrapper = mount(
      <IndentedElement
        depth={0}
      >
        Hello I am not indented
      </IndentedElement>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render an indented element', () => {
    const wrapper = mount(
      <IndentedElement
        depth={2}
      >
        WOW! I'm depth level two :)
      </IndentedElement>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
