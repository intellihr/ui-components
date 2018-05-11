import React from 'react'
import { Anchor } from './Anchor'

export const withAnchor = <P extends { href?: string }>(
  UnwrappedComponent: React.ComponentType<P>
) => class WithAnchor extends React.Component<P> {
  render (): JSX.Element {
    const {
      href
    } = this.props

    if (href) {
      return (
        <Anchor {...this.props}>
          <UnwrappedComponent {...this.props} />
        </Anchor>
      )
    }

    return (
      <UnwrappedComponent {...this.props} />
    )
  }
}
