import React, { MouseEvent } from 'react'
import { map, isNumber, findIndex } from 'lodash'
import classNames from 'classnames'
import { TabContent, TabsContainer, TabTitle, TabTitleAnchor, TabTitles } from './style'

export interface TabDefinition {
  /** String title to use for this tab */
  title?: string

  /** Component positioned to the left of the title */
  leftComponent?: React.ReactType

  /** Component positioned to the right of the title */
  rightComponent?: React.ReactType

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
  startTab?: string | number
}

export interface TabsState {
  currentTabIndex: number
}

export class Tabs extends React.Component<TabsProps, TabsState> {
  public static defaultProps: Partial<TabsProps> = {
    tabbingStyle: 'horizontal',
    useAnchors: false
  }

  constructor (props: TabsProps) {
    super(props)
    this.state = {
      currentTabIndex: this.tabIndexForStartTab(this.props.startTab)
    }
  }

  tabIndexForStartTab = (newTab?: number | string): number => {
    const { tabs } = this.props

    if (!newTab) {
      return 0
    }

    if (isNumber(newTab)) {
      return newTab
    }

    const find = findIndex(tabs, { 'anchorId': newTab })

    return (find === -1) ? 0 : find
  }

  clickTabHandler = (e: MouseEvent<HTMLAnchorElement>) => {
    e.target

    const newIndex = this.tabIndexForStartTab(e.target)

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
        {this.iconComponent('left', tab.leftComponent)}
        {tab.title}
        {this.iconComponent('right', tab.rightComponent)}
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
