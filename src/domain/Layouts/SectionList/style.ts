import styled from 'styled-components'
import { Variables } from '../../../common'
import { SectionDescription } from './subcomponents/SectionDescription'

const horizontalMarginDesktop = 24
const verticalPaddingDesktop = 32
const horizontalPaddingMobile = 16
const verticalPaddingMobile = 24

const SectionBorder = styled.div`
  @media only screen and (min-width: ${Variables.Breakpoint.breakpointTablet}px) {
     border-bottom: 1px solid ${Variables.Color.n300};

    :last-child {
      border-bottom: 0;
    }
  }
`

const StyledSection = styled(SectionBorder)`
  @media only screen and (max-width: ${Variables.Breakpoint.breakpointTablet - 1}px) {
    padding: ${verticalPaddingMobile}px ${horizontalPaddingMobile}px;
  }

  @media only screen and (min-width: ${Variables.Breakpoint.breakpointTablet}px) {
    margin-left: ${horizontalMarginDesktop}px;
    margin-right: ${horizontalMarginDesktop}px;
    padding-top: ${verticalPaddingDesktop}px;
    padding-bottom: ${verticalPaddingDesktop}px;
  }
`

const StyledAnnotatedSectionBody = styled.div`
  @media only screen and (min-width: ${Variables.Breakpoint.breakpointTablet}px) {
    margin-left: ${horizontalMarginDesktop}px;
  }

  @media only screen and (max-width: ${Variables.Breakpoint.breakpointTablet - 1}px) {
    background-color: ${Variables.Color.n150};
    border-top: 1px solid ${Variables.Color.n300};
    border-bottom: 1px solid ${Variables.Color.n300};
    padding: ${verticalPaddingMobile}px ${horizontalPaddingMobile}px;
  }
`

const StyledAnnotatedSectionDescription = styled(SectionDescription)`
  @media only screen and (max-width: ${Variables.Breakpoint.breakpointTablet - 1}px) {
    padding: ${verticalPaddingMobile}px ${horizontalPaddingMobile}px;
  }

  @media only screen and (min-width: ${Variables.Breakpoint.breakpointTablet}px) {
    margin-right: ${horizontalMarginDesktop}px;
  }
`

const StyledAnnotatedSection = styled(SectionBorder)`
  @media only screen and (min-width: ${Variables.Breakpoint.breakpointTablet}px) {
    margin-left: ${horizontalMarginDesktop}px;
    margin-right: ${horizontalMarginDesktop}px;
    padding-top: ${verticalPaddingDesktop}px;
    padding-bottom: ${verticalPaddingDesktop}px;
  }
`

const StyledTitledSection = styled(SectionBorder)`
  @media only screen and (min-width: ${Variables.Breakpoint.breakpointTablet}px) {
    margin-left: ${horizontalMarginDesktop}px;
    margin-right: ${horizontalMarginDesktop}px;
    padding-top: ${verticalPaddingDesktop}px;
    padding-bottom: ${verticalPaddingDesktop}px;
  }
`

const StyledTitledSectionHeaderRow = styled.div`
  @media only screen and (max-width: ${Variables.Breakpoint.breakpointTablet - 1}px) {
    padding: ${verticalPaddingMobile}px ${horizontalPaddingMobile}px ${verticalPaddingMobile/2}px;
  }
`

const StyledTitledSectionDescription = styled(SectionDescription)`
  @media only screen and (max-width: ${Variables.Breakpoint.breakpointTablet - 1}px) {
    padding-bottom: ${verticalPaddingMobile/2}px;
  }

  @media only screen and (min-width: ${Variables.Breakpoint.breakpointTablet}px) {
    margin-right: ${horizontalMarginDesktop}px;
  }
`

const StyledTitledSectionBody = styled.div`
  @media only screen and (min-width: ${Variables.Breakpoint.breakpointTablet}px) {
    padding-top: 1.5rem;
  }

  @media only screen and (max-width: ${Variables.Breakpoint.breakpointTablet - 1}px) {
    background-color: ${Variables.Color.n150};
    border-top: 1px solid ${Variables.Color.n300};
    border-bottom: 1px solid ${Variables.Color.n300};
    padding: ${verticalPaddingMobile}px ${horizontalPaddingMobile}px;
  }
`

StyledTitledSectionBody.displayName = 'StyledTitledSectionBody'
StyledAnnotatedSectionBody.displayName = 'StyledAnnotatedSectionBody'

export {
  SectionBorder,
  StyledSection,
  StyledAnnotatedSection,
  StyledAnnotatedSectionDescription,
  StyledAnnotatedSectionBody,
  StyledTitledSection,
  StyledTitledSectionHeaderRow,
  StyledTitledSectionDescription,
  StyledTitledSectionBody
}
