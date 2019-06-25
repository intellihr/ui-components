import { mount } from 'enzyme'
import React from 'react'

import { Statistic } from './Statistic'

describe('<Statistic />', () => {
  it(`should render Statistic Record component`, () => {
    const wrapper = mount(
      <Statistic
        title='Total Cost'
        value='99.00'
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a Statistic component with a prefix`, () => {
    const wrapper = mount(
      <Statistic
        title='Total Cost'
        prefix='AUD'
        value='99.00'
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it(`should render not provided when no value is provided`, () => {
    const wrapper = mount(
      <Statistic
        title='Total Cost'
        prefix='AUD'
        value={null}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
