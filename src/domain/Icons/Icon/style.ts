import styled, { css } from 'styled-components'

import { Props, Variables } from '../../../common'
import { styleForShowForSizes } from '../../Layouts/ShowForSizes'
import { styleForMargins } from '../../Spacers/services/margins'

type size = 'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'

interface IStyledIconProps {
  color?: string
  duotoneColors?: {
    primaryColor: string,
    secondaryColor?: string
  }
  customSize?: number
  size?: size
  margins?: Props.IMargins
  width?: number
  showForSizes?: Props.IShowForSizes
}

interface IBadgeWrapper {
  size?: size
  showForSizes?: Props.IShowForSizes
}

const BadgeWrapper = styled.span<IBadgeWrapper>`
  position: absolute;

  ${(props) => {
    switch (props.size) {
      case 'large':
        return css`
          margin-top: -12px;
          margin-left: -10px;
        `
      case 'xlarge':
        return css`
          margin-top: -9px;
          margin-left: -15px;
        `
      case 'xxlarge':
        return css`
          margin-top: -9px;
          margin-left: -22px;
        `
    }
  }}

  ${(props) => styleForShowForSizes(props.showForSizes)}
`

const StyledIcon = styled.i<IStyledIconProps>`
  display: inline-block;
  font-stretch: normal;
  --fa-primary-color: ${Variables.Color.i500};
  --fa-secondary-color: ${Variables.Color.i500};

  ${(props) => props.width && css`
    width: ${props.width}px;
  `}

  ${(props) => styleForShowForSizes(props.showForSizes)}
  ${(props) => styleForMargins(props.margins)}

  ${(props) => props.color && css`
    color: ${props.color};
  `}

  ${(props) => props.duotoneColors && props.duotoneColors.primaryColor && css`
    --fa-primary-color: ${props.duotoneColors.primaryColor};
  `}

  ${(props) => props.duotoneColors && props.duotoneColors.secondaryColor && css`
    --fa-secondary-color: ${props.duotoneColors.secondaryColor};
  `}

  &.icon {
    text-align: center;

  ${(props) => {
    if (props.customSize) {
      return css`
        font-size: ${props.customSize}rem;
      `
    }

    switch (props.size) {
      case 'xxsmall':
        return css`
          font-size: .55rem; // 8.8px
        `
      case 'xsmall':
        return css`
          font-size: .75rem; // 12px
        `
      case 'small':
        return css`
          font-size: .85rem; // 14px
        `
      case 'medium':
        return css`
          font-size: 1rem; // 16px
        `
      case 'large':
        return css`
          font-size: 1.3125rem; // 21px
        `
      case 'xlarge':
        return css`
          font-size: 2rem; // 32px
        `
      case 'xxlarge':
        return css`
          font-size: 3rem; // 48px
        `
    }
  }}
  }
`

export {
  BadgeWrapper,
  StyledIcon,
  IStyledIconProps
}
