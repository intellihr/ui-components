import React from 'react'

import { Props } from '../../../common'
import { BlockSkeletonWrapper } from '../BlockSkeleton/style'
import { TextSkeletonWrapper } from './style'

export interface ITextSkeletonProps {
  /** Width of the skeleton */
  width?: number | string,
  /** Text type the skeleton is being rendered for */
  type?: Props.TypographyType
  /** Display style of the skeleton */
  display?: 'block' | 'inline-block'
  /** Additional class names for the parent container */
  className?: string
  /** The margins around the component */
  margins?: Props.IMargins
}

class TextSkeleton extends React.Component<ITextSkeletonProps> {
  public static defaultProps: Partial<ITextSkeletonProps> = {
    type: Props.TypographyType.Body,
    display: 'block'
  }

  public render (): JSX.Element {
    const {
      type,
      width,
      className,
      margins,
      display
    } = this.props

    return (
      <TextSkeletonWrapper
        textType={type}
        width={typeof width === 'number' ? `${width}px` : width}
        className={className}
        margins={margins}
        display={display!}
      >
        {String.fromCharCode(8204)}
      </TextSkeletonWrapper>
    )
  }
}

export {
  TextSkeleton
}
