import { mount } from 'enzyme'
import React from 'react'

import { BreadcrumbGroup } from './BreadcrumbGroup'

describe('<PageLayout />', () => {
  it(`should render a simple breadcrumbGroup`, () => {
    const wrapper = mount(
      <BreadcrumbGroup>
        <BreadcrumbGroup.Breadcrumb href='/test'>
          Dashboard
        </BreadcrumbGroup.Breadcrumb>
        <BreadcrumbGroup.Breadcrumb href='/test' anchorComponentProps={{useReactRouter: false}}>
          Tasks
        </BreadcrumbGroup.Breadcrumb>
        <BreadcrumbGroup.Breadcrumb href='/test' type='active'>
          Create
        </BreadcrumbGroup.Breadcrumb>
      </BreadcrumbGroup>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a breadcrumb by itself`, () => {
    const wrapper = mount(
      <BreadcrumbGroup.Breadcrumb href='/test'>
        Create
      </BreadcrumbGroup.Breadcrumb>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
