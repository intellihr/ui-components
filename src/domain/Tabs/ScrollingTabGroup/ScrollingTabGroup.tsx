import {
  clamp,
  debounce,
  findIndex,
  isNumber,
  map,
  toNumber
} from 'lodash'
import React, { MouseEvent, RefObject } from 'react'

import { Utils } from '../../../common'
import { IntelliIcon } from '../../Icons'
import {
  TabChevronButton,
  TabGroupContainer,
  TabList,
  TabListItem,
  TabListItemAnchor,
  TabParent,
  TabStyleConstants
} from './style'

export interface IScrollingTab {
  /** String title to use for this tab */
  title?: string
  /** Component positioned to the left of the title */
  leftComponent?: JSX.Element
  /** Component positioned to the right of the title */
  rightComponent?: JSX.Element
  /** Anchor href used when clicking between tabs; will use # if not provided */
  anchorId?: string
}

export interface IScrollingTabGroupProps {
  /** The current tab selected (by anchor or index). This must be provided for the component to work. */
  currentTab: string | number
  /** A list of tabs and their content to render */
  tabs: IScrollingTab[]
  /** Whether to update the url of the page with anchors when changing tabs */
  anchorsUpdateUrl?: boolean
  /** Callback to run when clicking between tabs */
  onTabChange?: (tab: IScrollingTab, index: number) => void
  /** Callback when the scroll position changes */
  onScrollUpdate?: (newScrollValue: number) => void
}

export class ScrollingTabGroup extends React.Component<IScrollingTabGroupProps, never> {
  public static defaultProps = {
    anchorsUpdateUrl: false
  }

  private tabListRef: RefObject<HTMLUListElement> = React.createRef()
  private currentlyMounted: boolean = false

  private handleScrollUpdate = debounce(() => {
    // Force a react re-render to correctly update the dom
    if (this.currentlyMounted && this.tabListRef.current) {
      this.forceUpdate()
    }
  }, 100, { leading: true })

  public componentDidMount (): void {
    this.currentlyMounted = true

    window.addEventListener('resize', this.handleScrollUpdate)

    // Force an update to set the arrows correctly
    this.forceUpdate()
  }

  public componentWillUnmount (): void {
    window.removeEventListener('resize', this.handleScrollUpdate)

    this.currentlyMounted = false
  }

  public componentDidUpdate (prevProps: Readonly<IScrollingTabGroupProps>) {
    if (this.props.currentTab !== prevProps.currentTab) {
      return this.handleScrollToTab(
        this.indexForTab(this.props.currentTab)
      )
    }
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
        {this.rightChevron}
        {this.tabList}
      </TabGroupContainer>
    )
  }

  public scrollLeft = () => this.handleScrollButton('left')
  public scrollRight = () => this.handleScrollButton('right')

  private get leftChevron (): JSX.Element | null {
    const tabListEl = this.tabListRef.current

    if (!tabListEl || tabListEl.scrollWidth <= tabListEl.clientWidth) {
      return null
    }

    const isOnLeft = (tabListEl.scrollLeft <= 0)

    return (
      <TabChevronButton
        type='button'
        disabled={isOnLeft}
        float='left'
        onClick={this.scrollLeft}
        tabIndex={-1}
        aria-hidden
      >
        <IntelliIcon
          type='arrow-left'
        />
      </TabChevronButton>
    )
  }

  private get rightChevron (): JSX.Element | null {
    const tabListEl = this.tabListRef.current

    if (!tabListEl || tabListEl.scrollWidth <= tabListEl.clientWidth) {
      return null
    }

    const isOnRight = (tabListEl.scrollLeft + tabListEl.clientWidth >= tabListEl.scrollWidth)

    return (
      <TabChevronButton
        type='button'
        disabled={isOnRight}
        float='right'
        onClick={this.scrollRight}
        tabIndex={-1}
        aria-hidden
      >
        <IntelliIcon
          type='arrow-right'
        />
      </TabChevronButton>
    )
  }

  private get tabList (): JSX.Element {
    const {
      tabs
    } = this.props

    return (
      <TabParent>
        <TabList
          innerRef={this.tabListRef}
          onScroll={this.handleScrollUpdate}
          role='tablist'
        >
          {map(tabs, this.listItemForTab)}
        </TabList>
      </TabParent>
    )
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

  private listItemForTab = (tab: IScrollingTab, index: number): JSX.Element => {
    const currentTabIndex = this.currentTabIndex

    return (
      <TabListItem
        key={index}
        role='tab'
      >
        <TabListItemAnchor
          active={currentTabIndex === index}
          href={tab.anchorId || '#'}
          onClick={this.handleClickTab}
          aria-selected={currentTabIndex === index}
          data-tabindex={index}
        >
          {this.sideComponent('left', tab.leftComponent)}
          {tab.title}
          {this.sideComponent('right', tab.rightComponent)}
        </TabListItemAnchor>
      </TabListItem>
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

    const tabIndex = findIndex(tabs, { anchorId: tabIdentifier })

    return (tabIndex === -1) ? 0 : tabIndex
  }

  private get currentTabIndex (): number {
    const {
      currentTab
    } = this.props

    return this.indexForTab(currentTab)
  }

  private handleScrollValueChange = (newScrollValue: number): boolean => {
    const {
      onScrollUpdate
    } = this.props

    if (this.currentlyMounted && this.tabListRef.current) {
      this.tabListRef.current.scrollLeft = Math.round(newScrollValue)

      if (onScrollUpdate) {
        onScrollUpdate(newScrollValue)
      }

      return true
    }

    return false
  }

  private handleScrollButton = async (direction: 'left' | 'right'): Promise<void> => {
    const tabList = this.tabListRef.current
    // Left doesn't scroll as much to counter us only using the top left position
    const directionMultiplier = (direction === 'left') ? -0.6 : 1

    if (this.currentlyMounted && tabList) {
      const currentScrollLeft = tabList.scrollLeft
      const desiredScrollLeft = currentScrollLeft + directionMultiplier * tabList.clientWidth
      let finalScrollLeft = 0

      // Determine the last tab whose top-left value is before the desired scroll position
      for (let i = 0; i < tabList.children.length; i++) {
        const tab = tabList.children.item(i) as HTMLElement
        const tabOffset = tab.offsetLeft - TabStyleConstants.MarginSize

        if (tabOffset <= desiredScrollLeft) {
          finalScrollLeft = tabOffset
        } else {
          break
        }
      }

      // Clamp scroll position between 0 and max left position (otherwise animation goes awry)
      finalScrollLeft = clamp(
        finalScrollLeft,
        0,
        tabList.scrollWidth - tabList.clientWidth
      )

      return Utils.smoothUpdate({
        startValue: currentScrollLeft,
        endValue: Math.round(finalScrollLeft),
        msTotal: TabStyleConstants.ScrollDuration,
        callback: this.handleScrollValueChange
      })
    }
  }

  private handleScrollToTab = async (tabIndex: number): Promise<void> => {
    const tabList = this.tabListRef.current

    // Ensure the tab is contained within the visible scroll area
    if (this.currentlyMounted && tabList) {
      const currentScrollLeft = tabList.scrollLeft
      const tab = tabList.children.item(tabIndex) as HTMLElement
      const tabLeft = tab.offsetLeft - TabStyleConstants.MarginSize

      if (tabLeft < currentScrollLeft) {
        return Utils.smoothUpdate({
          startValue: currentScrollLeft,
          endValue: Math.round(tabLeft),
          msTotal: TabStyleConstants.ScrollDuration,
          callback: this.handleScrollValueChange
        })
      }

      const tabRight = tab.offsetLeft + tab.clientWidth + TabStyleConstants.MarginSize

      if (tabRight > currentScrollLeft + tabList.clientWidth) {
        return Utils.smoothUpdate({
          startValue: currentScrollLeft,
          endValue: Math.round(tabRight - tabList.clientWidth),
          msTotal: TabStyleConstants.ScrollDuration,
          callback: this.handleScrollValueChange
        })
      }
    }
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
