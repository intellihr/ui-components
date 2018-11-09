import React from 'react'
import { shallow } from 'enzyme'

import { ModularTimeline } from './ModularTimeline'
import { Props } from '../../../common'

describe('<ModularTimeline />', () => {
  it(`should render a modular timeline`, () => {
    const wrapper = shallow(
      <ModularTimeline
        events={[
          {
            title: 'Title 1',
            eventType: 'major',
            markerColor: 'transparent',
            timelineLineStyle: 'none'
          },
          {
            title: 'Title 2',
            eventType: 'minor',
            markerColor: 'primary',
            timelineLineStyle: 'dashed',
            timelineLineColor: 'primary',
            bodyContent: 'Some content goes here',
            componentContext: 'example context for event'
          },
          {
            title: 'Title 3',
            eventType: 'major'
          },
          {
            title: 'Title 4',
            eventType: 'minor',
            bodyContent: 'Some content goes here'
          }
        ]}
      />
    )

    expect(wrapper).toMatchSnapshot()
    expect(
      wrapper.find({ 'data-component-type': Props.ComponentType.TimelineEvent }).length
    ).toEqual(4)
  })
})
