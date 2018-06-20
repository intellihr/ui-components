import React, { CSSProperties } from 'react'
import classNames from 'classnames'
const style = require('./Skeleton.scss')

export interface SkeletonComponentProps {
  /** Skeleton setting */
  skeletonOptions?: {
    /** If true, will display the skeleton */
    showSkeleton: boolean,
    /** Width of the skeleton (only applies if `shape` is set to `line`) */
    width?: number,
    /** A circle or a line */
    shape: 'circle' | 'line'
  }
  /** Circle size of the skeleton (only applies if `shape` is set to `circle`) */
  size?: 'small' | 'medium' | 'large' | 'xlarge'
  /** Additional class names for the parent container */
  className?: string
}

export const withSkeleton = <P extends {}>(
  UnwrappedComponent: React.ComponentType<P>
) => class Skeleton extends React.Component<P & SkeletonComponentProps> {
    static defaultProps: Partial<SkeletonComponentProps> = {
      skeletonOptions: {
        showSkeleton: false,
        shape: 'circle'
      },
      className: ''
    }

    get style (): CSSProperties | undefined {
      const {
        width,
        shape
      } = this.props.skeletonOptions!

      if (shape === 'line') {
        return { width }
      }
    }

    render (): JSX.Element {
      const {
        showSkeleton,
        shape
      } = this.props.skeletonOptions!

      const {
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
          style={this.style}
        >
          {shape === 'line' ? String.fromCharCode(8204) : null}
        </span>
      )
    }
}
