import React from 'react'

import { Props } from '../../../common'
import { CircleSkeletonWrapper } from './style'

export interface ICircleSkeletonProps {
  /** Circle size of the skeleton */
  size?: Props.AvatarSize
  /** Display style of the skeleton */
  display?: 'block' | 'inline-block'
  /** Additional class names for the parent container */
  className?: string
  /** The margins around the component */
  margins?: Props.IMargins
}

class CircleSkeleton extends React.Component<ICircleSkeletonProps> {
  public static defaultProps: Partial<ICircleSkeletonProps> = {
    size: Props.AvatarSize.Large,
    display: 'block'
  }

  public render (): JSX.Element {
    const {
      size,
      className,
      margins,
      display
    } = this.props

    return (
      <CircleSkeletonWrapper
        size={size}
        className={className}
        margins={margins}
        display={display!}
      />
    )
  }
}

export {
  CircleSkeleton
}
