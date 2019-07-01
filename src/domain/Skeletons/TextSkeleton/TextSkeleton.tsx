import React from 'react'

import { Props } from '../../../common'
import { ISkeletonProps } from '../interfaces'
import { BlockSkeletonWrapper } from '../BlockSkeleton/style'
import { TextSkeletonWrapper } from './style'

export interface ITextSkeletonProps extends ISkeletonProps {
  /** Width of the skeleton */
  width?: number | string,
  /** Text type the skeleton is being rendered for */
  type?: Props.TypographyType
  /** Display style of the skeleton */
  display?: 'block' | 'inline-block'
}

class TextSkeleton extends React.Component<ITextSkeletonProps> {
  public static defaultProps: Partial<ITextSkeletonProps> = {
    showSkeleton: false,
    type: Props.TypographyType.Body,
    display: 'block'
  }

  public render (): JSX.Element {
    const {
      showSkeleton,
      type,
      width,
      children,
      className,
      margins,
      display
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
