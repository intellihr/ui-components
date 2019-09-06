import React from 'react'

import { Props } from '../../../common'
import { TextSkeleton } from '../TextSkeleton'
import { ParagraphSkeletonWrapper } from './style'

export interface IParagraphSkeletonProps {
  /** Additional class names for the parent container */
  className?: string
  /** The margins around the component */
  margins?: Props.IMargins
}

class ParagraphSkeleton extends React.Component<IParagraphSkeletonProps> {
  public render (): JSX.Element {
    const {
      className,
      margins
    } = this.props

    return (
      <ParagraphSkeletonWrapper
        className={className}
        margins={margins}
      >
        <TextSkeleton
          type={Props.TypographyType.DisplayLarge}
          width={200}
        />
        <TextSkeleton/>
        <TextSkeleton/>
        <TextSkeleton/>
        <TextSkeleton/>
        <TextSkeleton
          width='50%'
        />
      </ParagraphSkeletonWrapper>
    )
  }
}

export {
  ParagraphSkeleton
}
