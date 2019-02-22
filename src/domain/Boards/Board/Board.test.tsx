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
})
