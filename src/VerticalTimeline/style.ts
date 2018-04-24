import React from 'react'
import styled, { StyledComponentClass } from 'styled-components'
import { appColors } from '../Color'

const VerticalTimelineWrapper = styled.div`
  margin-bottom: 40px;
`

const TimelineYearHeading = styled.div`
  text-align: right;
  width: 4rem;
  font-weight: 600;
`

const Timeline = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 5rem;
    height: 100%;
    width: 2px;
    background: ${appColors.intelliGreyBlue2};
  }
`

export {
  VerticalTimelineWrapper,
  TimelineYearHeading,
  Timeline
}
