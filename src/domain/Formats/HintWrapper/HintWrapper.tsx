import React from 'react'
import { Props } from '../../../common'
import { StyledHintWrapper } from './style'
import { Tooltip } from '../../Tooltips/Tooltip'
import { TooltipPopover } from '../../Popovers/TooltipPopover'

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
      componentContext,
      children,
      hint,
      hintType
    } = this.props

    const dataComponentValues = {
      'data-component-type': Props.ComponentType.HintWrapper,
      'data-component-context': componentContext
    }

    if (hintType === HintWrapperType.Popover) {
      return (
        <TooltipPopover
          toggleComponent={
            ({ openMenu, closeMenu, toggleComponentRef, ariaProps }) =>
              <StyledHintWrapper
                {...dataComponentValues}
                onMouseEnter={openMenu}
                onMouseLeave={closeMenu}
                innerRef={toggleComponentRef}
                {...ariaProps}
              >
                {children}
              </StyledHintWrapper>
          }
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
}

export {
  HintWrapper,
  HintWrapperType,
  IHintWrapperProps
}
