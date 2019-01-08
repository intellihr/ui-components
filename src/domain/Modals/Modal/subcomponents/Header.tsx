import React from 'react'
import { Text } from '../../../Typographies/Text'
import { Props } from '../../../../common'
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
