import React from 'react'
import classNames from 'classnames'
import { isEmpty } from 'lodash'
const style = require('./Skeleton.scss')

export interface SkeletonComponentProps {
  /** Skeleton setting */
  skeletonOptions: {
    /** If true, will display the skeleton */
    showSkeleton: boolean,
    /** The width of the skeleton, will overrite the 'size' prop */
    width?: number,
    /** A circle or a line */
    shape: 'circle' | 'line'
  }
  /** How big you want the skeleton (Width can be overridden by skeletonOptions.width prop) */
  size?: 'small' | 'medium' | 'large' | 'xlarge',
  /** Additional class names for the parent container */
  className?: string
}

export const withSkeleton = <P extends SkeletonComponentProps>(
  UnwrappedComponent: React.ComponentType<P>
) =>
  class Skeleton extends React.Component<P> {
    public static defaultProps: SkeletonComponentProps = {
      skeletonOptions: {
        showSkeleton: true,
        shape: 'circle'
      },
      size: 'medium',
      className: ''
    }

    render () {
      if (isEmpty(this.props.skeletonOptions)) {
        return <UnwrappedComponent {...this.props} />
      }

      const {
        skeletonOptions: {
          showSkeleton,
          width,
          shape
        },
        size,
        className
      } = this.props

      if (!showSkeleton) {
        return <UnwrappedComponent {...this.props} />
      }

      return (
        <span
          className={classNames(
            style.Skeleton,
            className,
            'skeleton',
            shape,
            `skeleton-${size}`
          )}
          style={{ width }}
        />
      )
    }
  }
