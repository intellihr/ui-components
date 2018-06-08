import React from 'react'

const style = require('./style.scss')

export interface IListHeader {
  label?: string,
  tooltipId?: string,
  tooltipText?: string,
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
      <span className={style}>
        {label}
      </span>
    )
  }
}
