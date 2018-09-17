import React from 'react'
import { Props } from '../../../common'
import { ISkeletonProps } from '../interfaces'
import { TextSkeleton } from '../TextSkeleton'
import { BottomTextSkeletonWrapper } from './style'

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
        <React.Fragment>
          {children}
        </React.Fragment>
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
          <BottomTextSkeletonWrapper>
            <TextSkeleton
              showSkeleton
            />
          </BottomTextSkeletonWrapper>
      </div>
    )
  }
}

export {
  ParagraphSkeleton
}
