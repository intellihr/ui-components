import { shallow } from 'enzyme'
import React from 'react'
import { HintText } from './HintText'
import { CurrencyText } from '../CurrencyText'

describe('<Brick />', () => {
  it('should render a basic hint text', () => {
    const wrapper = shallow(
      <HintText
        hint='Never trust a cat'
      >
        Hover me for a tip :)
      </HintText>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a hint text with a different component as the child', () => {
    const wrapper = shallow(
      <HintText
        hint='Never trust a cat'
      >
        <CurrencyText
          value={1000}
          prefix='AUD'
        />
      </HintText>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
