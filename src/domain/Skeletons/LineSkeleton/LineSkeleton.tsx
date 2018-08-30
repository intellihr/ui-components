import React, { CSSProperties } from 'react'
import { LineSkeletonWrapper } from './style'

export interface ILineSkeletonOptions {
  /** If true, will display the skeleton */
  showSkeleton: boolean,
  /** Width of the skeleton (only applies if `shape` is set to `line` or `block`) */
  width?: number,
  /** Height of the skeleton (only applies if `shape` is set to `block`) */
  height?: number,
  /** Shape of the skeleton */
  shape: 'circle' | 'line' | 'block'
  /** Circle size of the skeleton (only applies if `shape` is set to `circle`) */
  size?: 'small' | 'medium' | 'large' | 'xlarge'
}

export interface ILineSkeletonComponentProps {
  /** Skeleton setting */
  skeletonOptions?: ILineSkeletonOptions
  /** Additional class names for the parent container */
  className?: string
}

class LineSkeleton extends React.Component<ILineSkeletonComponentProps> {
  public static defaultProps: Partial<ILineSkeletonComponentProps> = {
    skeletonOptions: {
      showSkeleton: false,
      shape: 'line',
      size: 'large'
    },
    className: ''
  }

  get style (): CSSProperties | undefined {
    const {
      shape = 'line',
      width
    } = this.props.skeletonOptions!

    if (shape === 'line') {
      return { width }
    }
  }

  public render (): JSX.Element {
    const {
      showSkeleton = false,
      shape = 'line',
      size = 'large',
      width,
      height
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
      <LineSkeletonWrapper
        width={width}
        height={height}
        shape={shape}
        size={size}
        className={className}
      >
        <span>
          {shape === 'line' ? String.fromCharCode(8204) : null}
        </span>
      </LineSkeletonWrapper>
    )
  }
}

export {
  LineSkeleton
}
