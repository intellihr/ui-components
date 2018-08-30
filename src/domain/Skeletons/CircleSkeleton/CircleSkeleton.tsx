import React from 'react'
import { CircleSkeletonWrapper } from './style'

export interface ICircleSkeletonOptions {
  /** If true, will display the skeleton */
  showSkeleton: boolean,
  /** Circle size of the skeleton (only applies if `shape` is set to `circle`) */
  size?: 'small' | 'medium' | 'large' | 'xlarge'
}

export interface ICircleSkeletonComponentProps {
  /** Skeleton setting */
  skeletonOptions?: ICircleSkeletonOptions
  /** Additional class names for the parent container */
  className?: string
}

class CircleSkeleton extends React.Component<ICircleSkeletonComponentProps> {
  public static defaultProps: Partial<ICircleSkeletonComponentProps> = {
    skeletonOptions: {
      showSkeleton: false,
      size: 'large'
    }
  }

  public render (): JSX.Element {
    const {
      showSkeleton = false,
      size = 'large',
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
