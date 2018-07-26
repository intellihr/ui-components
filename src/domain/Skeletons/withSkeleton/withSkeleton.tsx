import React from 'react'
import { Skeleton, SkeletonComponentProps } from '../Skeleton'

export const withSkeleton = <P extends {}>(
  UnwrappedComponent: React.ComponentType<P>
) => class extends React.PureComponent<P & SkeletonComponentProps> {
  render (): JSX.Element {
    return (
      <Skeleton {...this.props} >
        <UnwrappedComponent {...this.props} />
      </Skeleton>
    )
  }
}
