import React from 'react'
import { TextWrapper } from './style'
import { withSkeleton, ISkeletonComponentProps } from '../../Skeletons'
const { n800 } = require('../../../common/sass/variables.scss')

export interface ITextProps {
  /** Text to display */
  children: string | number
  /** Custom class name to use */
  className?: string
  /** If true, displays the text in uppercase */
  isUpper?: boolean
  /** Specify the text font weight */
  weight?: 'normal' | 'heavy'
  /** Specify the size of text to use */
  size?: 'xsmall' | 'small' | 'medium' | 'large'
  /** If true, will truncate overflowing text */
  isTruncated?: boolean
  /** If true, will display the text inline */
  isInline?: boolean
  /** Color of the text */
  color?: string
}

export class TextComponent extends React.PureComponent<ITextProps> {
  public static defaultProps: Partial<ITextProps> = {
    isInline: true,
    size: 'medium',
    weight: 'normal',
    color: n800
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

export const Text: React.ComponentClass<ITextProps & ISkeletonComponentProps> = withSkeleton(TextComponent)
