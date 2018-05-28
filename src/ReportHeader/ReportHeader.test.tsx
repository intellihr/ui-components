import { mount } from 'enzyme'
import React from 'react'
import { ReportHeader } from './'

describe('<ReportHeader />', () => {
  it(`should render ReportHeader with info`, () => {
    const wrapper = mount(
      <ReportHeader
        primaryText='How To Read This Chart'
        secondaryText='Hide Info'
        renderHelperContent={(<span> I am help text </span>)}
        renderTitle={(<h3> I am header </h3>)}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render ReportHeader without info`, () => {
    const wrapper = mount(
      <ReportHeader
        primaryText='How To Read This Chart'
        secondaryText='Hide Info'
        renderTitle={(<h3> I am header </h3>)}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
