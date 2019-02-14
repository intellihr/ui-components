import { map } from 'lodash'
import React from 'react'

import { Props } from '../../../common/'
import {
  MarkerColor,
  MarkerType,
  TimelineEventTitle
} from './style/titleMarker'
import {
  EventSpacing,
  TimelineEventBody,
  TimelineEventWrapper,
  TimelineLineColor,
  TimelineLineStyle,
  TimelineWrapper
} from './style/wrappers'

interface IModularTimelineBodyItem {
  content: JSX.Element | string
  type?: 'neutral' | 'red' | 'green' | 'cyan'
}

interface IModularTimelineEvent {
  /** Headline name of the event */
  title: JSX.Element | string,
  /** Content to put inside the event body. When null, no body is provided */
  body?: IModularTimelineBodyItem | IModularTimelineBodyItem[],
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
      body,
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
        {this.getBodyContent(body)}
      </TimelineEventWrapper>
    )
  }

  private getBodyContent = (body?: IModularTimelineBodyItem | IModularTimelineBodyItem[]): JSX.Element | JSX.Element[] | null => {{
    if (!body) {
      return null
    }

    if (Array.isArray(body)) {
      return body.map((item: IModularTimelineBodyItem, index) => {
        return (
          <TimelineEventBody
            key={index}
            type={item.type || 'neutral'}
          >
            {item.content}
          </TimelineEventBody>
        )
      })
    }

    return (
      <TimelineEventBody
        type={body.type || 'neutral'}
      >
        {body.content}
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
