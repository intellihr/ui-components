import React from 'react'
import styled, { css, StyledComponentClass } from 'styled-components'
import { Variables } from '../../../../common'

type TimelineLineStyle = 'solid' | 'dashed' | 'none'
type TimelineLineColor = 'primary' | 'neutral'
type EventSpacing = 'normal' | 'large' | 'none'

interface ITimelineEventWrapperProps {
  timelineLineStyle: TimelineLineStyle,
  timelineLineColor: TimelineLineColor,
  bottomSpacing: EventSpacing
}

const lineColorMap = {
  primary: Variables.Color.b200,
  neutral: Variables.Color.n250
}

function colorForTimeline(props: ITimelineEventWrapperProps): string {
  return lineColorMap[props.timelineLineColor]
}

function spacingForEventSpacing(props: ITimelineEventWrapperProps): number {
  switch (props.bottomSpacing) {
    case 'normal':
      return 16
    case 'large':
      return 32
    default:
      return 0
  }
}

const TimelineWrapper = styled.div`
  width: 100%;
`

const TimelineEventWrapper = styled.div<ITimelineEventWrapperProps>`
  margin-left: 48px;
  margin-bottom: ${spacingForEventSpacing}px;
  position: relative;
  
  ::before {
    content: '';
    position: absolute;
    width: 2px;
    left: -25px;
    top: 12px;
    border-left: ${colorForTimeline} ${props => props.timelineLineStyle} 2px;
    height: calc(100% + ${spacingForEventSpacing}px);
  }
`

const TimelineEventBody = styled.div`
  background-color: ${Variables.Color.n150};
  border: ${Variables.Color.n250} solid 1px;
  border-radius: ${Variables.Style.borderRadius}px;
  margin-top: 8px;
  
  padding: 12px;
  width: 100%;
`

export {
  TimelineWrapper,
  TimelineEventWrapper,
  TimelineEventBody,
  TimelineLineStyle,
  TimelineLineColor,
  EventSpacing
}
