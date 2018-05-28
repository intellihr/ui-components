import { mount } from 'enzyme'
import React from 'react'
import { ReportHeader } from './'

describe('<ReportHeader />', () => {
  it(`should render ReportHeader`, () => {
    const wrapper = mount(
      <ReportHeader
        primaryText='How To Read This Chart'
        secondaryText='Hide Info'
        displayInfo
        renderHelperContent={(<span> I am help text </span>)}
        renderTitle={(<h3> I am header </h3>)}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
