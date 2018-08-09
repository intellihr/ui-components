import React from 'react'
import styled, { StyledComponentClass } from 'styled-components'
import { getColor } from '@Common/legacy'

const VerticalTimelineWrapper = styled.div`
  margin-bottom: 20px;
  padding-bottom: 20px;
`

const TimelineYearHeading = styled.div`
  text-align: right;
  width: 4rem;
  font-size: 14px;
  font-weight: 600;
`

const Timeline = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 12px;
    left: 87px;
    height: calc(100% - 16px);
    width: 2px;
    background: ${getColor('neutral-base')};
  }
`

export {
  VerticalTimelineWrapper,
  TimelineYearHeading,
  Timeline
}
