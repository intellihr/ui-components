import React, { MouseEvent } from 'react'
import { findIndex, isNumber, map, toNumber } from 'lodash'
import classNames from 'classnames'
import {
  HorizontalTabContent,
  HorizontalTabsContainer,
  HorizontalTabTitle,
  HorizontalTabTitleAnchor,
  HorizontalTabTitles
} from './style'

export interface HorizontalTabDefinition {
  /** String title to use for this tab */
  title?: string

  /** Component positioned to the left of the title */
  leftComponent?: JSX.Element

  /** Component positioned to the right of the title */
  rightComponent?: JSX.Element

  /** Anchor id used when clicking between tabs */
  anchorId?: string

  /** Custom component to render for this tab (overrides default rendering) */
  titleComponent?: JSX.Element

  /** Content to place inside the actual tab */
  content: JSX.Element | string
}

export interface HorizontalTabsProps {
  /** A list of tabs and their content to render */
  tabs: HorizontalTabDefinition[]

  /** Whether to update the url of the page with anchors when changing tabs */
  useAnchors?: boolean

  /** The tab to start opened to (by anchorId or index) */
  defaultTab?: string | number

  /** Callback to run when clicking between tabs */
  onTabChange?: (tab: HorizontalTabDefinition) => void
}

export interface HorizontalTabsState {
  currentTabIndex: number
}

export class HorizontalTabs extends React.Component<HorizontalTabsProps, HorizontalTabsState> {
  public static defaultProps: Partial<HorizontalTabsProps> = {
    useAnchors: false
  }

  constructor (props: HorizontalTabsProps) {
    super(props)
    this.state = {
      currentTabIndex: this.indexForTab(this.props.defaultTab)
    }
  }

  indexForTab = (tabIdentifier?: number | string): number => {
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

  clickTabHandler = (event: MouseEvent<HTMLAnchorElement>) => {
    const {
      tabs,
      onTabChange
    } = this.props

    const { currentTabIndex } = this.state

    const newTabIndex = toNumber(event.currentTarget.dataset.tabindex || 0)

    if (onTabChange && (currentTabIndex !== newTabIndex)) {
      onTabChange(tabs[newTabIndex])
    }

    this.setState({ currentTabIndex: newTabIndex })
  }

  sideComponent = (
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

  titleForTab = (tab: HorizontalTabDefinition, index: number): JSX.Element => {
    const { currentTabIndex } = this.state
    const { useAnchors } = this.props

    if (tab.titleComponent) {
      return <span>{tab.titleComponent}</span>
    }

    const href = useAnchors ? tab.anchorId : undefined
    const classes = classNames({
      active: currentTabIndex === index
    })

    return (
      <HorizontalTabTitleAnchor
        className={classes}
        href={href}
        onClick={this.clickTabHandler}
        data-tabindex={index}
      >
        {this.sideComponent('left', tab.leftComponent)}
        {tab.title}
        {this.sideComponent('right', tab.rightComponent)}
      </HorizontalTabTitleAnchor>
    )
  }

  get tabTitles (): JSX.Element {
    const {
      tabs
    } = this.props

    const tabTitleItems = map(tabs, (tab, index) => (
      <HorizontalTabTitle key={index}>
        {this.titleForTab(tab, index)}
      </HorizontalTabTitle>
    ))

    return (
      <HorizontalTabTitles>
        {tabTitleItems}
      </HorizontalTabTitles>
    )
  }

  get tabContent (): JSX.Element | null {
    const { currentTabIndex } = this.state
    const { tabs } = this.props

    if (currentTabIndex < 0 || currentTabIndex >= tabs.length) {
      return null
    }

    return (
      <HorizontalTabContent>
        {tabs[currentTabIndex].content}
      </HorizontalTabContent>
    )
  }

  public render (): JSX.Element | null {
    const {
      tabs
    } = this.props

    if (tabs.length === 0) {
      return null
    }

    return (
      <HorizontalTabsContainer>
        {this.tabTitles}
        {this.tabContent}
      </HorizontalTabsContainer>
    )
  }
}
