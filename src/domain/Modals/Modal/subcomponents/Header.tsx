import React from 'react'

import { FontAwesomeIcon } from '../../../Icons/FontAwesomeIcon'
import { DropdownMenu, IDropdownMenuToggleComponentProps } from '../../../Popovers/DropdownMenu'
import { ISectionProps } from '../../../Popovers/DropdownMenu/subcomponents/Section'
import { StyledActionButton, StyledHeaderControls, StyledModalHeader, StyledModalHeaderHeading } from './style'

interface IHeaderProps {
  children: string
  /** dropdown sections to show in the header */
  dropdownSections?: ISectionProps[]
  /** right component to show in the header */
  rightComponent?: JSX.Element
}

class Header extends React.PureComponent<IHeaderProps, never> {
  public render (): JSX.Element {
    const {
      children,
      rightComponent,
      dropdownSections
    } = this.props

    return (
      <StyledModalHeader>
        <StyledModalHeaderHeading>
          {children}
        </StyledModalHeaderHeading>
        {
          rightComponent && (
            <StyledHeaderControls>
              {rightComponent}
            </StyledHeaderControls>
          )
        }
        {
          dropdownSections && (
            <DropdownMenu
              sections={dropdownSections}
              toggleComponent={this.actionButton}
            />
          )
        }
      </StyledModalHeader>
    )
  }

  private actionButton = ({ toggleMenu, toggleComponentRef, ariaProps }: IDropdownMenuToggleComponentProps) => (
    <StyledActionButton
      onClick={this.handleActionButtonClick(toggleMenu)}
      ref={toggleComponentRef}
      {...ariaProps}
    >
      <FontAwesomeIcon type='solid' icon='ellipsis-v' />
    </StyledActionButton>
  )

  private handleActionButtonClick = (toggleMenu: () => void) => (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    toggleMenu()
  }
}

export {
  Header,
  IHeaderProps
}
