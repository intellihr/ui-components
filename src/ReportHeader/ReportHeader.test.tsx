import { mount } from 'enzyme'
import React from 'react'
import { ReportHeader } from './'

describe('<ReportHeader />', () => {
  it(`should render ReportHeader`, () => {
    const wrapper = mount(
      <ReportHeader
        primaryText='How To Read This Chart'
        secondaryText='Hide Info'
        title={'Hello'}
        displayInfo
        renderHelperContent={() => (<span> 'I am help text' </span>)}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
