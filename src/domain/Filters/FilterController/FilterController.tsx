import React, { ChangeEventHandler } from 'react'

import { Props, Variables } from '../../../common'
import { FontAwesomeIcon } from '../../Icons/FontAwesomeIcon'
import { InputGroup } from '../../Inputs/InputGroup'
import { TextInput } from '../../Inputs/TextInput'
import { FilterDropdown, IFilterDropdownFilter } from '../FilterDropdown/FilterDropdown'
import { FilterTag, IFilterTagDetail } from '../FilterTag/FilterTag'
import { ControllerWrapper } from './style'

export interface IFilterControllerProps {
  /** filter dropdown message of this filter controller */
  filterMessage?: string
  /** search input placeholder of this filter controller */
  searchPlaceholder?: string
  /** filter selection of this filter controller */
  filters: IFilterDropdownFilter[]
  /** filter tags of this filter controller */
  tags: IFilterTagDetail[]
  /** search value of this filter controller */
  searchValue?: string
  /** Callback when a filter is added */
  onFilterAdded: (selectedFilter: IFilterTagDetail) => void
  /** Callback when a tag is deleted */
  onTagDeleted: (selectedTag: IFilterTagDetail) => void
  /** Callback when input is added in search bar */
  onSearchUpdated: ChangeEventHandler<HTMLInputElement>
  /** Callback when input is cleared in search bar */
  onSearchCleared: (e: React.MouseEvent<HTMLButtonElement>) => void
  /** The margins around the component */
  margins?: Props.IMargins
}

export class FilterController extends React.PureComponent<IFilterControllerProps> {
  public static defaultProps: Partial<IFilterControllerProps> = {
    searchPlaceholder: 'Search'
  }

  public render (): JSX.Element | null {
    const {
      filterMessage,
      searchPlaceholder,
      filters,
      onFilterAdded,
      tags,
      onTagDeleted,
      onSearchUpdated,
      onSearchCleared,
      searchValue,
      margins
    } = this.props

    return (
      <ControllerWrapper margins={margins}>
        <InputGroup margins={{ bottom: Variables.Spacing.sXSmall }}>
          <FilterDropdown
            filterMessage={filterMessage}
            toggleComponent={this.filterButton}
            filters={filters}
            onFilterAdded={onFilterAdded}
          />
          <TextInput
            icon={<FontAwesomeIcon type='search' />}
            name='filterControllerSearchInput'
            placeholder={searchPlaceholder}
            value={searchValue}
            groupPosition='right'
            handleChange={onSearchUpdated}
            handleClear={onSearchCleared}
          />
        </InputGroup>
        <FilterTag tags={tags} onTagDeleted={onTagDeleted} />
      </ControllerWrapper>
    )
  }

  private filterButton = ({ toggleMenu, toggleComponentRef, ariaProps }: any ) => {
    return (
      <InputGroup.Button
        onClick={toggleMenu}
        innerRef={toggleComponentRef}
        groupPosition='left'
        {...ariaProps}
      >
        Filter
      </InputGroup.Button>
    )
  }
}
