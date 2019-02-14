import React from 'react'

import {
  IndentedWrapper
} from './style'

export interface IIndentedElement {
  /** Depth level of the element */
  depth: number
}

export class IndentedElement extends React.PureComponent <IIndentedElement> {
  public render (): JSX.Element {
    const {
      depth,
      children
    } = this.props

    return (
      <IndentedWrapper
        depth={depth}
      >
        {children}
      </IndentedWrapper>
    )
  }
}
