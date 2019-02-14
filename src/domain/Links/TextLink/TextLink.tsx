import React from 'react'
import styled, { StyledFunction, css } from 'styled-components'

import { Props, Variables } from '../../../common'
import { Anchor, IAnchorProps } from '../../Internals/Anchor'
import { styleForTypographyType } from '../../Typographies/services/textStyles'

// tslint:disable-next-line:no-empty-interface
interface ITextLinkProps extends IAnchorProps {
  textType?: Props.TypographyType
  isInline?: boolean
  underlineOnHover?: boolean
}

const styledAnchor: StyledFunction<ITextLinkProps> = styled(({ textType, isInline, ...rest }) => <Anchor {...rest} />)

const StyledTextLink = styledAnchor`
  transition: color .25s ease-out;

  ${(props: ITextLinkProps) => styleForTypographyType(props.textType)}

  ${
    ({ isInline }: ITextLinkProps) => css`
      display: ${isInline && 'inline' || 'block'};
    `
  }

  &,
  &:link,
  &:visited {
    color: ${Variables.Color.i400};
  }

  &:hover {
    color: ${Variables.Color.i500};
    ${
      ({ underlineOnHover }: ITextLinkProps) => {
        if (underlineOnHover) {
          return css`
            text-decoration: underline;
          `
        }
      }
    }
  }

  &:active {
    color: ${Variables.Color.i600};
  }
`

class TextLink<P> extends React.PureComponent<P & ITextLinkProps> {
  public static defaultProps: Pick<ITextLinkProps, 'isInline'> = {
    isInline: true
  }

  public render (): JSX.Element {
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
