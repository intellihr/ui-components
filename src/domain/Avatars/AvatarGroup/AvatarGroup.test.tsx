import { shallow } from 'enzyme'
import React from 'react'
import { AvatarGroup, IAvatarGroupAvatar } from './AvatarGroup'

describe('<AvatarGroup />', () => {
  it(`should render a basic avatar group`, () => {
    const wrapper = shallow(
      <AvatarGroup
        avatars={[
          {
            initials: 'GR',
            imageUrl: 'testurl'
          },
          {
            initials: 'GR'
          }
        ]}
        componentContext='test'
      />
    )

    expect(wrapper.children().length).toEqual(2)
    expect(wrapper).toMatchSnapshot()
  })

  it(`should render an avatar group with many avatars`, () => {
    const avatars = new Array(50).fill(0).map(() => ({ initials: 'TT' }))

    const wrapper = shallow(
      <AvatarGroup
        avatars={avatars}
        maxAvatarCount={10}
      />
    )

    expect(wrapper.children().length).toEqual(10)
    expect(wrapper.html()).toContain('+41')
    expect(wrapper).toMatchSnapshot()
  })
})
