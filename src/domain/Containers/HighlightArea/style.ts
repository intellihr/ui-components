import styled from 'styled-components'

import { Variables } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'
import { Color, IHighlightAreaProps } from './HighlightArea'

interface IColorOption {
  border: Variables.Color,
  background: Variables.Color,
}

type ColorOptions = {
  [K in Color]: IColorOption
}

const grey: IColorOption = {
  border: Variables.Color.n400,
  background: Variables.Color.n200
}

const ColorOptions: ColorOptions = {
  grey,
  gray: grey
}

const StyledHighlightArea = styled.div<IHighlightAreaProps>`
  border: 1px solid ${ (props: IHighlightAreaProps) => ColorOptions[props.color].border};
  background-color: ${(props: IHighlightAreaProps) => ColorOptions[props.color].background};
  padding: ${Variables.Spacing.sMedium}px;
  border-radius: 4px;
  ${(props: IHighlightAreaProps) => styleForMargins(props.margins)}
`

export {
  StyledHighlightArea
}
