import React from 'react'
import styled, { StyledComponentClass } from 'styled-components'

const VerticalTimelineEventWrapper = styled.div`
  margin: 40px 0;
  position: relative;
`

const EventDate = styled.span`
  text-align: right;
  color: hsl(210, 13.4%, 47.2%);
  position: absolute;
  width: 4rem;
  font-size: 12px;
  top: 6px;
`

const EventDot = styled.span`
  background-color: white;
  border: 2px solid rgb(223, 229, 232);
  border-radius: 50%;
  padding: 5px;
  position: absolute;
  left: 74px;
  top: 7px;
`

const EventContent = styled.div`
  margin-left: 7rem;
`

export {
  VerticalTimelineEventWrapper,
  EventDate,
  EventDot,
  EventContent
}
