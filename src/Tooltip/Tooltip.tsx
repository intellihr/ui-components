import React from 'react'
import ReactTooltip from 'react-tooltip'
import uuid from 'uuid'

export interface TooltipProps {
  id?: string,
  children: React.ReactNode,
  message: string,
  place?: 'top' | 'right' | 'bottom' | 'left',
  effect?: 'solid' | 'float',
  onShow?: () => void
}

export class Tooltip extends React.Component<TooltipProps> {
  get tooltipId ():string {
    const {
      id
    } = this.props

    return id || uuid.v4()
  }

  public static defaultProps: Partial<TooltipProps> = {
    place: 'top',
    effect: 'solid'
  }

  public render (): JSX.Element {
    const {
      message,
      children,
      place,
      effect,
      onShow
    } = this.props

    const tooltipId = this.tooltipId

    return (
      <span data-tip data-for={tooltipId}>
        {children}

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
}
