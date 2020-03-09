import React from 'react'

import { Props, Variables } from '../../../common'
import { Anchor, IAnchorProps } from '../../Internals/Anchor'
import { TextWrapper } from '../../Typographies/Text/style'

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

const TextLink: React.FC<ITextLinkProps> = ({
  type = 'anchor',
  textType,
  isInline = true,
  isTruncated,
  underlineOnHover,
  onClick,
  margins,
  componentContext,
  children,
  ...rest
}) => {

  const textLink = (
    <TextWrapper
      as={type === 'button' ? 'button' : undefined}
      margins={margins}
      textType={textType}
      weight={Variables.FontWeight.fwNormal}
      isInline={isInline}
      underlineOnHover={underlineOnHover}
      isLink={type === 'anchor'}
      isLinkButton={type === 'button'}
      onClick={onClick}
      isTruncated={isTruncated}
      data-component-type={Props.ComponentType.TextLink}
      data-component-context={componentContext}
    >
      {children}
    </TextWrapper>
  )

  if (type === 'button') {
    return textLink
  }

  return (
    <Anchor {...rest}>
      {textLink}
    </Anchor>
  )
}

export {
  TextLink,
  ITextLinkProps
}
