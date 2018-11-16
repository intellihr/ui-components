import styled, { css } from 'styled-components'
import { Props, Variables } from '../../../common'
import { styleForTypographyType } from '../services/textStyles'

interface IBrickWrapperProps {
  /** Color of the brick  */
  color: BrickColor
  /** Specify the type of typography to use */
  typographyType: Props.TypographyType
}

enum BrickColor {
  Alert = 'alert',
  Success = 'success',
  Warning = 'warning',
  Primary = 'primary',
  Neutral = 'neutral',
  Secondary = 'secondary',
  Highlight = 'highlight',
  Dark = 'dark'
}

const colors = {
  [BrickColor.Alert]: {
    textColor: Variables.Color.r600,
    backgroundColor: Variables.Color.r100
  },
  [BrickColor.Success]: {
    textColor: Variables.Color.g600,
    backgroundColor: Variables.Color.g100
  },
  [BrickColor.Warning]: {
    textColor: Variables.Color.o600,
    backgroundColor: Variables.Color.o100
  },
  [BrickColor.Primary]: {
    textColor: Variables.Color.i600,
    backgroundColor: Variables.Color.i100
  },
  [BrickColor.Neutral]: {
    textColor: Variables.Color.n800,
    backgroundColor: Variables.Color.n250
  },
  [BrickColor.Secondary]: {
    textColor: Variables.Color.b600,
    backgroundColor: Variables.Color.b100
  },
  [BrickColor.Highlight]: {
    textColor: Variables.Color.c600,
    backgroundColor: Variables.Color.c100
  },
  [BrickColor.Dark]: {
    textColor: Variables.Color.n200,
    backgroundColor: Variables.Color.n700
  }
}

const BrickWrapper = styled.span<IBrickWrapperProps>`
  border-radius: ${Variables.Style.borderRadius}px;
  padding: 2px 4px;
  word-break: break-word;

  ${(props: IBrickWrapperProps) => styleForTypographyType(props.typographyType)}
  ${(props: IBrickWrapperProps) => {
    const color = colors[props.color]
    return css `
      background: ${color.backgroundColor};
      color: ${color.textColor};
    `
  }}
`

export {
  BrickColor,
  BrickWrapper,
  IBrickWrapperProps
}
