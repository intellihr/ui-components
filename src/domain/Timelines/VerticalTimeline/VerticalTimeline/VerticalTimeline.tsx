import React from 'react'

import { VerticalTimelineEvent } from '../VerticalTimelineEvent'
import {
  Timeline,
  TimelineYearHeading,
  VerticalTimelineWrapper
} from './style'

interface IVerticalTimelineProps {
  /** Children VerticalTimelineEvent components to display on the timeline */
  children: JSX.Element
  /** Year of the dates in the VerticalTimelineEvent children */
  year?: string
}

class VerticalTimeline extends React.PureComponent<IVerticalTimelineProps> {
  public static Event = VerticalTimelineEvent

  public render (): JSX.Element | null {
    const {
      children,
      year
    } = this.props

    return (
      <VerticalTimelineWrapper className='vertical-timeline'>
        <TimelineYearHeading>
          {year}
        </TimelineYearHeading>
        <Timeline>
          {children}
        </Timeline>
      </VerticalTimelineWrapper>
    )
  }
}

export {
  IVerticalTimelineProps,
  VerticalTimeline
}
