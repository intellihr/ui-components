import React from 'react'
import { StyledModalContent } from './style'

class Content extends React.PureComponent<{}, never> {
  public render (): JSX.Element {
    const {
      children
    } = this.props

    return (
      <StyledModalContent>
        {children}
      </StyledModalContent>
    )
  }
}

export {
  Content
}
