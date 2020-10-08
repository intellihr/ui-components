import React from 'react'
import styled, {css} from 'styled-components'

import { Variables } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'

enum ProgressStepVariant {
  Current = 'current',
  Past = 'past',
  Upcoming = 'upcoming'
}

interface IStyledProgressStepDotProps {
  variant: ProgressStepVariant
  isHoverable: boolean
}

interface IStyledProgressStepProps {
  isHoverable: boolean
}

interface IVariantOption {
  background: Variables.Color
  hoverBackground: Variables.Color
}

const variantOptions: {[K in ProgressStepVariant]: IVariantOption} = {
  [ProgressStepVariant.Current]: {
    background: Variables.Color.i400,
    hoverBackground: Variables.Color.i500
  },
  [ProgressStepVariant.Past]: {
    background: Variables.Color.n700,
    hoverBackground: Variables.Color.n800
  },
  [ProgressStepVariant.Upcoming]: {
    background: Variables.Color.n500,
    hoverBackground: Variables.Color.n600
  }
}

const StyledProgressStepDot = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${Variables.Spacing.sXLarge}px;
  width: ${Variables.Spacing.sXLarge}px;
  height: ${Variables.Spacing.sXLarge}px;
  color: ${Variables.Color.n100};

  ${(props: IStyledProgressStepDotProps) => css`
    background-color: ${variantOptions[props.variant].background};
  `}

  ${(props: IStyledProgressStepDotProps) => props.isHoverable && css`
    cursor: pointer;
    ${StyledProgressStep}:hover & {
      background-color: ${variantOptions[props.variant].hoverBackground};
    }
  `}

  ${({ margins }) => styleForMargins(margins)}
`

const StyledProgressStep = styled.div`
  flex: 0 0 auto;
  width: auto;

  ${(props: IStyledProgressStepProps) => props.isHoverable && css`
    cursor: pointer;
  `}
`

export {
  StyledProgressStep,
  StyledProgressStepDot,
  ProgressStepVariant
}
