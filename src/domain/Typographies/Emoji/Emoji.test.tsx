import React from 'react'
import { mount } from 'enzyme'
import { Emoji } from './Emoji'
import { Props } from '../../../common'

describe('<Emoji />', () => {
  it('should render the Emoji', () => {
    const wrapper = mount(
      <Emoji
        emoji='smiley'
        type={Props.TypographyType.Small}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render the Emoji with flag format', () => {
    const wrapper = mount(
      <Emoji
        emoji='flag-au'
        isFlag
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
