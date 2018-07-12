import React from 'react'
import { TextWrapper } from './style'
import { withSkeleton, SkeletonComponentProps } from '../Skeleton'

export interface TextProps {
  /** Text to display */
  children: string
  /** Custom class name to use */
  className?: string
  /** If true, displays the text in uppercase */
  isUpper?: boolean
  /** Specify the text font weight */
  weight?: 'normal' | 'heavy'
  /** Specify the size of text to use */
  size?: 'small' | 'medium' | 'large'
  /** If true, will truncate overflowing text */
  isTruncated?: boolean
  /** If true, will display the text inline */
  isInline?: boolean
  /** Color of the text */
  color?: string | 'subtle'
}

export class TextComponent extends React.PureComponent<TextProps> {
  public static defaultProps: Partial<TextProps> = {
    isInline: true,
    size: 'medium',
    weight: 'normal'
  }

  public render (): JSX.Element {
    const {
      children,
      className,
      weight,
      isUpper,
      size,
      isTruncated,
      isInline,
      color
    } = this.props

    return (
      <TextWrapper
        color={color}
        isInline={isInline}
        weight={weight}
        isUpper={isUpper}
        size={size}
        isTruncated={isTruncated}
        className={className}
      >
        {children}
      </TextWrapper>
    )
  }
}

export const Text: React.ComponentClass<TextProps & SkeletonComponentProps> = withSkeleton(TextComponent)
