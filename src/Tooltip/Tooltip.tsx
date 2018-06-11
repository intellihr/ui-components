import React from 'react'
import ReactTooltip from 'react-tooltip'
import uuid from 'uuid'
import { FontAwesomeIcon } from '../Icon'
import { getColor } from '../Color'

const style = require('./style.scss')

export interface TooltipProps {
  id?: string,
  children: JSX.Element,
  message: string,
  place?: 'top' | 'right' | 'bottom' | 'left',
  effect?: 'solid' | 'float',
  onShow?: () => void,
  withIcon?: boolean,
  iconColour?: string
}

export class Tooltip extends React.Component<TooltipProps> {
  public static defaultProps: Partial<TooltipProps> = {
    place: 'top',
    effect: 'solid',
    withIcon: false,
    iconColour: getColor('main-text')
  }

  get tooltipId ():string {
    const {
      id
    } = this.props

    return id || uuid.v4()
  }

  get tooltipTriggerElement (): JSX.Element {
    const {
      children,
      withIcon,
      iconColour,
      message,
      place,
      effect,
      onShow
    } = this.props

    const tooltipId = this.tooltipId
    let tooltipElement = children

    if (withIcon) {
      tooltipElement = (
        <FontAwesomeIcon
          key={uuid.v4()}
          className='tooltip-icon'
          color={iconColour}
          type='question-circle-o'
        />
      )
    }

    return (
      <span key={uuid.v4()} data-tip data-for={tooltipId}>
        {tooltipElement}

        <ReactTooltip
          id={tooltipId}
          place={place}
          effect={effect}
          afterShow={onShow}
        >
          {message}
        </ReactTooltip>
      </span>
    )
  }

  get content (): JSX.Element[] | JSX.Element {
    const {
      children,
      withIcon
    } = this.props

    const tooltipTriggerElement = this.tooltipTriggerElement

    if (withIcon) {
      return [
        children,
        tooltipTriggerElement
      ]
    }

    return tooltipTriggerElement
  }

  public render (): JSX.Element[] | JSX.Element {
    return (
      <span className={style.Tooltip}>
        {this.content}
      </span>
    )
  }
}
