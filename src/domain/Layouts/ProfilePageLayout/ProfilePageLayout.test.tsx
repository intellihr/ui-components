import { mount } from 'enzyme'
import React from 'react'

import { ProfilePageLayout } from './ProfilePageLayout'

describe('<ProfilePageLayout />', () => {
  it(`should render a legend`, () => {
    const wrapper = mount(
      <ProfilePageLayout>
        <ProfilePageLayout.component position='header'>
          <div>a</div>
        </ProfilePageLayout.component>
        <ProfilePageLayout.component position='content'>
          <div>b</div>
        </ProfilePageLayout.component>
      </ProfilePageLayout>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
