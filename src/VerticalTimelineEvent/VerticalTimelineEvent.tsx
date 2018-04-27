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
  /** Component to display in place of the default marker */
  markerComponent?: React.Component<any>
}

class VerticalTimelineEvent extends React.PureComponent<VerticalTimelineEventProps> {
  get eventMarker () {
    const {
      markerComponent
    } = this.props

    if (markerComponent) {
      return <div className='event-marker'>
        {markerComponent}
      </div>
    }

    return <div className='event-marker'>
      <EventDot />
    </div>
  }

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
        {this.eventMarker}
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
