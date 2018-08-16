import React from 'react'
import classNames from 'classnames'
import { Region } from './subcomponents/Region'
const style = require('./style.scss')

export interface IPageLayoutProps {
  /** What to display in the layout. */
  children?: React.ReactNode,
  /** What type of layout to use */
  layoutType: 'profile'
}

export class PageLayout extends React.Component<IPageLayoutProps> {
  static Region = Region

  public render (): JSX.Element | null {
    const { children, layoutType } = this.props
    return (
      <div
        className={classNames(style[layoutType], 'page-base')}
      >
        {children}
      </div>
    )
  }
}
