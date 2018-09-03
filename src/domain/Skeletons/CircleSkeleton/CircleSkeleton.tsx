import React from 'react'
import { CircleSkeletonWrapper } from './style'
import { Props } from '../../../common'

export interface ICircleSkeletonComponentProps {
    /** If true, will display the skeleton */
    showSkeleton: boolean,
    /** Circle size of the skeleton */
    size?: Props.AvatarSize,
  /** Additional class names for the parent container */
  className?: string
}

class CircleSkeleton extends React.Component<ICircleSkeletonComponentProps> {
  public static defaultProps: Partial<ICircleSkeletonComponentProps> = {
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
