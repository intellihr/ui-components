import React from 'react'
import { mount } from 'enzyme'

import { Heading } from './Heading'

describe('<Heading />', () => {
  it(`should render a h1 element with type 'page'`, () => {
    const wrapper = mount(
      <Heading
        type='page'
      >
        Hello I am a h1
      </Heading>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a h2 element with type 'section'`, () => {
    const wrapper = mount(
      <Heading
        type='section'
      >
        Hello I am a h2
      </Heading>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a h3 element with type 'subsection'`, () => {
    const wrapper = mount(
      <Heading
        type='subsection'
      >
        Hello I am a h3
      </Heading>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a skeleton element if skeletonOptions are passed to the component`, () => {
    const wrapper = mount(
      <Heading
        type='page'
      >
        Hello, world!
      </Heading>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
