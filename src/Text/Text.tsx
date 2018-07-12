import React from 'react'
import { TextWrapper } from './style'
import { withSkeleton, SkeletonComponentProps } from '../Skeleton'

export interface TextProps {
  /** Text to display */
  children: string
  /** Custom class name to use */
  className?: string
  /** If true, displays the text in uppercase */
  upper?: boolean
  /** Specify the text font weight */
  weight?: 'normal' | 'heavy'
  /** Specify the size of text to use */
  size?: 'small' | 'medium' | 'large'
  /** If true, will truncate overflowing text */
  truncated?: boolean
  /** If true, will display the text inline */
  inline?: boolean
  /** Color of the text */
  color?: string | 'subtle'
}

export class TextComponent extends React.PureComponent<TextProps> {
  public static defaultProps: Partial<TextProps> = {
    inline: true,
    size: 'medium',
    weight: 'normal'
  }

  public render (): JSX.Element {
    const {
      children,
      className,
      weight,
      upper,
      size,
      truncated,
      inline,
      color
    } = this.props

    return (
      <TextWrapper
        color={color}
        inline={inline}
        weight={weight}
        upper={upper}
        size={size}
        truncated={truncated}
        className={className}
      >
        {children}
      </TextWrapper>
    )
  }
}

export const Text: React.ComponentClass<TextProps & SkeletonComponentProps> = withSkeleton(TextComponent)
