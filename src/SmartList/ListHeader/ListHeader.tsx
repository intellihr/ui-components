import React from 'react'

const style = require('./style.scss')

export interface IListHeader {
  /** Label for the column header */
  label?: string | object
  /** ID for the column header tooltip */
  tooltipId?: string
  /** Text display in the column header tooltip */
  tooltipText?: string
  /** Callback triggered when the tooltip appears */
  onShowTooltip?: () => void
}

export class ListHeader extends React.PureComponent<IListHeader> {
  public render (): JSX.Element | null {
    const {
      label
    } = this.props

    if (!label) {
      return null
    }

    return (
      <span className={style.ListHeader}>
        {label}
      </span>
    )
  }
}
