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
  /** If true, displays the text in a smaller font size */
  small?: boolean
  /** If true, displays the text in a larger font size */
  large?: boolean
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
    inline: true
  }

  public render (): JSX.Element {
    const {
      children,
      className,
      heavy,
      upper,
      small,
      large,
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
        small={small}
        large={large}
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
