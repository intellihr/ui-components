import React from 'react'
import $ from 'jquery'
import classNames from 'classnames'
import { FontAwesomeIcon } from '../Icon'

const style = require('./style.scss')

export interface ITooltipText {
  id: string,
  tooltipMessage: string,
  position?: 'top' | 'left' | 'bottom' | 'right',
  alignment?: 'top' | 'center' | 'bottom' | 'left' | 'right',
  iconColour?: string,
  children?: string,
  allowHtml?: boolean,
  onShow?: () => void,
  showIcon?: boolean
}

export class TooltipText extends React.PureComponent<ITooltipText> {
  public static defaultProps: Partial<ITooltipText> = {
    showIcon: false,
    allowHtml: false,
    iconColour: 'main-text'
  }

  private _tooltip: any

  constructor (props: ITooltipText) {
    super(props)

    this._tooltip = {}
  }

  componentDidMount () {
    const {
      id,
      onShow
    } = this.props

    this._tooltip = new Foundation.Tooltip($(`#${id}`))

    if (onShow) {
      $(global.document).on('show.zf.tooltip', `#${id}`, onShow)
    }
  }

  componentWillUnmount () {
    this._tooltip.destroy()
  }

  get placeholder () {
    const {
      children,
      iconColour
    } = this.props

    if (children) {
      return children
    }

    return (
      <FontAwesomeIcon
        color={iconColour}
        type='question-circle-o'
      />
    )
  }

  render () {
    const {
      id,
      tooltipMessage,
      position,
      alignment,
      allowHtml,
      children
    } = this.props

    return (
      <span
        id={id}
        className={classNames(
          style,
          'tooltip-text',
          {
            'default-icon': !children
          }
        )}
        title={tooltipMessage}
        data-position={position}
        data-alignment={alignment}
        data-allow-html={allowHtml}
      >
        {this.placeholder}
      </span>
    )
  }
}
