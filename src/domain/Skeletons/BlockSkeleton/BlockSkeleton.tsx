import React from 'react'

import { Props } from '../../../common'
import { BlockSkeletonWrapper } from './style'

export interface IBlockSkeletonProps {
  /** Width of the skeleton */
  width?: number | string,
  /** Height of the skeleton */
  height?: number | string
  /** Display style of the skeleton */
  display?: 'block' | 'inline-block'
  /** Additional class names for the parent container */
  className?: string
  /** The margins around the component */
  margins?: Props.IMargins
}

class BlockSkeleton extends React.Component<IBlockSkeletonProps> {
  public static defaultProps: Partial<IBlockSkeletonProps> = {
    display: 'block'
  }

  public render (): JSX.Element {
    const {
      width,
      height,
      className,
      margins,
      display
    } = this.props

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
