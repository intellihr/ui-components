import React from 'react'

import { StyledModalHeader, StyledModalHeaderHeading } from './style'

interface IHeaderProps {
  children: string
}

class Header extends React.PureComponent<IHeaderProps, never> {
  public render (): JSX.Element {
    const {
      children
    } = this.props

    return (
      <StyledModalHeader>
        <StyledModalHeaderHeading>
          {children}
        </StyledModalHeaderHeading>
      </StyledModalHeader>
    )
  }
}

export {
  Header,
  IHeaderProps
}
