import styled from 'styled-components'

import { Props, Variables } from '../../../../common'
import { styleForTruncatedText, styleForTypographyType } from '../../../Typographies/services/textStyles'

const StyledModalHeader = styled.div`
  min-height: 80px;
  background-color: ${Variables.Color.n200};
  padding: 24px;

  @media only screen and (max-width: ${Variables.Breakpoint.breakpointTablet}px) {
    padding: 12px;
    min-height: 48px;
    height: 48px;
    position: fixed;
    width: 100%;
  }
`

const StyledModalHeaderHeading = styled.div`
  ${styleForTypographyType(Props.TypographyType.Display)}
  ${styleForTruncatedText()}
  font-weight: ${Variables.FontWeight.fwSemiBold};

  @media only screen and (min-width: ${Variables.Breakpoint.breakpointTablet + 1}px) {
      margin-right: 32px;
  }

  @media only screen and (max-width: ${Variables.Breakpoint.breakpointTablet}px) {
      ${styleForTypographyType(Props.TypographyType.Heading)}
      margin-left: 24px;
  }
`

const StyledModalContent = styled.div`
  padding: 16px 24px;

  @media only screen and (max-width: ${Variables.Breakpoint.breakpointTablet}px) {
    padding-top: 64px;
  }
`

const StyledModalFooter = styled.div`
  height: 80px;
  background-color: ${Variables.Color.n200};
  padding: 20px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: ${Variables.Breakpoint.breakpointTablet}px) {
    background-color: transparent;
  }
`

const StyledModalControls = styled.div`
  display: flex;
`

export {
  StyledModalHeader,
  StyledModalHeaderHeading,
  StyledModalContent,
  StyledModalFooter,
  StyledModalControls
}
