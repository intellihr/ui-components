import React from 'react'
import { Skeleton, ISkeletonComponentProps } from '../Skeleton'

export const withSkeleton = <P extends {}>(
  UnwrappedComponent: React.ComponentType<P>
) => class extends React.PureComponent<P & ISkeletonComponentProps> {
  public render (): JSX.Element {
    return (
      <Skeleton {...this.props} >
        <UnwrappedComponent {...this.props} />
      </Skeleton>
    )
  }
}
