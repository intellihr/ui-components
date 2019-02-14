import React from 'react'

import { Tooltip } from '../../../Tooltips'

const style = require('./style.scss')

export interface IListHeader {
  /** Label for the column header */
  label?: string | object
  /** Text display in the column header tooltip */
  tooltipText?: string
  /** Callback triggered when the tooltip appears */
  onShowTooltip?: () => void
}

export class ListHeader extends React.PureComponent<IListHeader> {
  get content (): JSX.Element {
    const {
      tooltipText,
      onShowTooltip,
      label
    } = this.props

    const labelContainer = (
      <span className={style.ListHeader}>
        {label}
      </span>
    )

    if (tooltipText) {
      return (
        <Tooltip
          message={tooltipText}
          onShow={onShowTooltip}
          withIcon
        >
          {labelContainer}
        </Tooltip>
      )
    }

    return labelContainer
  }

  public render (): JSX.Element | null {
    const {
      label
    } = this.props

    if (!label) {
      return null
    }

    return this.content
  }
}
