import { shallow } from 'enzyme'
import React from 'react'

import { AvatarStatusDotColor } from '../Avatar'
import { AvatarEntity, AvatarEntitySize } from './AvatarEntity'

describe('<AvatarEntity />', () => {
  it(`should render a basic avatar entity`, () => {
    const wrapper = shallow(
      <AvatarEntity
        initials='JW'
        primaryText='John Wick'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a small avatar entity`, () => {
    const wrapper = shallow(
      <AvatarEntity
        size={AvatarEntitySize.Small}
        initials='JW'
        imageUrl='www.example.com'
        statusDot={AvatarStatusDotColor.Indigo}
        primaryText='John Wick'
        secondaryText='Guy Killer'
        tertiaryText='In Cinemas 2019'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a normal compact avatar entity`, () => {
    const wrapper = shallow(
      <AvatarEntity
        size={AvatarEntitySize.NormalCompact}
        initials='JW'
        primaryText='John Wick'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a small compact avatar entity`, () => {
    const wrapper = shallow(
      <AvatarEntity
        size={AvatarEntitySize.SmallCompact}
        initials='JW'
        imageUrl='www.example.com'
        statusDot={AvatarStatusDotColor.Indigo}
        primaryText='John Wick'
        secondaryText='Guy Killer'
        tertiaryText='In Cinemas 2019'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
