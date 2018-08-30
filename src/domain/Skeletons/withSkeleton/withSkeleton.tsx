import React from 'react'
import { TextSkeleton, ITextSkeletonComponentProps } from '../TextSkeleton'

export const withSkeleton = <P extends {}>(
  UnwrappedComponent: React.ComponentType<P>
) => class extends React.PureComponent<P & ITextSkeletonComponentProps> {
  public render (): JSX.Element {
    return (
      <TextSkeleton {...this.props} >
        <UnwrappedComponent {...this.props} />
      </TextSkeleton>
    )
  }
}
