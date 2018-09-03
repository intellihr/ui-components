import React, { Fragment } from 'react'
import { TextSkeletonWrapper } from './style'
import { Props } from '../../../common'

export interface ITextSkeletonOptions {
  /** If true, will display the skeleton */
  showSkeleton: boolean,
  /** Width of the skeleton */
  width?: number,
  /** Text type the skeleton is being rendered for */
  type?: Props.TypographyType
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
      type: Props.TypographyType.body
    }
  }

  public skeleton (key: number): JSX.Element {
    const {
      type = Props.TypographyType.body,
      width
    } = this.props.skeletonOptions!

    const {
      className
    } = this.props

    return (
      <TextSkeletonWrapper
        textType={type}
        width={width}
        className={className}
        key={key}
      >
        <span>
          {String.fromCharCode(8204)}
        </span>
      </TextSkeletonWrapper>
    )
  }

  public render (): JSX.Element {
    const {
      showSkeleton,
      numLines
    } = this.props.skeletonOptions!

    const {
      children
    } = this.props

    if (!showSkeleton) {
      return (
        <React.Fragment>
          {children}
        </React.Fragment>
      )
    }

    const arrayLength = numLines ? numLines : 1

    const output = new Array<JSX.Element>(arrayLength)

    for (let i = 0; i < arrayLength; i++) {
      output.push(this.skeleton(i))
    }

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
