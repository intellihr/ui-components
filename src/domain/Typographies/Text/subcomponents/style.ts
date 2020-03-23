import styled, { css } from 'styled-components'

import { Variables } from '../../../../common'
import { ILinkProps, LinkVariant } from './Link'

interface IStyledAProps extends Pick<ILinkProps, 'underlineOnHover' | 'variant'> {}

const StyledA = styled.a`
  &:hover {
    ${({underlineOnHover}: IStyledAProps) => underlineOnHover && css`
      text-decoration: underline;
    `}
  }

  ${({variant}: IStyledAProps) => {
  switch (variant) {
    case LinkVariant.Unstyled:
      return css`
          &,
          &:link,
          &:visited,
          &:hover,
          &:active {
            color: inherit
          }
        `
    default:
      return css`
          transition: color .25s ease-out;
          cursor: pointer;

          &,
          &:link,
          &:visited {
            color: ${Variables.Color.i400};
          }

          &:hover {
            color: ${Variables.Color.i500};
          }

          &:active {
            color: ${Variables.Color.i600};
          }
        `
      }
    }
  }
`

export {
  StyledA
}
