import styled, { css } from 'styled-components'

import { Props, Variables } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'
import { PillColors, PillSizes } from './Pill'

interface IStyledPillProps {
  margins?: Props.IMargins
  size: PillSizes
  color: PillColors
}

interface IPillVariation {
  backgroundColor: Variables.Color,
  textColor: Variables.Color,
  borderColor: Variables.Color
}

type PillStyles = {
  [K in any]: IPillVariation
}

const pillStyles: PillStyles = {
  primary: {
    backgroundColor: Variables.Color.i100,
    textColor: Variables.Color.i600,
    borderColor: Variables.Color.i400
  },
  secondary: {
    backgroundColor: Variables.Color.b100,
    textColor: Variables.Color.b600,
    borderColor: Variables.Color.b400
  },
  success: {
    backgroundColor: Variables.Color.g100,
    textColor: Variables.Color.g600,
    borderColor: Variables.Color.g400
  },
  warning: {
    backgroundColor: Variables.Color.o100,
    textColor: Variables.Color.o600,
    borderColor: Variables.Color.o400
  },
  alert: {
    backgroundColor: Variables.Color.r100,
    textColor: Variables.Color.r600,
    borderColor: Variables.Color.r300
  },
  neutral: {
    backgroundColor: Variables.Color.n250,
    textColor: Variables.Color.n600,
    borderColor: Variables.Color.n400
  },
  highlight: {
    backgroundColor: Variables.Color.c100,
    textColor: Variables.Color.c600,
    borderColor: Variables.Color.c400
  },
  dark: {
    backgroundColor: Variables.Color.n700,
    textColor: Variables.Color.n200,
    borderColor: Variables.Color.n100
  }
}

const StyledPill = styled.span`
  margin: 0;
  ${(props: IStyledPillProps) => styleForMargins(props.margins)};
  background-color: ${(props: IStyledPillProps) => pillStyles[props.color].backgroundColor};
  border: 1px solid ${(props: IStyledPillProps) => pillStyles[props.color].borderColor};
  color: ${(props: IStyledPillProps) => pillStyles[props.color].textColor};
  border-radius: 32px;
  display: inline-block;
  font-size: ${Variables.FontSize.fzXSmall}px;
  font-weight: ${Variables.FontWeight.fwSemiBold};
  line-height: 14px;
  padding: 4px 8px;
  white-space: nowrap;
  
  ${(props: IStyledPillProps) => props.size === 'medium' && css `
    font-size: ${Variables.FontSize.fzSmall}px;
    line-height: 16px;
  `}
 
  ${(props: IStyledPillProps) => props.size === 'large' && css `
    font-size: ${Variables.FontSize.fzBody}px;
    line-height: 18px;
    padding: 4px 12px;
  `}
`

export {
  StyledPill
}
