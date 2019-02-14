import React from 'react'

import { Props } from '../../../../common'
import { Text } from '../../../Typographies/Text'
import { StyledModalHeader } from './style'

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
        <Text
          type={Props.TypographyType.Display}
        >
          {children}
        </Text>
      </StyledModalHeader>
    )
  }
}

export {
  Header,
  IHeaderProps
}
