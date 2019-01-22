import { shallow } from 'enzyme'
import React from 'react'

import { Tile } from './Tile'

describe('<Tile />', () => {
  it(`should render a board tile with nothing`, () => {
    const wrapper = shallow(
      <Tile />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a compacted board tile`, () => {
    const wrapper = shallow(
      <Tile
        label='This is a test tile'
      >
        Children
      </Tile>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a non-compact board tile`, () => {
    const wrapper = shallow(
      <Tile
        label='This is a test tile'
        isCompact={false}
      >
        Children
      </Tile>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
