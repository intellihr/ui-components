import React from 'react'

import { Props } from '../../../common'
import { ISkeletonProps } from '../interfaces'
import { TextSkeleton } from '../TextSkeleton'

class ParagraphSkeleton extends React.Component<ISkeletonProps> {
  public static defaultProps: Partial<ISkeletonProps> = {
    showSkeleton: false
  }

  public render (): JSX.Element {
    const {
      showSkeleton,
      children,
      className
    } = this.props

    if (!showSkeleton) {
      return (
        <>
          {children}
        </>
      )
    }

    return (
      <div className={className}>
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
      </div>
    )
  }
}

export {
  ParagraphSkeleton
}
