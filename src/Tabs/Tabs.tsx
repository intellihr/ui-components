import React, { MouseEvent } from 'react'
import { map, toString, isNumber, findIndex } from 'lodash'
import classNames from 'classnames'
import { TabContent, TabsContainer, TabTitle, TabTitleAnchor, TabTitles } from './style'

export interface TabDefinition {
  /** String title to use for this tab */
  title?: string

  /** Component positioned to the left of the title */
  leftIconComponent?: React.ReactType

  /** Component positioned to the right of the title */
  rightIconComponent?: React.ReactType

  /** Anchor id used when clicking between tabs */
  anchorId?: string

  /** Custom component to render for this tab (overrides default rendering) */
  titleComponent?: React.ReactType

  /** Content to place inside the actual tab */
  content: React.ReactType
}

export interface TabsProps {
  /** A list of tabs and their content to render */
  tabs: TabDefinition[]

  /** Alternate styles of tabulation */
  tabbingStyle: 'horizontal'

  /** Whether to update the url of the page with anchors when changing tabs */
  useAnchors?: boolean

  /** The tab to start opened to (by anchorId or index) */
  startTab: string | number
}

export interface TabsState {
  currentTabIndex: number
}

export class Tabs extends React.Component<TabsProps, TabsState> {
  public state: TabsState = {
    currentTabIndex: 0
  }

  public static defaultProps: Partial<TabsProps> = {
    tabbingStyle: 'horizontal',
    useAnchors: false
  }

  componentDidUpdate (prevProps: TabsProps) {
    if (prevProps.startTab !== this.props.startTab) {
      this.clickTabHandler(this.props.startTab)
    }
  }

  clickTabHandler = (newTab: number | string) => {
    const { tabs } = this.props

    let newIndex = 0

    if (isNumber(newTab)) {
      newIndex = newTab
    } else {
      const find = findIndex(tabs, { 'anchorId': newTab })

      if (find !== -1) newIndex = find
    }

    this.setState({ currentTabIndex: newIndex })
  }

  iconComponent = (
    alignment: 'left' | 'right',
    component?: React.ReactType
  ): JSX.Element | null => {
    if (!component) {
      return null
    }

    return (
      <span className={`${alignment}-icon`}>
        {component}
      </span>
    )
  }

  titleForTab = (tab: TabDefinition, index: number): JSX.Element => {
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
      <TabTitleAnchor
        className={classes}
        href={href}
        onClick={() => this.clickTabHandler(index)}
      >
        {this.iconComponent('left', tab.leftIconComponent)}
        {tab.title}
        {this.iconComponent('right', tab.rightIconComponent)}
      </TabTitleAnchor>
    )
  }

  get tabTitles (): JSX.Element {
    const {
      tabs
    } = this.props

    const tabTitleItems = map(tabs, (tab, index) => (
      <TabTitle key={index}>
        {this.titleForTab(tab, index)}
      </TabTitle>
    ))

    return (
      <TabTitles>
        {tabTitleItems}
      </TabTitles>
    )
  }

  get tabContent (): JSX.Element | null {
    const { currentTabIndex } = this.state
    const { tabs } = this.props

    if (currentTabIndex < 0 || currentTabIndex >= tabs.length) {
      return null
    }

    return (
      <TabContent>
        {tabs[currentTabIndex].content}
      </TabContent>
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
      <TabsContainer>
        {this.tabTitles}
        {this.tabContent}
      </TabsContainer>
    )
  }
}
