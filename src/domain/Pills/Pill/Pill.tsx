import classNames from 'classnames'
import React from 'react'

const style = require('./style.scss')

export interface IPillProps {
  /** Text to show inside the label  */
  text: string

  /** Extra classes to apply to the label  */
  className?: string

  /** Background or border colour of the label  */
  color?: 'alert' | 'success' | 'warning' | 'primary' | 'neutral' | 'secondary' | 'highlight' | 'dark'

  /** size of the label  */
  size?: 'small' | 'medium' | 'large'
}

export class Pill extends React.Component<IPillProps> {
  public static defaultProps = {
    color: 'neutral',
    size: 'small'
  }

  public render (): JSX.Element {
    const {
      text,
      color,
      size,
      className
    } = this.props

    return (
      <span
        className={classNames(style.pill, className, color, size)}
      >
        {text}
      </span>
    )
  }
}
