import {
  isEqual,
  isNumber,
  toNumber
} from 'lodash'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

import { Props, Variables } from '../../../common'
import { IconValue } from '../../Icons'
import { Text } from '../../Typographies/Text'
import {
  HighlightBar,
  TabGroupContainer,
  TabList,
  TabListItem,
  TabListItemButton
} from './style'

export interface IBlockTab {
  /** Icon to use for the tab */
  icon?: IconValue
  /** String title to use for the tab */
  title?: string
}

type TabSize = 'small' | 'medium' | 'large' | 'match-largest-tab'

export interface IBlockTabGroupProps {
  /** The current tab selected */
  currentTab: string | number
  /** A list of tabs and their content to render */
  tabs: IBlockTab[]
  /** Callback to run when clicking between tabs */
  onTabChange?: (tab: IBlockTab, index: number) => void
  /** Size of the tab */
  tabSize?: TabSize
  /** The data-component-context */
  componentContext?: string
  /** The margins around the component */
  margins?: Props.IMargins
}

export interface ITabInfo {
  index: number
  width: number
}

const getCurrentTabIndex = (tabIdentifier?: number | string) => {
  if (!tabIdentifier) {
    return 0
  }

  if (isNumber(tabIdentifier)) {
    return tabIdentifier
  }

  return 0
}

function usePrevious<T> (value: T) {
  const ref = useRef<T>()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

const BlockTabGroup: React.FC<IBlockTabGroupProps> = ({
  currentTab,
  tabs,
  onTabChange,
  tabSize = 'medium',
  componentContext,
  margins
}) => {
  const [widestTab, setWidestTab] = useState<ITabInfo | undefined>(undefined)
  const tabListRef = useRef<HTMLUListElement | null>(null)

  const previousWidestTab = usePrevious(widestTab)
  useLayoutEffect(() => {
    let widestWidth = 0
    let index = 0
    const children = tabListRef.current && tabListRef.current.children

    if (children) {
      if (tabSize === 'match-largest-tab') {
        for (let i = 0; i < children.length - 1; i++) {
          const tabWidth = children[i].getBoundingClientRect().width || 0
          if (tabWidth > widestWidth) {
            widestWidth = tabWidth
            index = i
          }
        }
      } else {
        widestWidth = children[0].getBoundingClientRect().width
      }
    }

    if ((previousWidestTab && previousWidestTab.width) !== widestWidth && widestWidth > 0) {
      setWidestTab({ index, width: widestWidth })
    }
  })

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const newTabIndex = toNumber(event.currentTarget.dataset.tabindex || 0)
    if (onTabChange && (getCurrentTabIndex(currentTab) !== newTabIndex)) {
      onTabChange(tabs[newTabIndex], newTabIndex)
    }
  }

  const currentTabIndex = getCurrentTabIndex(currentTab)
  const tabItems = tabs.map((tab, index) => {
    return (
      <TabListItem
        key={index}
        role='tab'
        active={currentTabIndex === index}
        index={index}
        tabInfo={widestTab || undefined}
        tabSize={tabSize}
      >
        <TabListItemButton
          type='button'
          active={currentTabIndex === index}
          tabSize={tabSize}
          onClick={handleOnClick}
          aria-selected={currentTabIndex === index}
          data-tabindex={index}
        >
          {tab.icon}
          {tab.title && (
            <Text margins={{ left: tab.icon ? Variables.Spacing.sXSmall : 0 }}>
              {tab.title}
            </Text>
          )}
        </TabListItemButton>
      </TabListItem>
    )
  })

  return (
    <TabGroupContainer
      data-component-type={Props.ComponentType.BlockTabGroup}
      data-component-context={componentContext}
      margins={margins}
      tabSize={tabSize}
    >
      <TabList
        ref={tabListRef}
        role='tablist'
      >
        {tabItems}
        <HighlightBar width={widestTab && widestTab.width + 1 || 0} />
      </TabList>
    </TabGroupContainer >
  )
}

const MemoBlockTabGroup = React.memo(BlockTabGroup, isEqual)

export {
  MemoBlockTabGroup as BlockTabGroup
}
