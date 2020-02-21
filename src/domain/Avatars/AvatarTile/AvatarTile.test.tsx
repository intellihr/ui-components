import { mount } from 'enzyme'
import React from 'react'

import { Brick } from '../../Typographies'
import { AvatarTile } from './AvatarTile'

describe('<AvatarTile />', () => {
  it(`should render a basic avatar tile`, () => {
    const wrapper = mount(
      <AvatarTile
        displayName='Le Bron James'
        initials='LJ'
        jobName='Small Forward'
      />
    )

    expect(wrapper.contains('Le Bron James')).toBeTruthy()
    expect(wrapper.contains('LJ')).toBeTruthy()
    expect(wrapper.contains('Small Forward')).toBeTruthy()
  })

  it(`should render an avatar tile with a brick displaying the number of additional jobs`, () => {
    const wrapper = mount(
      <AvatarTile
        displayName='Le Bron James'
        initials='LJ'
        jobName='Small Forward'
        numberOfJobs={3}
      />
    )

    expect(wrapper.contains('Le Bron James')).toBeTruthy()
    expect(wrapper.contains('LJ')).toBeTruthy()
    expect(wrapper.contains('Small Forward')).toBeTruthy()

    const brick = wrapper.find(Brick)
    expect(brick.exists()).toBeTruthy()
    expect(brick.contains('+ ')).toBeTruthy()
    expect(brick.contains('2')).toBeTruthy()
  })

  it(`should render an avatar tile with a status`, () => {
    const wrapper = mount(
      <AvatarTile
        displayName='Le Bron James'
        initials='LJ'
        jobName='Small Forward'
        statusColor='warning'
        statusText='On Extended Leave'
      />
    )

    expect(wrapper.contains('Le Bron James')).toBeTruthy()
    expect(wrapper.contains('LJ')).toBeTruthy()
    expect(wrapper.contains('Small Forward')).toBeTruthy()

    expect(wrapper.contains('On Extended Leave')).toBeTruthy()
  })

  it(`should render an avatar tile with children`, () => {
    const wrapper = mount(
      <AvatarTile
        displayName='Le Bron James'
        initials='LJ'
        jobName='Small Forward'
      >
        <div>I should be getting rendered</div>
      </AvatarTile>
    )

    expect(wrapper.contains('Le Bron James')).toBeTruthy()
    expect(wrapper.contains('LJ')).toBeTruthy()
    expect(wrapper.contains('Small Forward')).toBeTruthy()

    expect(wrapper.contains('I should be getting rendered')).toBeTruthy()
  })
})
