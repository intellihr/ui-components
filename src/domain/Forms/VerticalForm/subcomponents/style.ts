import styled, { css } from 'styled-components'

import { Utils, Variables } from '../../../../common'

interface IStyledInputLabelProps {
  isRequired: boolean
}

interface IFieldWrapperProps {
  showBottomMargin: boolean
}

const FieldWrapper = styled.div`
  ${(props: IFieldWrapperProps) => props.showBottomMargin && css`
      margin-bottom: ${Variables.Spacing.sLarge}px;
    `
  }

  input, textarea, .Select .Select-control {
    margin: 0;
  }
`

const ErrorMessage = styled.div`
  font-size: ${Variables.FontSize.fzSmall}px;
  color: ${Variables.Color.r400};
`

const StyledTooltipPopover = styled.span`
  margin-left: 4px;
`

const StyledInputLabel = styled.label`
  color: ${Variables.Color.n700};
  font-size: ${Variables.FontSize.fzSmall}px;
  line-height: ${Variables.LineHeight.lhSmall}px;
  margin-bottom: 4px;
  display: block;

  ${Utils.mediaQueryBetweenSizes({ maxPx: Variables.Breakpoint.breakpointTablet })} {
    width: 100%;
  }

  ${(props: IStyledInputLabelProps) => props.isRequired && css`
      &::after {
        color: ${Variables.Color.n400};
        content: ' - required';
        font-size: ${Variables.FontSize.fzSmall}px;
        font-style: italic;
      }
    `
  }}
`
const StyledDescription = styled.div`
  color: ${Variables.Color.n600};
  font-size: ${Variables.FontSize.fzSmall}px;
  line-height: ${Variables.LineHeight.lhSmall}px;
  margin-bottom: 8px;
`

const StyledLeftAlignControls = styled.div`
  display: flex;
  justify-content: flex-start;
`

const StyledRightAlignControls = styled.div`
  display: flex;
  justify-content: flex-end;
`

const StyledLabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  margin-bottom: ${Variables.Spacing.s3XSmall}px;
`

export {
  FieldWrapper,
  ErrorMessage,
  StyledInputLabel,
  StyledDescription,
  StyledTooltipPopover,
  StyledLeftAlignControls,
  StyledRightAlignControls,
  StyledLabelWrapper
}
