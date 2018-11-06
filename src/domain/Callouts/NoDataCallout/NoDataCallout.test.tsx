import { shallow } from 'enzyme'
import React from 'react'

import { NoDataCallout } from '../NoDataCallout'

describe('NoDataCallout', () => {
  it('Renders default without any children/primaryMessage/secondaryMessage or children', () => {
    const wrapper = shallow(
      <NoDataCallout />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('Renders successfully with primaryMessage only', () => {
    const wrapper = shallow(
      <NoDataCallout primaryMessage='This is a primary message'/>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('Renders successfully with secondaryMessage only', () => {
    const wrapper = shallow(
      <NoDataCallout secondaryMessage='This is a secondary message'/>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('Renders successfully with both primary and secondaryMessage', () => {
    const wrapper = shallow(
      <NoDataCallout
        primaryMessage='This is a primary message'
        secondaryMessage='This is a secondary message'/>
    )
    expect(wrapper).toMatchSnapshot()
  })

})
