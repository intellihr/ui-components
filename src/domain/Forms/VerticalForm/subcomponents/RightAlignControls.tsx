import React from 'react'

import { StyledRightAlignControls } from './style'

class RightAlignControls extends React.PureComponent<{}, never> {
  public render (): JSX.Element {
    const {
      children
    } = this.props

    return (
      <StyledRightAlignControls>
        {children}
      </StyledRightAlignControls>
    )
  }
}

export {
  RightAlignControls
}
