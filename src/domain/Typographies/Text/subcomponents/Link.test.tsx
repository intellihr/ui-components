import { mount } from 'enzyme'
import React from 'react'

import { Link } from './Link'

describe('<Link />', () => {
  it('should render a link', () => {
    const wrapper = mount(
      <>
        <Link href='#'>Relative URL</Link>
        <Link href='http://localhost/#'>Absolute URL</Link>
      </>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a link with rel when href is external', () => {
    const wrapper = mount(
      <Link href='http://www.google.com'>Hello World</Link>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a link with target when openInNewTab is true', () => {
    const wrapper = mount(
      <Link href='#' openInNewTab>Hello World</Link>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
