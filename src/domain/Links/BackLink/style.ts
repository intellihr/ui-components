import styled from 'styled-components'

import { Props, Variables } from '../../../common'
import { Anchor } from '../../Internals/Anchor'
import { styleForMargins } from '../../Spacers/services/margins'
import { styleForTypographyType } from '../../Typographies/services/textStyles'

interface IStyledBackLinkProps {
  margins?: Props.IMargins
}

const StyledBackLink = styled(Anchor)`
  transition: color .25s ease-out;
  cursor: pointer;
  display: inline;

  ${(props: IStyledBackLinkProps) => styleForMargins(props.margins)}

  ${() => styleForTypographyType(Props.TypographyType.Small)}

  &,
  &:link,
  &:visited {
    color: ${Variables.Color.n600};
  }

  &:hover {
    color: ${Variables.Color.i400};
  }

  &:active {
    color: ${Variables.Color.i400};
  }
`

export {
  StyledBackLink
}
