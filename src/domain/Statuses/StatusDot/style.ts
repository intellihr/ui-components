import styled, { css } from 'styled-components'

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
}

const variantOptions: {[K in StatusDotVariants]: Variables.Color} = {
  [StatusDotVariants.Critical]: Variables.Color.r500,
  [StatusDotVariants.Warning]: Variables.Color.o400,
  [StatusDotVariants.Success]: Variables.Color.g400,
  [StatusDotVariants.Neutral]: Variables.Color.n600,
  [StatusDotVariants.Info]: Variables.Color.i400
}

const StyledStatusDot = styled.div`
  width: ${Variables.Spacing.sMedium}px;
  height: ${Variables.Spacing.sMedium}px;
  border-radius: ${Variables.Spacing.sMedium}px;
  ${(props: IStyledStatusDotProps) => styleForMargins(props.margins)};
  ${(props: IStyledStatusDotProps) => props.variant && css`
    background-color: ${variantOptions[props.variant]};
  `};
  ${(props: IStyledStatusDotProps) => props.isInline && css`
    display: inline-block;
  `};
`

export {
  StyledStatusDot,
  StatusDotVariants
}
