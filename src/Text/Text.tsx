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
  /** If true, displays the text with a heavy font weight */
  heavy?: boolean
  /** Specify the size of text to use */
  size?: 'small' | 'medium' | 'large'
  /** If true, will truncate overflowing text */
  truncated?: boolean
  /** If true, will display the text inline */
  inline?: boolean
  /** If true, displays the text with a gray colour */
  subtle?: boolean
  /** Color of the text */
  color?: string
}

export class TextComponent extends React.PureComponent<TextProps> {
  public static defaultProps: Partial<TextProps> = {
    inline: true,
    size: 'medium'
  }

  public render (): JSX.Element {
    const {
      children,
      className,
      heavy,
      upper,
      size,
      truncated,
      inline,
      subtle,
      color
    } = this.props

    return (
      <TextWrapper
        color={color}
        inline={inline}
        heavy={heavy}
        upper={upper}
        size={size}
        truncated={truncated}
        subtle={subtle}
        className={className}
      >
        {children}
      </TextWrapper>
    )
  }
}

export const Text: React.ComponentClass<TextProps & SkeletonComponentProps> = withSkeleton(TextComponent)
