import React from 'react'

import { Props } from '../../../common'
import { ISkeletonProps } from '../interfaces'
import { CircleSkeletonWrapper } from './style'

export interface ICircleSkeletonProps extends ISkeletonProps {
  /** Circle size of the skeleton */
  size?: Props.AvatarSize
}

class CircleSkeleton extends React.Component<ICircleSkeletonProps> {
  public static defaultProps: Partial<ICircleSkeletonProps> = {
    showSkeleton: false,
    size: Props.AvatarSize.Large
  }

  public render (): JSX.Element {
    const {
      showSkeleton,
      size,
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
      <CircleSkeletonWrapper
        size={size}
        className={className}
        margins={margins}
      />
    )
  }
}

export {
  CircleSkeleton
}
