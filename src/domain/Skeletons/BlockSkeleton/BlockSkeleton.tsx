import React from 'react'
import { BlockSkeletonWrapper } from './style'

export interface IBlockSkeletonComponentProps {
  /** If true, will display the skeleton */
  showSkeleton: boolean,
  /** Width of the skeleton */
  width?: number,
  /** Height of the skeleton */
  height?: number,
  /** Additional class names for the parent container */
  className?: string
}

class BlockSkeleton extends React.Component<IBlockSkeletonComponentProps> {
  public static defaultProps: Partial<IBlockSkeletonComponentProps> = {
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
