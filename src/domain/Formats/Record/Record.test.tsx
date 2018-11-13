import { mount } from 'enzyme'
import React from 'react'
import { Record } from './Record'

describe('<Field />', () => {
  it(`should render a Record component, creating a Text child with the provided text`, () => {
    const wrapper = mount(
      <Record
        name='Position Title'
      >
        Chief Executive Officer
      </Record>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a Record component, creating a Text child with the provided number`, () => {
    const wrapper = mount(
      <Record
        name='FTE'
      >
        1.000
      </Record>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a Record component, with the provided component child`, () => {
    const wrapper = mount(
      <Record
        name='Position Title'
      >
        <p>Chief Executive Officer</p>
      </Record>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a Record with a Tooltip`, () => {
    const wrapper = mount(
      <Record
        name='Position Title'
        tooltipContent='a'
      >
        <p>Chief Executive Officer</p>
      </Record>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
