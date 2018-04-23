import { mount } from 'enzyme'
import React from 'react'

import { VerticalTimelineEvent } from '../VerticalTimelineEvent'

describe('<VerticalTimelineEvent />', () => {
  it(`should render a vertical timeline event`, () => {
    const wrapper = mount(
      <VerticalTimelineEvent
        eventDate='21 Apr'
      >
        Hey this is the child content of the event!
      </VerticalTimelineEvent>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
