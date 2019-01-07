import { mount } from 'enzyme'
import React from 'react'

import { BreadcrumbGroup } from './BreadcrumbGroup'

describe('<PageLayout />', () => {
  it(`should render a simple breadcrumbGroup`, () => {
    const wrapper = mount(
      <BreadcrumbGroup>
        <BreadcrumbGroup.Breadcrumb to='/test'>
          Dashboard
        </BreadcrumbGroup.Breadcrumb>
        <BreadcrumbGroup.Breadcrumb to='/test' useReactRouter={false}>
          Tasks
        </BreadcrumbGroup.Breadcrumb>
        <BreadcrumbGroup.Breadcrumb to='/test' type='active'>
          Create
        </BreadcrumbGroup.Breadcrumb>
      </BreadcrumbGroup>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a breadcrumb by itself`, () => {
    const wrapper = mount(
      <BreadcrumbGroup.Breadcrumb to='/test'>
        Create
      </BreadcrumbGroup.Breadcrumb>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
