import React from 'react'
import { map } from 'lodash'
import { Props } from '../../../common/'

import {
  TimelineWrapper,
  TimelineEventWrapper,
  TimelineEventBody,
  TimelineLineStyle,
  EventSpacing
} from './style/wrappers'
import {
  TimelineEventTitle
} from './style/titleMarker'

interface IModularTimelineEvent {
  /** Headline name of the event */
  title: JSX.Element | string,
  /** Content to put inside the event body. When null, no body is provided */
  bodyContent?: JSX.Element | string,
  /** Event Type; major = greater importance and spacing */
  eventType: 'major' | 'minor',
  /** Event Color; changes color of the marker used */
  markerColor?: 'primary' | 'neutral' | 'none',
  /** Changes the line style used for this event */
  timelineLineStyle?: TimelineLineStyle,
  /** Component context for the event wrapper */
  componentContext?: string
}

interface IModularTimelineProps {
  /** Provide an array of events to use in the timeline */
  events: IModularTimelineEvent[],
  /** Component context for the timeline wrapper */
  componentContext?: string
}

class ModularTimeline extends React.PureComponent<IModularTimelineProps> {
  public render (): JSX.Element | null {
    const {
      componentContext,
      events
    } = this.props

    return (
      <TimelineWrapper
        data-component-type={Props.ComponentType.Timeline}
        data-component-context={componentContext}
      >
        {map(events, this.getComponentForEvent)}
      </TimelineWrapper>
    )
  }

  private getComponentForEvent = (event: IModularTimelineEvent, index: number): JSX.Element => {
    const {
      title,
      bodyContent,
      eventType,
      markerColor = 'neutral',
      componentContext
    } = event

    return (
      <TimelineEventWrapper
        key={index}
        data-component-type={Props.ComponentType.TimelineEvent}
        data-component-context={componentContext}
        timelineLineStyle={this.getLineStyleForEvent(event, index)}
        bottomSpacing={this.getBottomSpacingForEvent(event, index)}
      >
        <TimelineEventTitle
          markerType={eventType}
          markerColor={markerColor}
        >
          {title}
        </TimelineEventTitle>
        {bodyContent && (
          <TimelineEventBody>
            {bodyContent}
          </TimelineEventBody>
        )}
      </TimelineEventWrapper>
    )
  }

  private getLineStyleForEvent = (event: IModularTimelineEvent, index: number): TimelineLineStyle => {
    const {
      events
    } = this.props

    if (index + 1 === events.length) {
      return 'none'
    }

    return event.timelineLineStyle || 'solid'
  }

  private getBottomSpacingForEvent = (event: IModularTimelineEvent, index: number): EventSpacing => {
    const {
      events
    } = this.props

    if (index + 1 === events.length)  {
      return 'none'
    }

    const nextEvent = events[index + 1]

    if (nextEvent.eventType === 'major') {
      return 'large'
    }

    return 'normal'
  }
}

export {
  IModularTimelineProps,
  ModularTimeline
}
