import { shallow } from 'enzyme'
import React from 'react'

import { Props } from '../../../common'
import { Brick } from '../../Typographies/Brick'
import { HintWrapper } from './HintWrapper'

describe('<HintWrapper />', () => {
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

  it('should render a popover hint wrapper', () => {
    const wrapper = shallow(
      <HintWrapper
        hint='Never trust a cat'
        hintType={Props.HintWrapperType.Popover}
      >
        Hover me for a tip :)
      </HintWrapper>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a hint wrapper with a JSX Element for the hint content', () => {
    const wrapper = shallow(
      <HintWrapper
        hint={<div>Never trust a cat</div>}
      >
        Hover me for a tip :)
      </HintWrapper>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
