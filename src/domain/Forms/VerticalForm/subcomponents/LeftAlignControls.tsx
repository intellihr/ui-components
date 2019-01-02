import React from 'react'
import { StyledLeftAlignControls } from './style'

class LeftAlignControls extends React.PureComponent<{}, never> {
  public render (): JSX.Element {
    const {
      children
    } = this.props

    return (
      <StyledLeftAlignControls>
        {children}
      </StyledLeftAlignControls>
    )
  }
}

export {
  LeftAlignControls
}
