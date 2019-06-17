import React from 'react'

import { Props } from '../../../common'
import { ISkeletonProps } from '../interfaces'
import { TextSkeleton } from '../TextSkeleton'
import { ParagraphSkeletonWrapper } from './style'

class ParagraphSkeleton extends React.Component<ISkeletonProps> {
  public static defaultProps: Partial<ISkeletonProps> = {
    showSkeleton: false
  }

  public render (): JSX.Element {
    const {
      showSkeleton,
      children,
      className,
      margins
    } = this.props

    if (!showSkeleton) {
      return (
        <>
          {children}
        </>
      )
    }

    return (
      <ParagraphSkeletonWrapper
        className={className}
        margins={margins}
      >
        <TextSkeleton
          showSkeleton
          type={Props.TypographyType.DisplayLarge}
          width={200}
        />
        <TextSkeleton
          showSkeleton
        />
        <TextSkeleton
          showSkeleton
        />
        <TextSkeleton
          showSkeleton
        />
        <TextSkeleton
          showSkeleton
        />
        <TextSkeleton
          showSkeleton
          width={'50%'}
        />
      </ParagraphSkeletonWrapper>
    )
  }
}

export {
  ParagraphSkeleton
}
