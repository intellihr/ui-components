import React from 'react'
import Collapsible from 'react-collapsible'
import { SubMenuWrapper } from './style'

export interface ISubMenuProps {
  /** MenuItem component to use as trigger */
  triggerComponent: JSX.Element
  /** If true, opens the accordion menu. If false, closes the menu */
  isOpen?: boolean
  /** Function called when open or close event finishes for size recalculation */
  handleSizeChange?: () => void
}

export class SubMenu extends React.PureComponent<ISubMenuProps> {
  public render (): JSX.Element {
    const {
      children,
      triggerComponent,
      isOpen,
      handleSizeChange
    } = this.props

    return (
      <Collapsible
        trigger={triggerComponent}
        open={isOpen}
        transitionTime={250}
        onOpen={handleSizeChange}
        onClose={handleSizeChange}
      >
        <SubMenuWrapper>
          {children}
        </SubMenuWrapper>
      </Collapsible>
    )
  }
}
