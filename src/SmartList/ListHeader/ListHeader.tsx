import React from 'react'
// import TooltipText from 'Components/dumbs/atoms/texts/TooltipText/TooltipText'

const style = require('./style.scss')

export interface IListHeader {
  label?: string,
  tooltipId?: string,
  tooltipText?: string,
  onShowTooltip?: () => void
}

export class ListHeader extends React.PureComponent<IListHeader> {
  get tooltipText (): JSX.Element | undefined {
    const {
      tooltipId,
      tooltipText,
      onShowTooltip
    } = this.props

    if (tooltipText && tooltipId) {
      return (
        <TooltipText
          id={tooltipId}
          tooltipMessage={tooltipText}
          position='top'
          allowHtml
          iconColour='main-text-light'
          onShow={onShowTooltip}
        />
      )
    }
  }

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
        {this.tooltipText}
      </span>
    )
  }
}
