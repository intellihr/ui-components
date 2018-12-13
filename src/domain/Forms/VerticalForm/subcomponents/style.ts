import styled, { css } from 'styled-components'
import { Variables } from '../../../../common'
import { TooltipPopover } from '../../../Popovers/TooltipPopover'

interface IStyledInputLabelProps {
  isRequired: boolean
}

const FieldWrapper = styled.div`
  margin-bottom: 1rem;

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

export {
  FieldWrapper,
  ErrorMessage,
  StyledInputLabel,
  StyledDescription,
  StyledTooltipPopover
}
