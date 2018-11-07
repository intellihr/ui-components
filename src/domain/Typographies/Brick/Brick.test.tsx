import { shallow } from 'enzyme'
import React from 'react'
import { Brick } from './Brick'
import { Props } from '../../../common'

describe('<Brick />', () => {
  it('should render a Brick with default values', () => {
    const wrapper = shallow(
      <Brick
        text='Test'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a Brick with the alert color', () => {
    const wrapper = shallow(
      <Brick
        text='Test'
        color='alert'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a Brick with the heading typography', () => {
    const wrapper = shallow(
      <Brick
        text='Test'
        typographyType={Props.TypographyType.Heading}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
