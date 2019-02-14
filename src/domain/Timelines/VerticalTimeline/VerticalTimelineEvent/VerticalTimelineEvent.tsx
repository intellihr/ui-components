import React from 'react'

import {
  EventContent,
  EventDate,
  EventDot,
  EventMarkerWrapper,
  VerticalTimelineEventWrapper
} from './style'

interface IVerticalTimelineEventProps {
  /** Children components to display on the VerticalTimeline */
  children: JSX.Element | string
  /** Date of the event to display on the side of the VerticalTimeline */
  eventDate?: string
  /** Component to display in place of the default marker */
  markerComponent?: JSX.Element
}

class VerticalTimelineEvent extends React.PureComponent<IVerticalTimelineEventProps> {
  public render (): JSX.Element {
    const {
      children,
      eventDate,
      markerComponent
    } = this.props

    return (
      <VerticalTimelineEventWrapper className='vertical-timeline-event'>
        <EventDate>
          {eventDate}
        </EventDate>
        <EventMarkerWrapper>
          {markerComponent || <EventDot />}
        </EventMarkerWrapper>
        <EventContent>
          {children}
        </EventContent>
      </VerticalTimelineEventWrapper>
    )
  }
}

export {
  IVerticalTimelineEventProps,
  VerticalTimelineEvent
}
