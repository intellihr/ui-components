import React from 'react'
import classNames from 'classnames'
import { ProfilePageComponent } from './ProfilePageComponent'
const style = require('./style.scss')

export interface IProfilePageLayoutProps {
  /** What to display in the layout. */
  children?: React.ReactNode
}

export class ProfilePageLayout extends React.Component<IProfilePageLayoutProps> {
  static component = ProfilePageComponent

  public render (): JSX.Element | null {
    const { children } = this.props
    return (
      <div
        className={classNames(style.base, 'profile-page-base')}
      >
        {children}
      </div>
    )
  }
}
