import { mount } from 'enzyme'
import React from 'react'

import { AvatarTileSkeleton } from './subcomponents/'
import { AvatarBoard } from './AvatarBoard'

describe('<AvatarBoard />', () => {
  it(`should render an empty Avatar Board`, () => {
    const wrapper = mount(
      <AvatarBoard
        emptyStateComponent={<div>empty</div>}
      />
    )

    expect(wrapper.contains('empty')).toBeTruthy()

    expect(wrapper.find(AvatarTileSkeleton).length).toBe(0)
  })

  it(`should render an Avatar Board in the loading state`, () => {
    const wrapper = mount(
      <AvatarBoard
        emptyStateComponent={<div>empty</div>}
        loading
      />
    )

    expect(wrapper.find(AvatarTileSkeleton).length).toBe(15)

    expect(wrapper.contains('empty')).toBeFalsy()
  })

  it(`should render an Avatar Board in the loading state with a defined number of tile skeletons to render`, () => {
    const wrapper = mount(
      <AvatarBoard
        emptyStateComponent={<div>empty</div>}
        loading
        skeletonTilesNum={6}
      />
    )

    expect(wrapper.find(AvatarTileSkeleton).length).toBe(6)

    expect(wrapper.contains('empty')).toBeFalsy()
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

    expect(wrapper.find(AvatarTileSkeleton).length).toBe(0)
    expect(wrapper.contains('empty')).toBeFalsy()
  })
})
