import { shallow } from 'enzyme'
import React from 'react'

import { Person } from './Person'

describe('<Person />', () => {
  it(`should render a basic person`, () => {
    const wrapper = shallow(
      <Person
        avatarInitials='JW'
        primaryText='John Wick'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a person with lots of data`, () => {
    const wrapper = shallow(
      <Person
        avatarInitials='JW'
        avatarUrl='www.example.com'
        avatarStatusColor='primary'
        primaryText='John Wick'
        secondaryText='Guy Killer'
        tertiaryText='In Cinemas 2019'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a basic compact person`, () => {
    const wrapper = shallow(
      <Person
        avatarInitials='JW'
        primaryText='John Wick'
        isCompact
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a compact person with lots of data`, () => {
    const wrapper = shallow(
      <Person
        avatarInitials='JW'
        avatarUrl='www.example.com'
        avatarStatusColor='primary'
        primaryText='John Wick'
        secondaryText='Guy Killer'
        tertiaryText='In Cinemas 2019'
        isCompact
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
