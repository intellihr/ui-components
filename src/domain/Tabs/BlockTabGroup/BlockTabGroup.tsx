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
  const [widestWidth, setWidestWidth] = useState(0)
  const tabListRef = useRef<HTMLUListElement | null>(null)

  const previousWidestWidth = usePrevious(widestWidth)
  useLayoutEffect(() => {
    let currentWidestWidth = 0
    const children = tabListRef.current && tabListRef.current.children

    if (children) {
      if (tabSize === 'match-largest-tab') {
        /** Don't look at the last element because it is the highlight bar, not a tab */
        for (let i = 0; i < children.length - 1; i++) {
          const tabWidth = children[i].getBoundingClientRect().width || 0
          if (tabWidth > currentWidestWidth) {
            currentWidestWidth = tabWidth
          }
        }
      } else {
        currentWidestWidth = children[0].getBoundingClientRect().width
      }
    }

    if ((previousWidestWidth !== currentWidestWidth) && (currentWidestWidth > 0)) {
      setWidestWidth(currentWidestWidth)
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
        widestWidth={widestWidth}
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
        <HighlightBar width={widestWidth + 1} />
      </TabList>
    </TabGroupContainer >
  )
}

const MemoBlockTabGroup = React.memo(BlockTabGroup, isEqual)

export {
  MemoBlockTabGroup as BlockTabGroup
}
