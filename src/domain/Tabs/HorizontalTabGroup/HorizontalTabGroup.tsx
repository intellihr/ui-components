import React, { MouseEvent, RefObject } from 'react'
import {
  clamp,
  debounce,
  findIndex,
  isNumber,
  map,
  toNumber
} from 'lodash'
import classNames from 'classnames'
import { Utils } from '../../../common'
import { IntelliIcon } from '../../Icons'
import {
  TabGroupContainer,
  TabChevronButton,
  TabListWrapper,
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
  public static SCROLL_TIME_MS = 300

  private tabListRef: RefObject<HTMLUListElement> = React.createRef()
  private currentlyMounted: boolean = false

  private handleScrollUpdate = debounce(() => {
    // Force a react re-render to correctly update the dom
    if (this.currentlyMounted && this.tabListRef.current) {
      this.forceUpdate()
    }
  }, 100, { leading: true })

  public componentDidMount () {
    this.currentlyMounted = true

    window.addEventListener('resize', this.handleScrollUpdate)

    // Force an update to set the arrows
    this.forceUpdate()
  }

  public componentWillUnmount () {
    window.removeEventListener('resize', this.handleScrollUpdate)

    this.currentlyMounted = false
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

  private get leftChevron (): JSX.Element | null {
    const tabListEl = this.tabListRef.current

    if (!tabListEl || tabListEl.scrollWidth <= tabListEl.clientWidth) {
      return null
    }

    const isOnLeft = (tabListEl.scrollLeft <= 0)

    return (
      <TabChevronButton
        disabled={isOnLeft}
        float='left'
        onClick={this.handleLeftScroll}
        tabIndex={-1}
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
    console.log('right', tabListEl.scrollLeft, tabListEl.clientWidth, tabListEl.scrollWidth)

    return (
      <TabChevronButton
        disabled={isOnRight}
        float='right'
        onClick={this.handleRightScroll}
        tabIndex={-1}
      >
        <IntelliIcon
          type='arrow-right'
        />
      </TabChevronButton>
    )
  }

  private updateScroll = (newScrollValue: number): boolean => {
    if (this.currentlyMounted && this.tabListRef.current) {
      console.log('updateScroll', this.tabListRef.current.scrollLeft, newScrollValue)
      this.tabListRef.current.scrollLeft = Math.round(newScrollValue)
      return true
    }

    return false
  }

  private handleLeftScroll = () => this.handleScrollButton('left')
  private handleRightScroll = () => this.handleScrollButton('right')

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
        const tabOffset = tab.offsetLeft - 16 // Account for margins

        if (tabOffset <= desiredScrollLeft) {
          finalScrollLeft = tabOffset
        } else {
          break
        }
      }

      // Clamp between 0 and max left position (otherwise animation goes awry)
      finalScrollLeft = clamp(
        finalScrollLeft,
        0,
        tabList.scrollWidth
      )

      console.log('scroll', currentScrollLeft, desiredScrollLeft, finalScrollLeft, tabList.scrollWidth + tabList.clientWidth)

      return Utils.smoothUpdate({
        startValue: currentScrollLeft,
        endValue: Math.round(finalScrollLeft),
        msTotal: HorizontalTabGroup.SCROLL_TIME_MS,
        callback: this.updateScroll
      })
    }
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
      <TabListWrapper>
        <TabList
          innerRef={this.tabListRef}
          onScroll={this.handleScrollUpdate}
        >
          {tabListItems}
        </TabList>
      </TabListWrapper>
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

    const href = useAnchors ? tab.anchorId : undefined
    const classes = classNames({
      active: currentTabIndex === index
    })

    return (
      <TabListItemAnchor
        className={classes}
        href={href}
        onClick={this.clickTabHandler}
        tabIndex={0}
        data-tabindex={index}
      >
        {this.sideComponent('left', tab.leftComponent)}
        {tab.title}
        {this.sideComponent('right', tab.rightComponent)}
      </TabListItemAnchor>
    )
  }
}
