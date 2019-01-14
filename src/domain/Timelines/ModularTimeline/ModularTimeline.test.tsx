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
            body: {
              content: 'Some content goes here'
            },
            componentContext: 'example context for event'
          },
          {
            title: 'Title 3',
            eventType: 'major'
          },
          {
            title: 'Title 4',
            eventType: 'minor',
            body: {
              content: 'Some content goes here'
            }
          },
          {
            title: 'Title 5',
            eventType: 'minor',
            body: [
              {
                content: 'Some content goes here'
              },
              {
                content: 'More content under the same event',
                type: 'alert'
              },
              {
                content: 'Three distinct event body wrappers'
              }
            ]
          }
        ]}
      />
    )

    expect(wrapper).toMatchSnapshot()
    expect(
      wrapper.find({ 'data-component-type': Props.ComponentType.TimelineEvent }).length
    ).toEqual(5)
  })
})
