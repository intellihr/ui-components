import React from 'react'
import { shallow } from 'enzyme'
import { Emoji } from './Emoji'
import { Props } from '../../../common'

describe('<Emoji />', () => {
  it('should render the Emoji', () => {
    const wrapper = shallow(
      <Emoji
        emoji='smiley'
        type={Props.TypographyType.Small}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
