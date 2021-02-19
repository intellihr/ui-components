import React, { ChangeEventHandler } from 'react'

import { Props } from '../../../common'
import { Button } from '../../Buttons/Button'
import { useTranslateFunction } from '../../Defaults/Defaults/Defaults'
import { FontAwesomeIcon } from '../../Icons/FontAwesomeIcon'
import { InputGroup } from '../../Inputs/InputGroup'
import { TextInput } from '../../Inputs/TextInput'
import {
  AddFilterDropdownMenu, IAddFilterDropdownMenuFilter,
  IAddedFilter
} from '../AddFilterDropdownMenu/AddFilterDropdownMenu'
import { FilterTag, IFilterTagDetail } from '../FilterTag/FilterTag'
import { ControllerWrapper, StyledController, StyledLeftComponent, StyledRightComponent } from './style'

export interface IFilterControllerProps<FilterValue = string | number> {
  /** filter dropdown message of this filter controller */
  filterMessage?: string
  /** search input placeholder of this filter controller */
  searchPlaceholder?: string
  /** filter selection of this filter controller */
  filters: IAddFilterDropdownMenuFilter[]
  /** filter tags of this filter controller */
  tags: IFilterTagDetail[]
  /** search value of this filter controller */
  searchValue?: string
  /** Callback when a filter is added */
  onFilterAdded: (selectedFilter: IAddedFilter<FilterValue>) => void
  /** Callback when a tag is deleted */
  onTagDeleted: (selectedTag: IFilterTagDetail) => void
  /** Callback when input is added in search bar */
  onSearchUpdated: ChangeEventHandler<HTMLInputElement>
  /** Callback when input is cleared in search bar */
  onSearchCleared: (e: React.MouseEvent<HTMLButtonElement>) => void
  /** The margins around the component */
  margins?: Props.IMargins
  /** The data-component-context */
  componentContext?: string
  /** A component that is shown to the right of the search bar */
  rightComponent?: JSX.Element
  /** Whether to hide the search bar component */
  hideSearchBar?: boolean
}

const FilterController: React.FC<IFilterControllerProps> = ({
  filterMessage,
  searchPlaceholder,
  filters,
  onFilterAdded,
  tags,
  onTagDeleted,
  onSearchUpdated,
  onSearchCleared,
  searchValue,
  margins,
  componentContext,
  rightComponent,
  hideSearchBar
}) => {
  const t = useTranslateFunction()

  return (
    <ControllerWrapper
      margins={margins}
      data-component-type={Props.ComponentType.FilterController}
      data-component-context={componentContext}
    >
      <StyledController hasBottomMargin={tags.length > 0}>
        <StyledLeftComponent>
          {
            hideSearchBar ?
              <AddFilterDropdownMenu
                componentContext={componentContext && `${componentContext}-dropdown-menu`}
                filterMessage={filterMessage}
                toggleComponent={filterButton(t('filter'))}
                filters={filters}
                onFilterAdded={onFilterAdded}
              />
              :
              <InputGroup>
                <AddFilterDropdownMenu
                  componentContext={componentContext && `${componentContext}-dropdown-menu`}
                  filterMessage={filterMessage}
                  toggleComponent={inputGroupFilterButton(t('filter'))}
                  filters={filters}
                  onFilterAdded={onFilterAdded}
                />
                <TextInput
                  icon={<FontAwesomeIcon type='solid' icon='search' />}
                  name='filterControllerSearchInput'
                  placeholder={searchPlaceholder || t('searchPlaceholder')}
                  value={searchValue}
                  groupPosition='right'
                  handleChange={onSearchUpdated}
                  handleClear={onSearchCleared}
                />
              </InputGroup>
          }
        </StyledLeftComponent>
        {rightComponent && (
          <StyledRightComponent>
            {rightComponent}
          </StyledRightComponent>
        )}
      </StyledController>
      <FilterTag
        componentContext={componentContext && `${componentContext}-filter-tag`}
        tags={tags}
        onTagDeleted={onTagDeleted}
      />
    </ControllerWrapper>
  )
}

const inputGroupFilterButton = (i18nFilter: string) => ({ toggleMenu, toggleComponentRef, ariaProps }: any) => {
  return (
    <InputGroup.Button
      onClick={toggleMenu}
      innerRef={toggleComponentRef}
      groupPosition='left'
      {...ariaProps}
    >
      {i18nFilter}
    </InputGroup.Button>
  )
}

const filterButton = (i18nFilter: string) => ({ toggleMenu, toggleComponentRef, ariaProps }: any) => {
  return (
    <Button
      type='neutral'
      icon={<FontAwesomeIcon type='solid' icon='caret-down' />}
      iconAlignment={'right'}
      onClick={toggleMenu}
      innerRef={toggleComponentRef}
      {...ariaProps}
    >
      {i18nFilter}
    </Button>
  )
}

export {
  FilterController
}
