import React from 'react'
import styled, { css } from 'styled-components'
import { Variables } from '../../../common'
import { AnnotatedSectionDescription } from './subcomponents/AnnotatedSectionDescription'

const sharedDesktopStyle = css`
  @media only screen and (min-width: ${Variables.Breakpoint.breakpointTablet}px) {
    margin-left: 24px;
    margin-right: 24px;
    padding-top: 32px;
    padding-bottom: 32px;
  }
`

const sharedMobileStyle = css`
  @media only screen and (max-width: ${Variables.Breakpoint.breakpointTablet - 1}px) {
    padding: 24px 16px;
  }
`

const SectionBorder = styled.div`
  @media only screen and (min-width: ${Variables.Breakpoint.breakpointTablet}px) {
     border-bottom: 1px solid ${Variables.Color.n300};
    
    :last-child {
      border-bottom: 0;
    }
  }
`

const StyledAnnotatedSectionBody = styled.div`
  ${sharedMobileStyle}

  @media only screen and (min-width: ${Variables.Breakpoint.breakpointTablet}px) {
    margin-left: 24px;
  }
  
  @media only screen and (max-width: ${Variables.Breakpoint.breakpointTablet - 1}px) {
    background-color: ${Variables.Color.n150};
 
    border-top: 1px solid ${Variables.Color.n300};
    border-bottom: 1px solid ${Variables.Color.n300};
  }
`

const StyledAnnotatedSectionDescription = styled(AnnotatedSectionDescription)`
  ${sharedMobileStyle}

  @media only screen and (min-width: ${Variables.Breakpoint.breakpointTablet}px) {
    margin-right: 24px;
  }
`

const StyledSection = styled(SectionBorder)` 
  ${sharedMobileStyle}
  ${sharedDesktopStyle}
`

const StyledAnnotatedSection = styled(SectionBorder)` 
  ${sharedDesktopStyle}
`

export {
  SectionBorder,
  StyledSection,
  StyledAnnotatedSection,
  StyledAnnotatedSectionDescription,
  StyledAnnotatedSectionBody
}
