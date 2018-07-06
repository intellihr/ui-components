import React from 'react'
import { TextWrapper } from './style'
import { withSkeleton, SkeletonComponentProps } from '../Skeleton'

export interface TextProps {
  /** Text to display */
  children: string
  /** Custom class name to use */
  className?: string
  /** Specify if text is a heading */
  isHeading?: boolean
  /** If true, displays the text in uppercase */
  isUpper?: boolean
  /** If true, displays the text with a heavy font weight */
  isHeavy?: boolean
  /** If true, displays the text in a smaller font size */
  isSmall?: boolean
  /** If true, will truncate overflowing text */
  isTruncated?: boolean
  /** If true, will display the text inline */
  isInline?: boolean
  /** Color of the text */
  color?: string
}

export class TextComponent extends React.PureComponent<TextProps> {
  public static defaultProps: Partial<TextProps> = {
    isInline: true
  }

  public render (): JSX.Element {
    const {
      children,
      className,
      isHeading,
      isHeavy,
      isUpper,
      isSmall,
      isTruncated,
      isInline,
      color
    } = this.props

    return (
      <TextWrapper
        color={color}
        isInline={isInline}
        isHeavy={isHeavy}
        isHeading={isHeading}
        isUpper={isUpper}
        isSmall={isSmall}
        isTruncated={isTruncated}
        className={className}
      >
        {children}
      </TextWrapper>
    )
  }
}

export const Text: React.ComponentClass<TextProps & SkeletonComponentProps> = withSkeleton(TextComponent)
