import React from 'react'

import { StyledModalChildren, StyledModalContent, StyledModalFlexContent, StyledModalRightColumn } from './style'

interface IContentProps {
  /** right column to show in the modal content */
  rightColumn?: JSX.Element
}

class Content extends React.PureComponent<IContentProps, never> {
  public render (): JSX.Element {
    const {
      children,
      rightColumn
    } = this.props

    if (rightColumn) {
      return (
        <StyledModalFlexContent>
          <StyledModalChildren>
            {children}
          </StyledModalChildren>
          <StyledModalRightColumn>
            {rightColumn}
          </StyledModalRightColumn>
        </StyledModalFlexContent>
      )
    }

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
