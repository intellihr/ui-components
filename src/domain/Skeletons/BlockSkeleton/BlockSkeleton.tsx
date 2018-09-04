import React from 'react'
import { BlockSkeletonWrapper } from './style'
import { ISkeletonProps } from '../services/skeletonHelper'

export interface IBlockSkeletonProps extends ISkeletonProps {
  /** Width of the skeleton */
  width?: number,
  /** Height of the skeleton */
  height?: number
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
        width={width}
        height={height}
        className={className}
      />
    )
  }
}

export {
  BlockSkeleton
}
