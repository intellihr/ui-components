import React, { RefObject } from 'react'
import { FontAwesomeIcon } from '@Domain/Icons'
import { DefaultDropdownButton, StyledToggleContainer } from './subcomponents/style'
import { IPositionXY, ManualMenu } from './subcomponents/ManualMenu'
import { IDropdownMenuSectionProps, Section } from './subcomponents/Section'

interface IDropdownMenuState {
  isMenuOpen: boolean
}

interface IDropdownMenuProps {
  /** What position on the parent to anchor relative to */
  parentAnchorPosition?: IPositionXY,
  /** What position on the dropdown itself to place at the anchor position */
  dropdownAnchorPosition?: IPositionXY,
  /** Any custom class names */
  className?: string,
  /** The sections to render in the dropdown */
  sections: IDropdownMenuSectionProps[],
  /** The parent component that opens the dropdown and positions it on the page.
   *  This component will be wrapped in a span which will determine the onclick properties.
   *  Note: all margins will be removed. */
  toggleComponent?: JSX.Element
}

class DropdownMenu extends React.PureComponent<IDropdownMenuProps, IDropdownMenuState> {
  public static ManualMenu = ManualMenu
  public static Section = Section
  public static DefaultDropdownButton = DefaultDropdownButton

  public state: IDropdownMenuState = { isMenuOpen: false }

  public static defaultProps: Partial<IDropdownMenuProps> = {
    toggleComponent: (
      <DefaultDropdownButton>
        <FontAwesomeIcon type='ellipsis-v' />
      </DefaultDropdownButton>
    )
  }

  private toggleComponentRef: RefObject<HTMLSpanElement> = React.createRef()

  private toggle = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen })
  }

  private close = () => {
    this.setState({ isMenuOpen: false })
  }

  private get toggleComponent () {
    const {
      toggleComponent
    } = this.props

    return (
      <span>
        <StyledToggleContainer
          onClick={this.toggle}
          innerRef={this.toggleComponentRef}
        >
          {toggleComponent}
        </StyledToggleContainer>
      </span>
    )
  }

  private get dropdownMenu (): JSX.Element | null {
    const { isMenuOpen } = this.state
    const {
      className,
      sections,
      parentAnchorPosition,
      dropdownAnchorPosition
    } = this.props

    return (
      <ManualMenu
        className={className}
        isMenuOpen={isMenuOpen}
        onDropdownClose={this.close}
        sections={sections}
        parentAnchorPosition={parentAnchorPosition}
        dropdownAnchorPosition={dropdownAnchorPosition}
        parentRef={this.toggleComponentRef}
      />
    )
  }

  public render (): JSX.Element {
    return (
      <React.Fragment>
        {this.toggleComponent}
        {this.dropdownMenu}
      </React.Fragment>
    )
  }
}

export {
  IDropdownMenuProps,
  DropdownMenu
}
