import React from 'react'
import {
  VerticalTimelineEventWrapper,
  EventDate,
  EventDot,
  EventContent
} from './style'

interface VerticalTimelineEventProps {
  /** Children components to display on the VerticalTimeline */
  children: JSX.Element | string
  /** Date of the event to display on the side of the VerticalTimeline */
  eventDate?: string
}

class VerticalTimelineEvent extends React.PureComponent<VerticalTimelineEventProps> {
  public render (): JSX.Element | null {
    const {
      children,
      eventDate
    } = this.props

    return (
      <VerticalTimelineEventWrapper className='vertical-timeline-event'>
        <EventDate>
          {eventDate}
        </EventDate>
        <EventDot />
        <EventContent>
          {children}
        </EventContent>
      </VerticalTimelineEventWrapper>
    )
  }
}

export {
  VerticalTimelineEventProps,
  VerticalTimelineEvent
}
