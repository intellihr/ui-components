import React from 'react'
import styled, { StyledFunction, css } from 'styled-components'

import { Props, Variables } from '../../../common'
import { Anchor, IAnchorProps } from '../../Internals/Anchor'
import { styleForMargins } from '../../Spacers/services/margins'
import { styleForTruncatedText, styleForTypographyType } from '../../Typographies/services/textStyles'

interface ITextLinkCommonProps {
  /** Specify the type of text to use */
  textType?: Props.TypographyType
  /** If true, will display the text link inline */
  isInline?: boolean
  /** If true, will truncate overflowing text */
  isTruncated?: boolean
  /** If true, will underline the link on hover */
  underlineOnHover?: boolean
  /** The margins around the component */
  margins?: Props.IMargins
  /** The data-component-context */
  componentContext?: string
}

interface ITextLinkAnchorProps extends IAnchorProps, ITextLinkCommonProps {
  type?: 'anchor'
}

interface ITextLinkButtonProps extends ITextLinkCommonProps {
  type?: 'button'
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
}

type ITextLinkProps = ITextLinkAnchorProps | ITextLinkButtonProps

const TextLinkStyles = css`
  transition: color .25s ease-out;
  cursor: pointer;

  ${(props: ITextLinkCommonProps) => styleForTypographyType(props.textType)}

  ${(props: ITextLinkCommonProps) => {
    return css`
      ${styleForMargins(props.margins)}
    `
  }}

  ${(props: ITextLinkCommonProps) => props.isTruncated && css`
    ${styleForTruncatedText()}
  `}

  ${(props: ITextLinkCommonProps) => {
    if (props.isInline) {
      return css`
        display: inline;
      `
    }

    return css`
      display: block;
    `
  }}

  &,
  &:link,
  &:visited {
    color: ${Variables.Color.i400};
  }

  &:hover {
    color: ${Variables.Color.i500};
    ${({ underlineOnHover }: ITextLinkCommonProps) => {
      if (underlineOnHover) {
        return css`
              text-decoration: underline;
            `
      }
    }}
  }

  &:active {
    color: ${Variables.Color.i600};
  }
`

const StyledTextLink = styled.span`
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
        isTruncated,
        onClick,
        textType,
        underlineOnHover,
        margins
      } = this.props

      return (
        <StyledTextButton
          type='button'
          textType={textType}
          isInline={isInline}
          isTruncated={isTruncated}
          underlineOnHover={underlineOnHover}
          onClick={onClick}
          margins={margins}
        >
          {children}
        </StyledTextButton>
      )
    } else {
      const {
        children,
        isInline,
        isTruncated,
        textType,
        underlineOnHover,
        margins,
        ...rest
      } = this.props

      return (
        <Anchor {...rest}>
          <StyledTextLink
            textType={textType}
            isInline={isInline}
            isTruncated={isTruncated}
            underlineOnHover={underlineOnHover}
            margins={margins}
          >
            {children}
          </StyledTextLink>
        </Anchor>
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
