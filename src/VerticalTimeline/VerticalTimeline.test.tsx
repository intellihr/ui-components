import { mount } from 'enzyme'
import React from 'react'

import { VerticalTimeline } from '../VerticalTimeline'
import { VerticalTimelineEvent } from '../VerticalTimelineEvent'

describe('<VerticalTimeline />', () => {
  it(`should render a vertical timeline`, () => {
    const wrapper = mount(
      <VerticalTimeline
        year='2006'
      >
        <VerticalTimelineEvent
          eventDate='21 Apr'
        >
          Event that happened
        </VerticalTimelineEvent>
      </VerticalTimeline>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
