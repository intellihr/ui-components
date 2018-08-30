import React from 'react'
import { BlockSkeletonWrapper } from './style'

export interface IBlockSkeletonOptions {
  /** If true, will display the skeleton */
  showSkeleton: boolean,
  /** Width of the skeleton */
  width?: number,
  /** Height of the skeleton */
  height?: number,
}

export interface IBlockSkeletonComponentProps {
  /** Skeleton setting */
  skeletonOptions?: IBlockSkeletonOptions
  /** Additional class names for the parent container */
  className?: string
}

class BlockSkeleton extends React.Component<IBlockSkeletonComponentProps> {
  public static defaultProps: Partial<IBlockSkeletonComponentProps> = {
    skeletonOptions: {
      showSkeleton: false
    }
  }

  public render (): JSX.Element {
    const {
      showSkeleton = false,
      width,
      height
    } = this.props.skeletonOptions!

    const {
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
