import React from 'react'
import { CircleSkeletonWrapper } from './style'
import { ISkeletonProps } from '../interfaces'
import { Props } from '../../../common'

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
      <CircleSkeletonWrapper
        size={size}
        className={className}
      />
    )
  }
}

export {
  CircleSkeleton
}
