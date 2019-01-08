import React from 'react'
import { StyledModalFooter, StyledModalControls } from './style'

interface IFooterProps {
  leftControls: JSX.Element
  rightControls: JSX.Element
}

class Footer extends React.PureComponent<IFooterProps, never> {
  public render (): JSX.Element {
    const {
      leftControls,
      rightControls
    } = this.props

    return (
      <StyledModalFooter>
        <StyledModalControls>
          {leftControls}
        </StyledModalControls>
        <StyledModalControls>
          {rightControls}
        </StyledModalControls>
      </StyledModalFooter>
    )
  }
}

export {
  Footer,
  IFooterProps
}
