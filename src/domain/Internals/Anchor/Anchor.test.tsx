import { mount } from 'enzyme'
import React from 'react'

import { Anchor } from './Anchor'

describe('<Anchor />', () => {
  it('should render a link', () => {
    const wrapper = mount(
      <>
        <Anchor href='#'>Relative URL</Anchor>
        <Anchor href='http://localhost/#'>Absolute URL</Anchor>
      </>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a link with rel with href is external', () => {
    const wrapper = mount(
      <>
        <Anchor href='http://www.google.com'>No Rel</Anchor>
        <Anchor href='http://www.google.com' rel='noreferrer'>Rel with noreferrer</Anchor>
        <Anchor href='http://www.google.com' rel='nofollower'>Rel with nofollower</Anchor>
      </>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a link with target when openInNewTab is true', () => {
    const wrapper = mount(
      <>
        <Anchor href='#' openInNewTab>No target</Anchor>
        <Anchor href='#' target='_self' openInNewTab>With target</Anchor>
      </>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
