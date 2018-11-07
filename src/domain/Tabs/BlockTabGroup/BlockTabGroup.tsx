import React, { MouseEvent } from 'react'
import {
  isNumber,
  map,
  toNumber
} from 'lodash'

const style = require('./style.scss')

export interface IBlockTab {
  /** String title to use for the tab */
  title?: string
  anchorId?: string
}

export interface IBlockTabGroupProps {
  /** The current tab selected (by anchor or index). */
  currentTab: string | number
  /** A list of tabs and their content to render */
  tabs: IBlockTab[]
  /** Whether to update the url of the page with anchors when changing tabs */
  anchorsUpdateUrl?: boolean
  /** Callback to run when clicking between tabs */
  onTabChange?: (tab: IBlockTab, index: number) => void
}

export class BlockTabGroup extends React.Component<IBlockTabGroupProps, never> {
  public static defaultProps = {
    anchorsUpdateUrl: false
  }

  public render (): JSX.Element | null {
    const {
      tabs
    } = this.props

    if (tabs.length === 0) {
      return null
    }

    return (
      <div className={style.ihrBlockTabGroup}>
        <ul role='tablist'>
          {map(tabs, this.listItemForTab)}
        </ul>
      </div>
    )
  }

  private listItemForTab = (tab: IBlockTab, index: number): JSX.Element => {
    const currentTabIndex = this.currentTabIndex

    return (
        <li key={index} role='tab'>
          <a
            className={currentTabIndex === index ? 'active' : ''}
            href={tab.anchorId || '#'}
            onClick={this.handleClickTab}
            aria-selected={currentTabIndex === index}
            data-tabindex={index}>{tab.title}</a>
        </li>
    )
  }

  private indexForTab = (tabIdentifier?: number | string): number => {

    if (!tabIdentifier) {
      return 0
    }

    if (isNumber(tabIdentifier)) {
      return tabIdentifier
    }

    return 0
  }

  private get currentTabIndex (): number {
    const {
      currentTab
    } = this.props

    return this.indexForTab(currentTab)
  }


  private handleClickTab = (event: MouseEvent<HTMLAnchorElement>) => {
    const {
      tabs,
      onTabChange,
      anchorsUpdateUrl
    } = this.props

    const newTabIndex = toNumber(event.currentTarget.dataset.tabindex || 0)

    if (onTabChange && (this.currentTabIndex !== newTabIndex)) {
      onTabChange(tabs[newTabIndex], newTabIndex)
    }

    // Don't use anchors as links if not intending to
    if (!anchorsUpdateUrl) {
      event.preventDefault()
    }
  }
}
