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

const StyledTextLink = styledAnchor`
  transition: color .25s ease-out;
  
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

class TextLink<P> extends React.PureComponent<P & ITextLinkProps> {
  public render(): JSX.Element {
    return (
      <StyledTextLink
        {...this.props}
      />
    )
  }
}

export {
  TextLink,
  ITextLinkProps
}
