import React, { MouseEvent } from 'react'
import { findIndex, isNumber, map, toNumber } from 'lodash'
import classNames from 'classnames'
import { IntelliIcon } from '../../Icons'
import {
  TabGroupContainer,
  TabChevronButton,
  TabList,
  TabListItem,
  TabListItemAnchor
} from './style'

export interface IHorizontalTabDefinition {
  /** String title to use for this tab */
  title?: string
  /** Component positioned to the left of the title */
  leftComponent?: JSX.Element
  /** Component positioned to the right of the title */
  rightComponent?: JSX.Element
  /** Anchor id used when clicking between tabs */
  anchorId?: string
}

export interface IHorizontalTabGroupProps {
  /** A list of tabs and their content to render */
  tabs: IHorizontalTabDefinition[]
  /** Whether to update the url of the page with anchors when changing tabs */
  useAnchors?: boolean
  /** Callback to run when clicking between tabs */
  onTabChange?: (tab: IHorizontalTabDefinition, index: number) => void
  /** The current tab selected (by anchor or index). This must be provided for the component to work.  */
  currentTab: string | number
}

export class HorizontalTabGroup extends React.Component<IHorizontalTabGroupProps, never> {
  public static defaultProps = {
    useAnchors: false
  }

  public render (): JSX.Element | null {
    const {
      tabs
    } = this.props

    if (tabs.length === 0) {
      return null
    }

    return (
      <TabGroupContainer>
        {this.leftChevron}
        {this.tabList}
        {this.rightChevron}
      </TabGroupContainer>
    )
  }

  private get leftChevron (): JSX.Element | undefined {
    return (
      <TabChevronButton>
        <IntelliIcon
          type='arrow-right'
          size='large'
        />
      </TabChevronButton>
    )
  }

  private get rightChevron (): JSX.Element | undefined {
    return (
      <TabChevronButton>
        <IntelliIcon
          type='arrow-right'
          size='large'
        />
      </TabChevronButton>
    )
  }

  private get tabList (): JSX.Element {
    const {
      tabs
    } = this.props

    const tabListItems = map(tabs, (tab, index) => (
      <TabListItem key={index}>
        {this.titleForTab(tab, index)}
      </TabListItem>
    ))

    return (
      <TabList>
        {tabListItems}
      </TabList>
    )
  }

  private indexForTab = (tabIdentifier?: number | string): number => {
    const { tabs } = this.props

    if (!tabIdentifier) {
      return 0
    }

    if (isNumber(tabIdentifier)) {
      return tabIdentifier
    }

    const tabIndex = findIndex(tabs, { 'anchorId': tabIdentifier })

    return (tabIndex === -1) ? 0 : tabIndex
  }

  private get currentTabIndex (): number {
    const {
      currentTab
    } = this.props

    return this.indexForTab(currentTab)
  }


  private clickTabHandler = (event: MouseEvent<HTMLAnchorElement>) => {
    const {
      tabs,
      onTabChange
    } = this.props

    const newTabIndex = toNumber(event.currentTarget.dataset.tabindex || 0)

    if (onTabChange && (this.currentTabIndex !== newTabIndex)) {
      onTabChange(tabs[newTabIndex], newTabIndex)
    }
  }

  private sideComponent = (
    alignment: 'left' | 'right',
    component?: JSX.Element
  ): JSX.Element | null => {
    if (!component) {
      return null
    }

    return (
      <span className={`${alignment}-component`}>
        {component}
      </span>
    )
  }

  private titleForTab = (tab: IHorizontalTabDefinition, index: number): JSX.Element => {
    const { useAnchors } = this.props
    const currentTabIndex = this.currentTabIndex

    const href = useAnchors ? tab.anchorId : '#'
    const classes = classNames({
      active: currentTabIndex === index
    })

    return (
      <TabListItemAnchor
        className={classes}
        href={href}
        onClick={this.clickTabHandler}
        data-tabindex={index}
      >
        {this.sideComponent('left', tab.leftComponent)}
        {tab.title}
        {this.sideComponent('right', tab.rightComponent)}
      </TabListItemAnchor>
    )
  }
}
