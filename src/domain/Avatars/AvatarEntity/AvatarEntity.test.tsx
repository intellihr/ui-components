import {shallow} from 'enzyme'
import React from 'react'

import {Props} from '../../../common'
import {AvatarEntity} from './AvatarEntity'

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

  it(`should render a avatar entity with lots of data`, () => {
    const wrapper = shallow(
      <AvatarEntity
        initials='JW'
        imageUrl='www.example.com'
        statusDot={Props.AvatarStatusDotColor.Indigo}
        primaryText='John Wick'
        secondaryText='Guy Killer'
        tertiaryText='In Cinemas 2019'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a basic compact avatar entity`, () => {
    const wrapper = shallow(
      <AvatarEntity
        initials='JW'
        primaryText='John Wick'
        isCompact
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a avatar entity with specific text type`, () => {
    const wrapper = shallow(
      <AvatarEntity
        initials='JW'
        statusDot={Props.AvatarStatusDotColor.Indigo}
        primaryText='John Wick'
        secondaryText='Guy Killer'
        tertiaryText='Job Ending in 3 days'
        isHoverable
        primaryTextType={Props.TypographyType.Heading}
        secondaryTextType={Props.TypographyType.Body}
        tertiaryTextType={Props.TypographyType.Small}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a compact avatar entity with lots of data`, () => {
    const wrapper = shallow(
      <AvatarEntity
        initials='JW'
        imageUrl='www.example.com'
        statusDot={Props.AvatarStatusDotColor.Indigo}
        primaryText='John Wick'
        secondaryText='Guy Killer'
        tertiaryText='In Cinemas 2019'
        isCompact
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
