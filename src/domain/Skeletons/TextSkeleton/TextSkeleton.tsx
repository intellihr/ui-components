import React, { Fragment } from 'react'
import { TextSkeletonWrapper } from './style'
import { ISkeletonProps } from '../interfaces'
import { Props } from '../../../common'

export interface ITextSkeletonProps extends ISkeletonProps {
  /** Width of the skeleton */
  width?: number,
  /** Text type the skeleton is being rendered for */
  type?: Props.TypographyType,
  /** Number of lines of TextSkeleton to render (to make a paragraph skeleton) */
  numLines?: number
}

class TextSkeleton extends React.Component<ITextSkeletonProps> {
  public static defaultProps: Partial<ITextSkeletonProps> = {
    showSkeleton: false,
    type: Props.TypographyType.body
  }

  public skeleton (key: number): JSX.Element {
    const {
      type,
      width,
      className
    } = this.props

    return (
      <TextSkeletonWrapper
        textType={type}
        width={width}
        className={className}
        key={key}
      >
        {String.fromCharCode(8204)}
      </TextSkeletonWrapper>
    )
  }

  public render (): JSX.Element {
    const {
      showSkeleton,
      numLines,
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

    const skeletons = new Array<JSX.Element>(arrayLength)

    for (let i = 0; i < arrayLength; i++) {
      skeletons.push(this.skeleton(i))
    }

    return (
      <Fragment>
        {skeletons}
      </Fragment>
    )
  }
}

export {
  TextSkeleton
}
