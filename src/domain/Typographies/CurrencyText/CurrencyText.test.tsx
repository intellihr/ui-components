import { mount } from 'enzyme'
import React from 'react'

import { Props, Variables } from '../../../common'
import { CurrencyText } from './CurrencyText'

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

  it('should render the Currency Text with a red prefix color', () => {
    const wrapper = mount(
      <CurrencyText
        value={1000}
        prefix='AUD'
        prefixColor={Variables.Color.r200}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render the Currency Text with a red money color', () => {
    const wrapper = mount(
      <CurrencyText
        value={1000}
        prefix='AUD'
        valueColor={Variables.Color.r200}
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
        valueType={Props.TypographyType.XSmall}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render the Currency Text with a center flex align', () => {
    const wrapper = mount(
      <CurrencyText
        value={1000}
        prefix='AUD'
        valueType={Props.TypographyType.XSmall}
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

  it('should render the Currency Text with a value hint', () => {
    const wrapper = mount(
      <CurrencyText
        value={0}
        prefix='AUD'
        valueHintComponentProps={{
          hint: 'I am a hint',
          width: 250
        }}
      />
    )

    expect(wrapper.find('HintWrapper').exists()).toBeTruthy()
    expect(wrapper.find('Tooltip').exists()).toBeTruthy()
  })

  it('should render the Currency Text not inline', () => {
    const wrapper = mount(
      <CurrencyText
        isInline={false}
        value={1000.499}
        prefix='AUD'
        decimalPlace={2}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should format differently based on locale', () => {
    expect(CurrencyText.formatter(1000.499, 2, 'fr'))
      .toEqual('1 000,50')
    expect(CurrencyText.formatter(1000.499, 2, 'au'))
      .toEqual('1,000.50')
  })
})
