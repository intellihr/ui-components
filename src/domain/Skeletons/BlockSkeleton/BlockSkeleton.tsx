import React from 'react'
import { BlockSkeletonWrapper } from './style'
import { ISkeletonProps } from '../interfaces'

export interface IBlockSkeletonProps extends ISkeletonProps {
  /** Width of the skeleton */
  width?: number | string,
  /** Height of the skeleton */
  height?: number | string
}

class BlockSkeleton extends React.Component<IBlockSkeletonProps> {
  public static defaultProps: Partial<IBlockSkeletonProps> = {
    showSkeleton: false
  }

  public render (): JSX.Element {
    const {
      showSkeleton,
      width,
      height,
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
      <BlockSkeletonWrapper
        width={typeof width === 'number' ? `${width}px` : width}
        height={typeof height === 'number' ? `${height}px` : height}
        className={className}
      />
    )
  }
}

export {
  BlockSkeleton
}
