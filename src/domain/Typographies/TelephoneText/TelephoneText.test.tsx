import { mount } from 'enzyme'
import React from 'react'

import { Emoji } from '../Emoji'
import { Text } from '../Text'
import { TelephoneText } from './TelephoneText'

describe('<TelephoneText />', () => {
  it('should render the Telephone Text', () => {
    const wrapper = mount(
      <TelephoneText
        phoneNumber='412341234'
        countryCode='au'
      />
    )

    expect(wrapper.contains('+61 412 341 234')).toBeTruthy()
    expect(wrapper.find(Emoji).length).toEqual(1)
    expect(wrapper.find(Text.Link).length).toEqual(0)
  })

  it('should render the Telephone Text no flag', () => {
    const wrapper = mount(
      <TelephoneText
        phoneNumber='412341234'
        countryCode='au'
        showFlag={false}
      />
    )

    expect(wrapper.contains('+61 412 341 234')).toBeTruthy()
    expect(wrapper.find(Emoji).length).toEqual(0)
    expect(wrapper.find(Text.Link).length).toEqual(0)
  })

  it('should render the Telephone Text with no country information', () => {
    const wrapper = mount(
      <TelephoneText
        phoneNumber='33333333'
      />
    )

    expect(wrapper.contains('33333333')).toBeTruthy()
    expect(wrapper.find(Emoji).length).toEqual(0)
    expect(wrapper.find(Text.Link).length).toEqual(0)
  })

  it('should render a Telephone Text link', () => {
    const wrapper = mount(
      <TelephoneText
        phoneNumber='412341234'
        countryCode='au'
        isLink
      />
    )

    expect(wrapper.contains('+61 412 341 234')).toBeTruthy()
    expect(wrapper.find(Emoji).length).toEqual(1)
    expect(wrapper.find(Text.Link).length).toEqual(1)
  })
})
