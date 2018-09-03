import React from 'react'
import { TextWrapper } from './style'
import { Props, Variables } from '../../../common'

export interface ITextProps {
  /** Text to display */
  children: string | string[] | number
  /** Custom class name to use */
  className?: string
  /** If true, displays the text in uppercase */
  isUpper?: boolean
  /** Specify the text font weight */
  weight?: 'normal' | 'heavy'
  /** Specify the type of text to use */
  type?: Props.TypographyType
  /** If true, will truncate overflowing text */
  isTruncated?: boolean
  /** If true, will display the text inline */
  isInline?: boolean
  /** Color of the text */
  color?: Variables.Color
  /** Optional header tag to render the element with */
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
}

export class Text extends React.PureComponent<ITextProps> {
  public static defaultProps: Partial<ITextProps> = {
    isInline: true,
    type: Props.TypographyType.body,
    tag: 'span'
  }

  get textTag (): any {
    const {
      tag
    } = this.props

    if (tag) {
      return TextWrapper.withComponent(tag)
    }

    return TextWrapper
  }

  public render (): JSX.Element {
    const {
      children,
      className,
      type,
      weight,
      isUpper,
      isTruncated,
      isInline,
      color
    } = this.props

    const TextTag = this.textTag

    return (
      <TextTag
        textType={type}
        color={color}
        isInline={isInline}
        weight={weight}
        isUpper={isUpper}
        isTruncated={isTruncated}
        className={className}
      >
        {children}
      </TextTag>
    )
  }
}
