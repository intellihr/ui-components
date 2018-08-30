import React, { Fragment } from 'react'
import { TextSkeletonWrapper } from './style'

export interface ITextSkeletonOptions {
  /** If true, will display the skeleton */
  showSkeleton: boolean,
  /** Width of the skeleton */
  width?: number,
  /** Text type the skeleton is being rendered for */
  type?: 'xsmall' | 'small' | 'body' | 'heading' | 'display' | 'display-large'
  /** Number of lines of TextSkeleton to render (to make a paragraph skeleton) */
  numLines?: number
}

export interface ITextSkeletonComponentProps {
  /** Skeleton setting */
  skeletonOptions?: ITextSkeletonOptions
  /** Additional class names for the parent container */
  className?: string
}

class TextSkeleton extends React.Component<ITextSkeletonComponentProps> {
  public static defaultProps: Partial<ITextSkeletonComponentProps> = {
    skeletonOptions: {
      showSkeleton: false,
      type: 'body'
  }
    }

  public render (): JSX.Element {
    const {
      showSkeleton = false,
      type = 'body',
      width,
      numLines
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

    const skeleton = (
      <TextSkeletonWrapper
        type={type}
        width={width}
        className={className}
      >
        <span>
          {String.fromCharCode(8204)}
        </span>
      </TextSkeletonWrapper>
    )

    const output = new Array<JSX.Element>(numLines ? numLines : 1)
    output.fill(skeleton, 0, numLines)

    return (
      <Fragment>
        {output}
      </Fragment>
    )
  }
}

export {
  TextSkeleton
}
