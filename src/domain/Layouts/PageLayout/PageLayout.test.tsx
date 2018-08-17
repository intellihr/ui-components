import { mount } from 'enzyme'
import React from 'react'

import { PageLayout } from './PageLayout'

describe('<PageLayout />', () => {
  it(`should render a profile layout`, () => {
    const wrapper = mount(
      <PageLayout layoutType='profile'>
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
})
