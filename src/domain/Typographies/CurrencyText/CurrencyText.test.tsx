import React from 'react'
import { mount } from 'enzyme'

import { CurrencyText } from './CurrencyText'
import { Props } from '../../../common'

describe('<CurrencyText />', () => {
  it('should render the Currency Text', () => {
    const wrapper = mount(
      <CurrencyText
        value={1000.499}
        prefix='AUD'
        decimalPlace={2}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render the Currency Text with an extra small prefix style', () => {
    const wrapper = mount(
      <CurrencyText
        value={1000}
        prefix='AUD'
        prefixType={Props.TypographyType.XSmall}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render the Currency Text with an extra small money style', () => {
    const wrapper = mount(
      <CurrencyText
        value={1000}
        prefix='AUD'
        type={Props.TypographyType.XSmall}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render the Currency Text with a center flex align', () => {
    const wrapper = mount(
      <CurrencyText
        value={1000}
        prefix='AUD'
        type={Props.TypographyType.XSmall}
        prefixType={Props.TypographyType.Heading}
        flexAlign
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render the Currency Text without value', () => {
    const wrapper = mount(
      <CurrencyText />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render the Currency Text with 0 as value', () => {
    const wrapper = mount(
      <CurrencyText
        value={0}
        prefix='AUD'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

})
