import React from 'react'
import classNames from 'classnames'
const style = require('./style.scss')

export interface IProfilePageComponentProps {
  /** What to display in the layout. */
  children?: React.ReactNode
  /** If the component to display is the top or bottom component */
  position: 'header' | 'content'
}

export class ProfilePageComponent extends React.Component<IProfilePageComponentProps> {
  public render (): JSX.Element | null {
    const { children, position } = this.props
    return (
      <div
        className={classNames(style[position], `profile-page-${position}`)}
      >
        {children}
      </div>
    )
  }
}
