import styled from 'styled-components'

import { Props, Variables } from '../../../../common'
import { styleForTruncatedText, styleForTypographyType } from '../../../Typographies/services/textStyles'

const StyledModalHeader = styled.div`
  display: flex;
  align-items: center;
  min-height: 64px;
  background-color: ${Variables.Color.n200};
  padding: 12px 50px 12px 20px;

  @media only screen and (max-width: ${Variables.Breakpoint.breakpointTablet}px) {
    padding: 12px;
    min-height: 48px;
    height: 48px;
    position: fixed;
    width: 100%;
  }
`

const StyledModalHeaderHeading = styled.div`
  display: inline;
  flex: 1 1 0%;
  ${styleForTypographyType(Props.TypographyType.Heading)}
  ${styleForTruncatedText()}
  font-weight: ${Variables.FontWeight.fwSemiBold};

  @media only screen and (min-width: ${Variables.Breakpoint.breakpointTablet + 1}px) {
      margin-right: 32px;
  }

  @media only screen and (max-width: ${Variables.Breakpoint.breakpointTablet}px) {
      ${styleForTypographyType(Props.TypographyType.Heading)}
      margin-left: 38px;
  }
`

const StyledModalContent = styled.div`
  padding: 16px 20px;

  @media only screen and (max-width: ${Variables.Breakpoint.breakpointTablet}px) {
    padding-top: 64px;
  }
`
const StyledModalFlexContent = styled.div`
  display: flex;
`

const StyledModalLeftColumn = styled.div`
  padding: 16px 20px;
  flex: 1 1 0%;

  @media only screen and (max-width: ${Variables.Breakpoint.breakpointTablet}px) {
     padding: 64px 20px 16px 20px;
  }
`

const StyledModalRightColumn = styled.div`
  background: ${Variables.Color.n150};
  padding: 16px 20px;

  @media only screen and (max-width: ${Variables.Breakpoint.breakpointTablet}px) {
    display: none;
  }
`

const StyledModalFooter = styled.div`
  height: 64px;
  background-color: ${Variables.Color.n200};
  padding: 12px 20px;
  display: flex;
  justify-content: space-between;

  &:not(:root:root), .selector {
    @media only screen and (max-width: ${Variables.Breakpoint.breakpointTablet}px) {
      margin-bottom: 50px;
    }
  }

  @media only screen and (max-width: ${Variables.Breakpoint.breakpointTablet}px) {
    background-color: transparent;
  }
`

const StyledModalControls = styled.div`
  display: flex;
`

const StyledHeaderRightComponent = styled.div`
  display: inline-flex;
  margin-left: 12px;

  @media only screen and (max-width: ${Variables.Breakpoint.breakpointTablet}px) {
    display: none;
  }
`

const StyledActionButton = styled.button`
  outline: none;
  color: ${Variables.Color.n600};
  width: 28px;
  height: 28px;
  border-radius: 50%;
  cursor: pointer;
  transition: .1s ease-in;
  z-index: 1;
  margin-left: 12px;

  &:hover {
    color: ${Variables.Color.n700};
    transition: .15s ease-out;
  }
`

export {
  StyledModalHeader,
  StyledModalHeaderHeading,
  StyledModalContent,
  StyledModalFooter,
  StyledModalControls,
  StyledHeaderRightComponent,
  StyledActionButton,
  StyledModalFlexContent,
  StyledModalLeftColumn,
  StyledModalRightColumn
}
