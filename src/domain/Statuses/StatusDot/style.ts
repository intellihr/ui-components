import hexRgb from 'hex-rgb'
import styled, { css, keyframes } from 'styled-components'

import { Props, Variables } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'

enum StatusDotVariants {
  Neutral = 'grey',
  Info = 'indigo',
  Critical = 'red',
  Warning = 'yellow',
  Success = 'green'
}

interface IStyledStatusDotProps {
  variant?: StatusDotVariants
  margins?: Props.IMargins
  isInline: boolean
  isPulsing: boolean
}

const variantOptions: {[K in StatusDotVariants]: Variables.Color} = {
  [StatusDotVariants.Critical]: Variables.Color.r500,
  [StatusDotVariants.Warning]: Variables.Color.o400,
  [StatusDotVariants.Success]: Variables.Color.g400,
  [StatusDotVariants.Neutral]: Variables.Color.n600,
  [StatusDotVariants.Info]: Variables.Color.i400
}

const StyledStatusDot = styled.div`
  width: 16px;
  min-width: 16px;
  height: 16px;
  border-radius: 16px;
  ${(props: IStyledStatusDotProps) => styleForMargins(props.margins)};
  ${(props: IStyledStatusDotProps) => props.variant && css`
    background-color: ${variantOptions[props.variant]};
  `};
  ${(props: IStyledStatusDotProps) => props.isInline && css`
    display: inline-block;
  `};

  ${(props: IStyledStatusDotProps) => {
    if (!props.isPulsing || !props.variant) {
      return css``
    }

  const rgbaVariantColor = hexRgb(variantOptions[props.variant])
  const rgbString = `${rgbaVariantColor.red}, ${rgbaVariantColor.green}, ${rgbaVariantColor.blue}`

  return css`
     box-shadow: 0 0 0 0 rgba(${rgbString}, 1);
     transform: scale(1);
     animation: ${pulseAnimation(rgbString)} 1.5s infinite;
    `
  }};
}
`

const pulseAnimation = (rgbString: string) => keyframes`
  0% {
     transform: scale(0.95);
     box-shadow: 0 0 0 0 rgba(${rgbString}, 0.5);
   }

   70% {
     transform: scale(1);
     box-shadow: 0 0 0 10px rgba(${rgbString}, 0);
   }

   100% {
     transform: scale(0.95);
     box-shadow: 0 0 0 0 rgba(${rgbString}, 0);
  }
`

export {
  StyledStatusDot,
  StatusDotVariants
}
