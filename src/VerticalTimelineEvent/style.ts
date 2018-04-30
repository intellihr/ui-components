import React from 'react'
import styled, { StyledComponentClass } from 'styled-components'

const VerticalTimelineEventWrapper = styled.div`
  margin: 40px 0;
  position: relative;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
  
  .event-marker {
    position: absolute;
    width: auto;
    height: 0;
    left: 88px;
    top: 12px;
    
    > * {
      top: -50%;
      transform: translate(-50%, -50%);
    }
  }
`

const EventMarkerWrapper = styled.div`
  position: absolute;
  width: auto;
  height: 0;
  left: 88px;
  top: 12px;
    
  > * {
    top: -50%;
    transform: translate(-50%, -50%);
  }
`

const EventDate = styled.span`
  text-align: right;
  color: hsl(210, 13.4%, 47.2%);
  position: absolute;
  width: 4rem;
  font-size: 12px;
  top: 6px;
  line-height: 1;
`

const EventDot = styled.span`
  border: 2px solid rgb(223,229,232);
  position: absolute;
  left: 50%;
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: white;
`

const EventContent = styled.div`
  margin-left: 7rem;
`

export {
  VerticalTimelineEventWrapper,
  EventDate,
  EventDot,
  EventContent,
  EventMarkerWrapper
}
