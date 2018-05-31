import { mount } from 'enzyme'
import React from 'react'
import { FormattedText } from '../FormattedText'

describe('<FormattedText />', () => {
  it(`should render the formatted text`, () => {
    const wrapper = mount(
      <FormattedText
        text='Hello. I am a piece of paragraph text.

        This should be on a new line :)'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render any urls as links`, () => {
    const wrapper = mount(
      <FormattedText
        text='www.heyguy.com

        also this one www.ozbargain.com.au'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
