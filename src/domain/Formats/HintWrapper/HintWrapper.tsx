import React from 'react'
import { Props } from '../../../common'
import { StyledHintWrapper } from './style'
import { Tooltip } from '../../Tooltips/Tooltip'
import { TooltipPopover, ITooltipPopoverToggleComponentProps } from '../../Popovers/TooltipPopover'

enum HintWrapperType {
  Popover = 'popover',
  Tooltip = 'tooltip'
}

interface IHintWrapperProps {
  /** The hint text to display on hover */
  hint: JSX.Element | string
  /** The hint type to display on hover */
  hintType?: HintWrapperType
  /** The data-component-context */
  componentContext?: string
}

class HintWrapper extends React.PureComponent<IHintWrapperProps> {
  public static defaultProps: Partial<IHintWrapperProps> = {
    hintType: HintWrapperType.Tooltip
  }

  public render (): JSX.Element {
    const {
      children,
      hint,
      hintType,
      componentContext
    } = this.props

    const dataComponentValues = {
      'data-component-type': Props.ComponentType.HintWrapper,
      'data-component-context': componentContext
    }

    if (hintType === HintWrapperType.Popover) {
      return (
        <TooltipPopover
          toggleComponent={this.popoverToggle}
        >
          {hint}
        </TooltipPopover>
      )
    }

    return (
      <StyledHintWrapper
        {...dataComponentValues}
      >
        <Tooltip
          message={hint}
        >
          {children}
        </Tooltip>
      </StyledHintWrapper>
    )
  }

  private popoverToggle = ({ openMenu, closeMenu, toggleComponentRef, ariaProps }: ITooltipPopoverToggleComponentProps) => {
    const {
      children,
      componentContext
    } = this.props

    const dataComponentValues = {
      'data-component-type': Props.ComponentType.HintWrapper,
      'data-component-context': componentContext
    }

    return (
      <StyledHintWrapper
        {...dataComponentValues}
        onMouseEnter={openMenu}
        onMouseLeave={closeMenu}
        innerRef={toggleComponentRef}
        {...ariaProps}
      >
        {children}
      </StyledHintWrapper>
    )
  }
}

export {
  HintWrapper,
  HintWrapperType,
  IHintWrapperProps
}
