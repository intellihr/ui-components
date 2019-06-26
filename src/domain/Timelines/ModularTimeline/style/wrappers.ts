import styled, { FlattenSimpleInterpolation, css } from 'styled-components'

import { Variables } from '../../../../common'

type TimelineLineStyle = 'solid' | 'dashed' | 'none'
type TimelineLineColor = 'primary' | 'neutral'
type EventSpacing = 'normal' | 'large' | 'none'

interface ITimelineEventWrapperProps {
  timelineLineStyle: TimelineLineStyle,
  timelineLineColor: TimelineLineColor,
  bottomSpacing: EventSpacing
}

interface ITimelineEventBodyProps {
  type: 'neutral' | 'red' | 'green' | 'cyan'
}

const lineColorMap = {
  primary: Variables.Color.b200,
  neutral: Variables.Color.n250
}

function colorForTimeline (props: ITimelineEventWrapperProps): string {
  return lineColorMap[props.timelineLineColor]
}

function spacingForEventSpacing (props: ITimelineEventWrapperProps): number {
  switch (props.bottomSpacing) {
    case 'normal':
      return 16
    case 'large':
      return 32
    default:
      return 0
  }
}

function timelineEventBodyStyle (props: ITimelineEventBodyProps): FlattenSimpleInterpolation {
  switch (props.type) {
    case 'red':
      return css`
        background-color: ${Variables.Color.r100};
        border: ${Variables.Color.r200} solid 1px;
      `
    case 'green':
      return css`
        background-color: ${Variables.Color.g100};
        border: ${Variables.Color.g300} solid 1px;
      `
    case 'cyan':
      return css`
        background-color: ${Variables.Color.c100};
        border: ${Variables.Color.c300} solid 1px;
      `
    default:
      return css`
        background-color: ${Variables.Color.n150};
        border: ${Variables.Color.n250} solid 1px;
      `
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
    border-left: ${colorForTimeline} ${(props) => props.timelineLineStyle} 2px;
    height: calc(100% + ${spacingForEventSpacing}px);
  }
`

const TimelineEventBody = styled.div<ITimelineEventBodyProps>`
  ${timelineEventBodyStyle}
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
