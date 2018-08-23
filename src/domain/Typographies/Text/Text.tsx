import React from 'react'
import { TextWrapper } from './style'
import { withSkeleton, ISkeletonComponentProps } from '../../Skeletons'
import { Variables } from '../../../common'

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
  type?: 'xsmall' | 'small' | 'body' | 'heading' | 'display' | 'display-large'
  /** If true, will truncate overflowing text */
  isTruncated?: boolean
  /** If true, will display the text inline */
  isInline?: boolean
  /** Color of the text */
  color?: Variables.Color | 'subtle'
}

export class TextComponent extends React.PureComponent<ITextProps> {
  public static defaultProps: Partial<ITextProps> = {
    isInline: true,
    color: Variables.Color.n800,
    type: 'body',
    weight: 'normal'
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

    return (
      <TextWrapper
        type={type}
        color={color}
        isInline={isInline}
        weight={weight}
        isUpper={isUpper}
        isTruncated={isTruncated}
        className={className}
      >
        {children}
      </TextWrapper>
    )
  }
}

export const Text: React.ComponentClass<ITextProps & ISkeletonComponentProps> = withSkeleton(TextComponent)
