import styled from 'styled-components'

import { Variables } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'
import { HighLightAreaColors, IHighlightAreaProps } from './HighlightArea'

interface IColorOption {
  border: Variables.Color,
  background: Variables.Color,
}

type ColorOptions = {
  [K in HighLightAreaColors]: IColorOption
}

const colorOptions: ColorOptions = {
  grey: {
    border: Variables.Color.n400,
    background: Variables.Color.n150
  },
  blue: {
    border: Variables.Color.b200,
    background: Variables.Color.b100
  }
}

const StyledHighlightArea = styled.div<IHighlightAreaProps>`
  border: 1px solid ${(props: IHighlightAreaProps) => colorOptions[props.color].border};
  background-color: ${(props: IHighlightAreaProps) => colorOptions[props.color].background};
  padding: ${Variables.Spacing.sMedium}px;
  border-radius: ${Variables.Style.borderRadius}px;
  ${(props: IHighlightAreaProps) => styleForMargins(props.margins)}
`

export {
  StyledHighlightArea
}
