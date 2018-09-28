import React from 'react'
import { mount } from 'enzyme'

import { CurrencyText } from './CurrencyText'

describe('<CurrencyText />', () => {
  it(`should render the Currency Text`, () => {
    const wrapper = mount(
      <CurrencyText
        value={1000}
        prefix='AUD'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render the Currency Text with isPrefixFormatted being true`, () => {
    const wrapper = mount(
      <CurrencyText
        value={1000}
        prefix='AUD'
        prefixType='display'
        isPrefixFormatted
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render the Currency Text without value`, () => {
    const wrapper = mount(
      <CurrencyText
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

})
