import React from 'react'
import { LineSkeleton, ILineSkeletonComponentProps } from '../LineSkeleton'

export const withSkeleton = <P extends {}>(
  UnwrappedComponent: React.ComponentType<P>
) => class extends React.PureComponent<P & ILineSkeletonComponentProps> {
  public render (): JSX.Element {
    return (
      <LineSkeleton {...this.props} >
        <UnwrappedComponent {...this.props} />
      </LineSkeleton>
    )
  }
}
