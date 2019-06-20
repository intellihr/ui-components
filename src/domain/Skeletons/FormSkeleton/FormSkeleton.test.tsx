import { shallow } from 'enzyme'
import React from 'react'

import { FormFieldSkeleton, FormSkeleton } from './FormSkeleton'

describe('<FormSkeleton />', () => {
  it('should render a form skeleton', () => {
    const wrapper = shallow(
      <FormSkeleton />
    )

    expect(wrapper).toMatchSnapshot()
  })
})

describe('<FormFieldSkeleton />', () => {
  it('should render a form field skeleton', () => {
    const wrapper = shallow(
      <FormFieldSkeleton />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
