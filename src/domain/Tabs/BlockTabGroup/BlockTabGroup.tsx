import {
  isEqual,
  isNumber,
  toNumber
} from 'lodash'
import React, { useLayoutEffect, useRef, useState } from 'react'

import { Props, Variables } from '../../../common'
import { usePrevious } from '../../../common/hooks'
import { IconValue } from '../../Icons'
import { Text } from '../../Typographies/Text'
import {
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

type TabSize = 'small' | 'medium' | 'large' | 'fit-content' | 'match-largest-tab'

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

const BlockTabGroup: React.FC<IBlockTabGroupProps> = ({
  currentTab,
  tabs,
  onTabChange,
  tabSize = 'medium',
  componentContext,
  margins
}) => {
  const [widestTabWidth, setWidestTabLength] = useState<number | undefined>(undefined)
  const tabListItemRefs = useRef<Array<React.MutableRefObject<HTMLLIElement | null>>>(Array.from({ length: tabs.length }).map(() => React.createRef()))

  const previousTabs = usePrevious(tabs)
  if (tabSize === 'match-largest-tab' && previousTabs && previousTabs.length !== tabs.length) {
    tabListItemRefs.current = Array.from({ length: tabs.length }).map(() => React.createRef<HTMLLIElement | null>())
  }

  useLayoutEffect(() => {
    if (tabSize === 'match-largest-tab') {
      let widestTab = 0
      tabListItemRefs.current.forEach((tabRef) => {
        const tabWidth = tabRef.current && tabRef.current.clientWidth || 0
        if (tabWidth > widestTab) {
          widestTab = tabWidth
        }
      })
      setWidestTabLength(widestTab)
    }
  }, [tabSize, tabListItemRefs.current, setWidestTabLength])

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
        ref={tabListItemRefs.current[index]}
        key={index}
        role='tab'
        active={currentTabIndex === index}
        tabWidth={tabSize === 'match-largest-tab' ? widestTabWidth : undefined}
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
      <TabList role='tablist'>
        {tabItems}
      </TabList>
    </TabGroupContainer >
  )
}

const MemoBlockTabGroup = React.memo(BlockTabGroup, isEqual)

export {
  MemoBlockTabGroup as BlockTabGroup
}
