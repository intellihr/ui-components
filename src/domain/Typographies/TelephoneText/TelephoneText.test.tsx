import React from 'react'
import { shallow } from 'enzyme'
import { TelephoneText } from './TelephoneText'
import { Props } from '../../../common'

describe('<TelephoneText />', () => {
  it('should render the Telephone Text', () => {
    const wrapper = shallow(
      <TelephoneText
        phoneNumber='412341234'
        countryCode='au'
        type={Props.TypographyType.Body}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render the Telephone Text no flag', () => {
    const wrapper = shallow(
      <TelephoneText
        phoneNumber='412341234'
        countryCode='au'
        type={Props.TypographyType.Body}
        showFlag={false}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render the Telephone Text with no country information', () => {
    const wrapper = shallow(
      <TelephoneText
        phoneNumber='33333333'
        type={Props.TypographyType.Body}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
