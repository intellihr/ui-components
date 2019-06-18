import React from 'react'

import { Props } from '../../../common'
import { ISkeletonProps } from '../interfaces'
import { BlockSkeletonWrapper } from './style'

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
      className,
      margins
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
      />
    )
  }
}

export {
  BlockSkeleton
}
