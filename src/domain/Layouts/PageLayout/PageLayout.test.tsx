import { mount } from 'enzyme'
import React from 'react'

import { PageLayout } from './PageLayout'

describe('<PageLayout />', () => {
  it(`should render a profile layout`, () => {
    const wrapper = mount(
      <PageLayout layoutType='profile'>
        <PageLayout.Region regionType='top'>
          <div>1</div>
        </PageLayout.Region>
        <PageLayout.Region regionType='header'>
          <div>a</div>
        </PageLayout.Region>
        <PageLayout.Region regionType='content'>
          <div>b</div>
        </PageLayout.Region>
      </PageLayout>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render an index layout`, () => {
    const wrapper = mount(
      <PageLayout layoutType='index'>
        <PageLayout.Region regionType='top'>
          <div>1</div>
        </PageLayout.Region>
        <PageLayout.Region regionType='header'>
          <div>a</div>
        </PageLayout.Region>
        <PageLayout.Region regionType='content'>
          <div>b</div>
        </PageLayout.Region>
      </PageLayout>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a simple layout`, () => {
    const wrapper = mount(
      <PageLayout layoutType='profile'>
        <PageLayout.Region regionType='top'>
          <div>1</div>
        </PageLayout.Region>
        <PageLayout.Region regionType='content'>
          <div>a</div>
        </PageLayout.Region>
      </PageLayout>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a fullscreen layout`, () => {
    const wrapper = mount(
      <PageLayout layoutType='fullscreen'>
        <PageLayout.Region regionType='top'>
          <div>1</div>
        </PageLayout.Region>
        <PageLayout.Region regionType='content'>
          <div>a</div>
        </PageLayout.Region>
      </PageLayout>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
