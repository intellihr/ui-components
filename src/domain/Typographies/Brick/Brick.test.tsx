import { shallow } from 'enzyme'
import React from 'react'

import { Props } from '../../../common'
import { Brick } from './Brick'

describe('<Brick />', () => {
  it('should render a Brick with default values', () => {
    const wrapper = shallow(
      <Brick
      >
        Test
      </Brick>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a Brick with the alert color', () => {
    const wrapper = shallow(
      <Brick
        color={Brick.Color.Alert}
      >
        Test
      </Brick>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a Brick with the heading typography', () => {
    const wrapper = shallow(
      <Brick
        typographyType={Props.TypographyType.Heading}
      >
        Test
      </Brick>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
