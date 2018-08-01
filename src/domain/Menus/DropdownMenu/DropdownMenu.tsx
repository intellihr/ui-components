import React, { RefObject } from 'react'
import moment, { Moment } from 'moment'
import { Props } from '@Common/types'
import { FontAwesomeIcon } from '@Domain/Icons'
import { DefaultDropdownButton, StyledToggleContainer } from './subcomponents/style'
import { ManualMenu } from './subcomponents/ManualMenu'
import { ISectionProps, Section } from './subcomponents/Section'

interface IDropdownMenuState {
  isDropdownOpen: boolean,
  lastClosedTime?: Moment
}

interface IDropdownMenuProps {
  /** What position on the parent to anchor relative to */
  parentAnchorPosition?: Props.IPositionXY,
  /** What position on the dropdown itself to place at the anchor position */
  dropdownAnchorPosition?: Props.IPositionXY,
  /** Any custom class names */
  className?: string,
  /** The sections to render in the dropdown */
  sections: ISectionProps[],
  /** The parent component that opens the dropdown and positions it on the page.
   *  This component will be wrapped in a span which will determine the onclick properties.
   *  Note: all margins will be removed. */
  toggleComponent?: JSX.Element
}

class DropdownMenu extends React.PureComponent<IDropdownMenuProps, IDropdownMenuState> {
  public static ManualMenu = ManualMenu
  public static Section = Section
  public static DefaultDropdownButton = DefaultDropdownButton

  public static defaultProps: Partial<IDropdownMenuProps> = {
    toggleComponent: (
      <DefaultDropdownButton>
        <FontAwesomeIcon type='ellipsis-v' />
      </DefaultDropdownButton>
    )
  }

  public state: IDropdownMenuState = { isDropdownOpen: false }

  private toggleComponentRef: RefObject<HTMLSpanElement> = React.createRef()

  private openMenu = () => {
    const {
      isDropdownOpen,
      lastClosedTime
    } = this.state

    if (isDropdownOpen) {
      return
    }

    // Hack to prevent reopening the menu on the same click as closing it
    if (!lastClosedTime || (moment().diff(lastClosedTime) > 300)) {
      this.setState({ isDropdownOpen: true })
    }
  }

  private close = () => {
    this.setState({
      isDropdownOpen: false,
      lastClosedTime: moment()
    })
  }

  private get toggleComponent () {
    const {
      toggleComponent
    } = this.props

    return (
      <span>
        <StyledToggleContainer
          onClick={this.openMenu}
          innerRef={this.toggleComponentRef}
        >
          {toggleComponent}
        </StyledToggleContainer>
      </span>
    )
  }

  private get dropdownMenu (): JSX.Element | null {
    const { isDropdownOpen } = this.state
    const {
      className,
      sections,
      parentAnchorPosition,
      dropdownAnchorPosition
    } = this.props

    return (
      <ManualMenu
        className={className}
        isDropdownOpen={isDropdownOpen}
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
