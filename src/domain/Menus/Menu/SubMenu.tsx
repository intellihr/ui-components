import React from 'react'
import Collapsible from 'react-collapsible'
import { MenuItem } from './MenuItem'
import { SubMenuWrapper } from './style'

export interface ISubMenuProps {
  /** MenuItem component to use as trigger */
  triggerComponent: JSX.Element
  /** If true, opens the accordion menu. If false, closes the menu */
  isOpen?: boolean
}

export class SubMenu extends React.PureComponent<ISubMenuProps> {

  public render (): JSX.Element {
    const {
      children,
      triggerComponent,
      isOpen
    } = this.props

    return (
      <Collapsible
        trigger={triggerComponent}
        open={isOpen}
        transitionTime={250}
      >
        <SubMenuWrapper>
         {children}
        </SubMenuWrapper>
      </Collapsible>
    )
  }
}
