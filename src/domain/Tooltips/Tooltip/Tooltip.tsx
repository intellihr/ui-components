import React from 'react'
import ReactTooltip from 'react-tooltip'
import uuid from 'uuid'

import { Variables } from '../../../common'
import { FontAwesomeIcon } from '../../Icons'
import { TooltipIcon, TooltipWrapper } from './style'

export interface ITooltipProps {
  id?: string,
  message: JSX.Element | string,
  place?: 'top' | 'right' | 'bottom' | 'left',
  effect?: 'solid' | 'float',
  onShow?: () => void,
  withIcon?: boolean,
  iconColour?: string,
  width?: number,
  className?: string
}

export class Tooltip extends React.Component<ITooltipProps> {
  public static defaultProps: Partial<ITooltipProps> = {
    place: 'top',
    effect: 'solid',
    withIcon: false,
    iconColour: Variables.Color.n700
  }

  get tooltipId(): string {
    const {
      id
    } = this.props

    return id || uuid.v4()
  }

  get tooltipTriggerElement(): JSX.Element {
    const {
      children,
      withIcon,
      iconColour,
      message,
      place,
      effect,
      onShow,
      id,
      width,
      className
    } = this.props

    const tooltipId = this.tooltipId
    const tooltipElementKey = id || uuid.v4()
    let tooltipElement = children

    if (withIcon) {
      tooltipElement = (
        <TooltipIcon>
          <FontAwesomeIcon
            key={tooltipElementKey}
            color={iconColour}
            type='regular'
            icon='question-circle'
          />
        </TooltipIcon>
      )
    }

    return (
      <TooltipWrapper
        className={className}
        key={tooltipElementKey}
        data-tip
        data-for={tooltipId}
        width={width}
      >
        {tooltipElement}

        <ReactTooltip
          id={tooltipId}
          place={place}
          effect={effect}
          afterShow={onShow}
        >
          {message}
        </ReactTooltip>
      </TooltipWrapper>
    )
  }

  get content(): JSX.Element {
    const {
      children,
      withIcon
    } = this.props

    const tooltipTriggerElement = this.tooltipTriggerElement

    if (withIcon) {
      return (
        <>
          {children}
          {tooltipTriggerElement}
        </>
      )
    }

    return tooltipTriggerElement
  }

  public render(): JSX.Element[] | JSX.Element {
    return this.content
  }
}
