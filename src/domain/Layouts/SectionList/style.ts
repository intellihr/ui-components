import React from 'react'
import styled, { css } from 'styled-components'
import { Variables } from '../../../common'
import { AnnotatedSectionDescription } from './subcomponents/AnnotatedSectionDescription'

const {
  breakpointTablet
} = Variables.Breakpoint

const sharedStyle = css`
  @media only screen and (max-width: ${breakpointTablet}px) {
    padding: 24px 16px;
  }

  @media only screen and (min-width: ${breakpointTablet}px) {
    margin-left: 24px;
    margin-right: 24px;
    padding-top: 32px;
    padding-bottom: 32px;
  }
`

const SectionBorder = styled.div`
  @media only screen and (min-width: ${breakpointTablet}px) {
     border-bottom: 1px solid ${Variables.Color.n300};
    
    :last-child {
      border-bottom: 0;
    }
  }
`

const StyledAnnotatedSectionBody = styled.div`
  @media only screen and (max-width: ${breakpointTablet}px) {
    background-color: ${Variables.Color.n150};
 
    border-top: 1px solid ${Variables.Color.n300};
    border-bottom: 1px solid ${Variables.Color.n300};
  }

  ${sharedStyle}
`

const StyledSection = styled(SectionBorder)` 
  ${sharedStyle}
`
const StyledAnnotatedSectionDescription = styled(AnnotatedSectionDescription)`${sharedStyle}`

export {
  SectionBorder,
  StyledSection,
  StyledAnnotatedSectionDescription,
  StyledAnnotatedSectionBody
}
