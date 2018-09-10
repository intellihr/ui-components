import styled from 'styled-components'
import { Variables } from '../../../common'
import { SectionDescription } from './subcomponents/SectionDescription'
import { Row } from '../../Grids/Row'

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

const StyledTitledSectionHeaderRow = styled(Row)`
  @media only screen and (min-width: ${Variables.Breakpoint.breakpointTablet}px) {
    flex-wrap: nowrap;
  }

  @media only screen and (max-width: ${Variables.Breakpoint.breakpointTablet - 1}px) {
    flex-wrap: wrap;
  }
`

const StyledTitledSectionDescription = styled(SectionDescription)`
  @media only screen and (max-width: ${Variables.Breakpoint.breakpointTablet - 1}px) {
    padding: ${verticalPaddingMobile}px ${horizontalPaddingMobile}px;
  }

  @media only screen and (min-width: ${Variables.Breakpoint.breakpointTablet}px) {
    margin-right: ${horizontalMarginDesktop}px;
    display: flex;
    flex-wrap: wrap;
    flex-grow: 2;
    flex-shrink: 1;
    align-items: center;
  }
`

const StyledTitledSectionActions = styled.div`
  flex-shrink: 0;
  flex-grow: 1;

  @media only screen and (max-width: ${Variables.Breakpoint.breakpointTablet - 1}px) {
    padding-left: ${horizontalPaddingMobile}px;
    padding-right: ${horizontalPaddingMobile}px;
  }

  @media only screen and (min-width: ${Variables.Breakpoint.breakpointTablet}px) {
    text-align: right;
  }
`

const StyledTitledSectionBody = styled.div`
  width: 100%;

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

export {
  SectionBorder,
  StyledSection,
  StyledAnnotatedSection,
  StyledAnnotatedSectionDescription,
  StyledAnnotatedSectionBody,
  StyledTitledSection,
  StyledTitledSectionHeaderRow,
  StyledTitledSectionDescription,
  StyledTitledSectionActions,
  StyledTitledSectionBody
}
