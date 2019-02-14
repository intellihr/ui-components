import React from 'react'

import { Props } from '../../../common'
import { ISkeletonProps } from '../interfaces'
import { TextSkeletonWrapper } from './style'

export interface ITextSkeletonProps extends ISkeletonProps {
  /** Width of the skeleton */
  width?: number | string,
  /** Text type the skeleton is being rendered for */
  type?: Props.TypographyType
}

class TextSkeleton extends React.Component<ITextSkeletonProps> {
  public static defaultProps: Partial<ITextSkeletonProps> = {
    showSkeleton: false,
    type: Props.TypographyType.Body
  }

  public render (): JSX.Element {
    const {
      showSkeleton,
      type,
      width,
      children,
      className
    } = this.props

    if (!showSkeleton) {
      return (
        <React.Fragment>
          {children}
        </React.Fragment>
      )
    }

    return (
      <TextSkeletonWrapper
        textType={type}
        width={typeof width === 'number' ? `${width}px` : width}
        className={className}
      >
        {String.fromCharCode(8204)}
      </TextSkeletonWrapper>
    )
  }
}

export {
  TextSkeleton
}
