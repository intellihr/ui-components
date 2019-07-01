import React from 'react'

import { ISkeletonProps } from '../interfaces'
import { BlockSkeletonWrapper } from './style'

export interface IBlockSkeletonProps extends ISkeletonProps {
  /** Width of the skeleton */
  width?: number | string,
  /** Height of the skeleton */
  height?: number | string
  /** Display style of the skeleton */
  display?: 'block' | 'inline-block'
}

class BlockSkeleton extends React.Component<IBlockSkeletonProps> {
  public static defaultProps: Partial<IBlockSkeletonProps> = {
    showSkeleton: false,
    display: 'block'
  }

  public render (): JSX.Element {
    const {
      showSkeleton,
      width,
      height,
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
      <BlockSkeletonWrapper
        width={typeof width === 'number' ? `${width}px` : width}
        height={typeof height === 'number' ? `${height}px` : height}
        className={className}
        margins={margins}
        display={display!}
      />
    )
  }
}

export {
  BlockSkeleton
}
