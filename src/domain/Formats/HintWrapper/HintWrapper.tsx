import React from 'react'

import { Props } from '../../../common'
import { ITooltipPopoverToggleComponentProps, TooltipPopover } from '../../Popovers/TooltipPopover'
import { Tooltip } from '../../Tooltips/Tooltip'
import { StyledHintWrapper } from './style'

interface IHintWrapperProps {
  /** The hint text to display on hover */
  hint: JSX.Element | string
  /** The hint type to display on hover */
  hintType?: Props.HintWrapperType
  /** The width of the hint object */
  width?: number
  /** The data-component-context */
  componentContext?: string
}

class HintWrapper extends React.PureComponent<IHintWrapperProps> {
  public static defaultProps: Partial<IHintWrapperProps> = {
    hintType: Props.HintWrapperType.Tooltip
  }

  public render (): JSX.Element {
    const {
      children,
      hint,
      hintType,
      width,
      componentContext
    } = this.props

    const dataComponentValues = {
      'data-component-type': Props.ComponentType.HintWrapper,
      'data-component-context': componentContext
    }

    if (hintType === Props.HintWrapperType.Popover) {
      return (
        <TooltipPopover
          toggleComponent={this.popoverToggle}
          width={width}
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
          width={width}
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
        ref={toggleComponentRef}
        {...ariaProps}
      >
        {children}
      </StyledHintWrapper>
    )
  }
}

export {
  HintWrapper,
  IHintWrapperProps
}
