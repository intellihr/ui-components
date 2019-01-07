import React from 'react'
import { map } from 'lodash'
import { Props } from '../../../common/'

import {
  TimelineWrapper,
  TimelineEventWrapper,
  TimelineEventBody,
  TimelineLineStyle,
  TimelineLineColor,
  EventSpacing
} from './style/wrappers'
import {
  MarkerColor,
  MarkerType,
  TimelineEventTitle
} from './style/titleMarker'

interface IModularTimelineEvent {
  /** Headline name of the event */
  title: JSX.Element | string,
  /** Content to put inside the event body. When null, no body is provided */
  bodyContent?: JSX.Element | Array<JSX.Element|string> | string,
  /** Event Type; major = greater importance and spacing */
  eventType: MarkerType,
  /** Changes color of the marker used */
  markerColor?: MarkerColor,
  /** Changes the line style used for this event */
  timelineLineStyle?: TimelineLineStyle,
  /** Changes color of the timeline line */
  timelineLineColor?: TimelineLineColor,
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
      timelineLineColor = 'neutral',
      componentContext
    } = event

    return (
      <TimelineEventWrapper
        key={index}
        data-component-type={Props.ComponentType.TimelineEvent}
        data-component-context={componentContext}
        timelineLineStyle={this.getLineStyleForEvent(event, index)}
        timelineLineColor={timelineLineColor}
        bottomSpacing={this.getBottomSpacingForEvent(event, index)}
      >
        <TimelineEventTitle
          markerType={eventType}
          markerColor={markerColor}
        >
          {title}
        </TimelineEventTitle>
        {this.getBodyContent(bodyContent)}
      </TimelineEventWrapper>
    )
  }

  private getBodyContent = (bodyContent?: JSX.Element | Array<JSX.Element|string> | string): JSX.Element | JSX.Element[] | null => {{
    if (!bodyContent) {
      return null
    }

    if (Array.isArray(bodyContent)) {
      return map(bodyContent, (content: JSX.Element | string, index) => {
        return (
          <TimelineEventBody
            key={index}
          >
            {content}
          </TimelineEventBody>
        )
      })
    }

    return (
      <TimelineEventBody>
        {bodyContent}
      </TimelineEventBody>
    )
  }}

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
