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
        dialCode='61'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render the Telephone Text with flag type', () => {
    const wrapper = shallow(
      <TelephoneText
        phoneNumber='412341234'
        countryCode='au'
        dialCode='61'
        flagType={Props.TypographyType.Small}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render the Telephone Text without prefix', () => {
    const wrapper = shallow(
      <TelephoneText
        phoneNumber='+61412341234'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
