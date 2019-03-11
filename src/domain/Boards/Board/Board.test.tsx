import { shallow } from 'enzyme'
import React from 'react'

import { Board } from './Board'

describe('<Board />', () => {
  it(`should render a board`, () => {
    const wrapper = shallow(
      <Board
        label='Basic board'
      >
        Children
      </Board>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a board with a right component`, () => {
    const wrapper = shallow(
      <Board
        label='Basic board'
        rightComponent={<div>This is a test right component</div>}
      >
        Children
      </Board>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
