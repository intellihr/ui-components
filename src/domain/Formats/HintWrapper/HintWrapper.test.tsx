import { shallow } from 'enzyme'
import React from 'react'
import { HintWrapper } from './HintWrapper'
import { Brick } from '../../Typographies/Brick'

describe('<Brick />', () => {
  it('should render a basic hint wrapper', () => {
    const wrapper = shallow(
      <HintWrapper
        hint='Never trust a cat'
      >
        Hover me for a tip :)
      </HintWrapper>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a hint wrapper around a brick', () => {
    const wrapper = shallow(
      <HintWrapper
        hint='Never trust a cat'
      >
        <Brick>
          Hover me for a tip :)
        </Brick>
      </HintWrapper>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
