import { shallow } from 'enzyme'
import React from 'react'

import { Props } from '../../../common'
import { Emoji } from './Emoji'

describe('<Emoji />', () => {
  it('should render the Emoji', () => {
    const wrapper = shallow(
      <Emoji
        emoji='smiley'
        type={Props.TypographyType.Small}
      />
    )

    expect(wrapper.find('Emoji').exists()).toBeTruthy()
    expect(wrapper.find('Emoji').prop('emoji')).toEqual('smiley')
  })
})
