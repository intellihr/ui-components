import React from 'react'
import styled, { StyledFunction } from 'styled-components'
import { Anchor, IAnchorProps } from '../../Internals/Anchor'
import { Props, Variables } from '../../../common'
import { styleForTypographyType } from '../../Typographies/services/textStyles'

// tslint:disable-next-line:no-empty-interface
interface ITextLinkProps extends IAnchorProps {
  textType?: Props.TypographyType
}

const styledAnchor: StyledFunction<ITextLinkProps> = styled(({ textType, ...rest }) => <Anchor {...rest} />)

export const TextLink = styledAnchor`
  transition: color .25s ease-out;
  
            font-size: ${Variables.FontSize.fzXSmall}px;
          line-height: ${Variables.LineHeight.lhXSmall}px;
          letter-spacing: .02em;
  
  ${(props: ITextLinkProps) => styleForTypographyType(props.textType)}
  
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

TextLink.displayName = 'TextLink'

export {
  ITextLinkProps
}
