import { shallow } from 'enzyme'
import React from 'react'
import { ReportHeader } from './'
import { ReportInfo } from '../ReportInfo'

describe('<ReportHeader />', () => {
  it(`should render ReportHeader with info`, () => {
    const wrapper = shallow(
      <ReportHeader
        primaryText='How To Read This Chart'
        secondaryText='Hide Info'
        renderHelperContent={<ReportInfo description='I am helper text'/>}
        renderTitle={(<h3> I am header </h3>)}
      />
    )

    expect(wrapper).toMatchSnapshot()

      wrapper.setState({ isExpanded: true })

      expect(wrapper).toMatchSnapshot()
  })

  it(`should render ReportHeader without info`, () => {
    const wrapper = shallow(
      <ReportHeader
        primaryText='How To Read This Chart'
        secondaryText='Hide Info'
        showHelper={false}
        renderHelperContent={(<ReportInfo description='I am helper text'/>)}
        renderTitle={(<h3> I am header </h3>)}
      />
    )

      expect(wrapper).toMatchSnapshot()

      wrapper.setState({ isExpanded: true })

      expect(wrapper).toMatchSnapshot()  })
})
