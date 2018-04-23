import React from 'react'
import styled, { StyledComponentClass } from 'styled-components'

const VerticalTimelineWrapper = styled.div`
  margin-bottom: 40px;
 
  .vertical-timeline-event:first-child {
    margin-top: 0
  }

  .vertical-timeline-event:last-child {
    margin-bottom: 0
  }
`

const TimelineYearHeading = styled.div`
  text-align: right;
  width: 4rem;
  font-weight: 600;
`

const Timeline = styled.div`
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 5rem;
    height: 100%;
    width: 2px;
    background: rgb(223, 229, 232);
  }
`

export {
  VerticalTimelineWrapper,
  TimelineYearHeading,
  Timeline
}
