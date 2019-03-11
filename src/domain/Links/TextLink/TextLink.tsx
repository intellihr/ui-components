import React from 'react'
import styled, { StyledFunction, css } from 'styled-components'

import { Props, Variables } from '../../../common'
import { Anchor, IAnchorProps } from '../../Internals/Anchor'
import { styleForTypographyType } from '../../Typographies/services/textStyles'

interface ITextLinkCommonProps {
  textType?: Props.TypographyType
  isInline?: boolean
  underlineOnHover?: boolean
}

interface ITextLinkAnchorProps extends IAnchorProps, ITextLinkCommonProps {
  type?: 'anchor'
}

interface ITextLinkButtonProps extends ITextLinkCommonProps {
  type?: 'button'
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
}

type ITextLinkProps = ITextLinkAnchorProps | ITextLinkButtonProps

const styledAnchor: StyledFunction<ITextLinkAnchorProps> = styled(({ textType, isInline, ...rest }) => <Anchor {...rest} />)

const TextLinkStyles = css`
  transition: color .25s ease-out;
  cursor: pointer;

  ${(props: ITextLinkCommonProps) => styleForTypographyType(props.textType)}

  ${
    ({isInline}: ITextLinkCommonProps) => css`
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
      ({underlineOnHover}: ITextLinkCommonProps) => {
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

const StyledTextLink = styledAnchor`
  ${TextLinkStyles};
`
const StyledTextButton = styled.button`
  ${TextLinkStyles};
  outline: 0;
`

class TextLink<P> extends React.PureComponent<P & ITextLinkProps> {
  public static defaultProps: Partial<ITextLinkProps> = {
    isInline: true,
    type: 'anchor'
  }

  public render (): JSX.Element {
    if (this.isButton(this.props)) {
      const {
        children,
        isInline,
        onClick,
        textType,
        underlineOnHover
      } = this.props

      return (
        <StyledTextButton
          type='button'
          textType={textType}
          isInline={isInline}
          underlineOnHover={underlineOnHover}
          onClick={onClick}
        >
          {children}
        </StyledTextButton>
      )
    } else {
      return (
        <StyledTextLink
          {...this.props}
        />
      )
    }
  }

  private isButton (props: ITextLinkProps): props is ITextLinkButtonProps {
    return this.props.type === 'button'
  }
}

export {
  TextLink,
  ITextLinkProps
}
