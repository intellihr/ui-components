import { mount } from 'enzyme'
import React from 'react'

import { AvatarBoard } from './AvatarBoard'

describe('<AvatarBoard />', () => {
  it(`should render an empty Avatar Board`, () => {
    const wrapper = mount(
      <AvatarBoard
        emptyStateComponent={<div>empty</div>}
      />
    )

    expect(wrapper.contains('empty')).toBeTruthy()

    expect(wrapper.contains('Le Bron James')).toBeFalsy()
    expect(wrapper.contains('LJ')).toBeFalsy()
    expect(wrapper.contains('Small Forward')).toBeFalsy()
  })

  it(`should render an avatar board with avatar tiles`, () => {
    const wrapper = mount(
      <AvatarBoard
        emptyStateComponent={<div>empty</div>}
      >
        <AvatarBoard.AvatarTile
          primaryText='Le Bron James'
          initials='LJ'
          secondaryText='Small Forward'
        />
      </AvatarBoard>
    )

    expect(wrapper.contains('Le Bron James')).toBeTruthy()
    expect(wrapper.contains('LJ')).toBeTruthy()
    expect(wrapper.contains('Small Forward')).toBeTruthy()

    expect(wrapper.contains('empty')).toBeFalsy()
  })
})
