import React from 'react'
import { TextSkeletonWrapper } from './style'
import { ISkeletonProps } from '../interfaces'
import { Props } from '../../../common'

export interface ITextSkeletonProps extends ISkeletonProps {
  /** Width of the skeleton */
  width?: number,
  /** Text type the skeleton is being rendered for */
  type?: Props.TypographyType
}

class TextSkeleton extends React.Component<ITextSkeletonProps> {
  public static defaultProps: Partial<ITextSkeletonProps> = {
    showSkeleton: false,
    type: Props.TypographyType.body
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
        width={width}
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
