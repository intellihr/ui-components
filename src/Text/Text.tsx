import React from 'react'
import classNames from 'classnames'
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
  /** Color of the text */
  color?: string
}

export class TextComponent extends React.PureComponent<TextProps> {
  public render (): JSX.Element {
    const {
      children,
      className,
      isHeading,
      isHeavy,
      isUpper,
      isSmall,
      color
    } = this.props

    return (
      <TextWrapper
        color={color}
        className={classNames(
          className,
          {
            'heading': isHeading,
            'heavy': isHeavy,
            'upper': isUpper,
            'small': isSmall
          }
        )}
      >
        {children}
      </TextWrapper>
    )
  }
}

export const Text: React.ComponentClass<TextProps & SkeletonComponentProps> = withSkeleton(TextComponent)
