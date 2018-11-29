import React from 'react'
import { mount } from 'enzyme'

import { CurrencyText } from './CurrencyText'
import { Props, Variables } from '../../../common'

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
})
